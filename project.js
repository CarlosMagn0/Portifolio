function getCurrentProject() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const data = window.portfolioData || {};
  return (data.projects || []).find((project) => project.id === id);
}

function updateProjectMeta(project) {
  const title = `${project.title} | Carlos Magno Silva`;
  const description = `${project.description} Tecnologias: ${project.tags.join(', ')}.`;
  const url = `https://portifolio-carlos-magno.vercel.app/project.html?id=${encodeURIComponent(project.id)}`;
  const image = project.image
    ? `https://portifolio-carlos-magno.vercel.app/${project.image}`
    : 'https://portifolio-carlos-magno.vercel.app/img/foto-carlos-magno.jpg';

  document.title = title;

  const setters = [
    ['meta[name="description"]', 'content', description],
    ['link[rel="canonical"]', 'href', url],
    ['meta[property="og:title"]', 'content', title],
    ['meta[property="og:description"]', 'content', description],
    ['meta[property="og:url"]', 'content', url],
    ['meta[property="og:image"]', 'content', image],
    ['meta[name="twitter:title"]', 'content', title],
    ['meta[name="twitter:description"]', 'content', description],
    ['meta[name="twitter:image"]', 'content', image],
  ];

  setters.forEach(([selector, attr, value]) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute(attr, value);
  });
}

function renderListItems(items, className) {
  const list = createElement('ul', className || 'detail-list');
  items.forEach((item) => list.appendChild(createElement('li', null, item)));
  return list;
}

function renderTagCloud(tags) {
  const wrap = createElement('div', 'detail-tag-cloud');
  tags.forEach((tag) => wrap.appendChild(createElement('span', 'project-chip', tag)));
  return wrap;
}

function renderProjectNotFound(root) {
  root.innerHTML = '';
  const card = createElement('div', 'not-found-card card glass reveal visible');
  card.appendChild(createElement('span', 'section-eyebrow', 'Projeto não encontrado'));
  card.appendChild(createElement('h1', null, 'Esse estudo de caso não está disponível'));
  card.appendChild(createElement('p', null, 'Volte para a lista de projetos e escolha um item publicado no portfólio.'));
  const link = createElement('a', 'btn primary', 'Voltar aos projetos');
  link.href = 'index.html#projects';
  card.appendChild(link);
  root.appendChild(card);
}

function renderProjectDetail(project) {
  const root = document.getElementById('projectDetail');
  if (!root) return;

  if (!project) {
    renderProjectNotFound(root);
    return;
  }

  updateProjectMeta(project);
  root.innerHTML = '';

  const back = createElement('a', 'back-link reveal visible', '← Voltar para projetos');
  back.href = 'index.html#projects';
  root.appendChild(back);

  const hero = createElement('article', 'project-detail-hero card glass reveal visible');
  const heroGrid = createElement('div', 'project-detail-grid');
  const copy = createElement('div', 'project-detail-copy');

  copy.appendChild(createElement('span', 'section-eyebrow', project.category));
  copy.appendChild(createElement('h1', null, project.title));
  copy.appendChild(createElement('p', 'project-detail-lead', project.description));

  const meta = createElement('div', 'detail-meta-pills');
  [project.year, project.status, project.role].forEach((item) => meta.appendChild(createElement('span', null, item)));
  copy.appendChild(meta);

  const actions = createElement('div', 'project-actions detail-actions');
  actions.appendChild(createActionLink({
    href: project.github,
    label: project.github ? 'GitHub' : 'GitHub privado',
    disabled: !project.github,
    ariaLabel: `Abrir repositório do projeto ${project.title}`,
  }));
  actions.appendChild(createActionLink({
    href: project.demo,
    label: project.demoLabel || 'Demo',
    disabled: !project.demo,
    ariaLabel: `Abrir demonstração do projeto ${project.title}`,
  }));
  copy.appendChild(actions);

  const media = createElement('div', 'project-detail-media');
  if (project.image) {
    const img = document.createElement('img');
    img.src = project.image;
    img.alt = `Imagem principal do projeto ${project.title}`;
    img.loading = 'eager';
    img.decoding = 'async';
    media.appendChild(img);
  } else {
    const fallback = createElement('div', 'project-image-fallback detail-fallback');
    fallback.appendChild(createElement('span', null, 'SQL'));
    fallback.appendChild(createElement('small', null, 'Projeto acadêmico de dados'));
    media.appendChild(fallback);
  }

  heroGrid.appendChild(copy);
  heroGrid.appendChild(media);
  hero.appendChild(heroGrid);
  root.appendChild(hero);

  const layout = createElement('div', 'detail-layout');
  const main = createElement('div', 'detail-main');
  const aside = createElement('aside', 'detail-aside card glass reveal');

  const problemSolution = createElement('section', 'detail-section card glass reveal');
  problemSolution.appendChild(createElement('span', 'section-eyebrow', 'Problema e solução'));
  problemSolution.appendChild(createElement('h2', null, 'Contexto do projeto'));

  const twoCol = createElement('div', 'detail-two-col');
  const problem = createElement('div');
  problem.appendChild(createElement('h3', null, 'Problema'));
  problem.appendChild(createElement('p', null, project.problem));
  const solution = createElement('div');
  solution.appendChild(createElement('h3', null, 'Solução'));
  solution.appendChild(createElement('p', null, project.solution));
  twoCol.appendChild(problem);
  twoCol.appendChild(solution);
  problemSolution.appendChild(twoCol);
  main.appendChild(problemSolution);

  const tech = createElement('section', 'detail-section card glass reveal');
  tech.appendChild(createElement('span', 'section-eyebrow', 'Tecnologias'));
  tech.appendChild(createElement('h2', null, 'Stack utilizada'));
  tech.appendChild(renderTagCloud(project.tags));
  main.appendChild(tech);

  const architecture = createElement('section', 'detail-section card glass reveal');
  architecture.appendChild(createElement('span', 'section-eyebrow', 'Arquitetura'));
  architecture.appendChild(createElement('h2', null, 'Como foi estruturado'));
  architecture.appendChild(renderListItems(project.architecture));
  main.appendChild(architecture);

  const gallery = createElement('section', 'detail-section card glass reveal');
  gallery.appendChild(createElement('span', 'section-eyebrow', 'Galeria'));
  gallery.appendChild(createElement('h2', null, 'Prints e visual do projeto'));
  const galleryGrid = createElement('div', 'gallery-grid');
  if (project.gallery.length) {
    project.gallery.forEach((src) => {
      const item = createElement('div', 'gallery-item');
      const img = document.createElement('img');
      img.src = src;
      img.alt = `Print do projeto ${project.title}`;
      img.loading = 'lazy';
      img.decoding = 'async';
      item.appendChild(img);
      galleryGrid.appendChild(item);
    });
  } else {
    const item = createElement('div', 'gallery-item gallery-empty');
    item.appendChild(createElement('span', null, 'Documentação privada'));
    item.appendChild(createElement('small', null, 'Projeto acadêmico sem prints públicos.'));
    galleryGrid.appendChild(item);
  }
  gallery.appendChild(galleryGrid);
  main.appendChild(gallery);

  const learnings = createElement('section', 'detail-section card glass reveal');
  learnings.appendChild(createElement('span', 'section-eyebrow', 'Desafios e aprendizados'));
  learnings.appendChild(createElement('h2', null, 'O que evoluiu'));
  const learningGrid = createElement('div', 'detail-two-col');
  const challenges = createElement('div');
  challenges.appendChild(createElement('h3', null, 'Principais desafios'));
  challenges.appendChild(renderListItems(project.challenges));
  const learned = createElement('div');
  learned.appendChild(createElement('h3', null, 'Aprendizados'));
  learned.appendChild(renderListItems(project.learnings));
  learningGrid.appendChild(challenges);
  learningGrid.appendChild(learned);
  learnings.appendChild(learningGrid);
  main.appendChild(learnings);

  aside.appendChild(createElement('span', 'section-eyebrow', 'Resumo'));
  aside.appendChild(createElement('h2', null, 'Papel e impacto'));

  const summary = createElement('div', 'detail-summary-list');
  [
    ['Categoria', project.category],
    ['Papel', project.role],
    ['Ano', project.year],
    ['Status', project.status],
  ].forEach(([label, value]) => {
    const row = createElement('div', 'summary-row');
    row.appendChild(createElement('span', null, label));
    row.appendChild(createElement('strong', null, value));
    summary.appendChild(row);
  });
  aside.appendChild(summary);

  const metrics = createElement('div', 'detail-metrics');
  project.metrics.forEach((metric) => metrics.appendChild(createElement('span', null, metric)));
  aside.appendChild(metrics);

  layout.appendChild(main);
  layout.appendChild(aside);
  root.appendChild(layout);
}

function renderRelatedProjects(currentProject) {
  const grid = document.getElementById('relatedProjects');
  const data = window.portfolioData || {};
  if (!grid || !currentProject) return;

  const related = data.projects
    .filter((project) => project.id !== currentProject.id)
    .slice(0, 3);

  related.forEach((project, index) => {
    const card = createElement('article', 'related-project-card card glass reveal');
    card.style.setProperty('--delay', `${index * 80}ms`);
    card.appendChild(createElement('span', 'section-eyebrow', project.category));
    card.appendChild(createElement('h3', null, project.title));
    card.appendChild(createElement('p', null, project.description));
    const link = createElement('a', 'project-action primary-link', 'Ver detalhes');
    link.href = getProjectDetailsUrl(project);
    card.appendChild(link);
    grid.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const project = getCurrentProject();
  renderProjectDetail(project);
  renderRelatedProjects(project);
  setupScrollReveal();
  setupMagneticButtons();
});
