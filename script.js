// ===== Dados do portfólio (editáveis) =====

// 🧩 Soft skills (você pode ajustar se quiser)
const softSkills = [
  'Trabalho em equipe',
  'Liderança',
  'Pensamento criativo',
  'Resolução de problemas',
  'Comunicação',
  'Proatividade',
];

// 🛠 Tecnologias
const techSkills = [
  'JavaScript',
  'HTML & CSS',
  'Flutter & Dart',
  'Unity & C#',
  'MySQL',
  'Firebase',
  'Git & GitHub',
];

// 🧾 Projetos
// Dica: coloque os prints do jogo em uma pasta "img" e ajuste o caminho em "image".
const projects = [
  {
    title: 'Missão Dengue Zero – Jogo 3D',
    tags: ['Unity', 'C#', 'Android', 'Google Play'],
    description:
      'Jogo 3D desenvolvido em Unity com foco em educação e conscientização sobre a Dengue. Inclui mecânicas de exploração, interação com NPCs e sistema de missões.',
    role: 'Game Developer',
    link: 'https://play.google.com/store/apps/details?id=com.MindEleve.MissaoDengueZero',
    // 👉 Coloque aqui o caminho da imagem do jogo no seu projeto:
    // por exemplo, salve um print como "img/missao-dengue-zero.png"
    image: 'img/missao-dengue-zero.png',
  },
  {
    title: 'Aplicativo Mobile em Flutter',
    tags: ['Flutter', 'Dart', 'Mobile'],
    description:
      'Aplicativo mobile multiplataforma com interface moderna, focado em boas práticas de organização de código e experiência do usuário.',
    role: 'Mobile Developer',
    link: '#', // troque pelo link do GitHub ou loja quando tiver
  },
  {
    title: 'Dashboard Web com JavaScript',
    tags: ['JavaScript', 'HTML', 'CSS'],
    description:
      'Dashboard web responsivo para visualização de métricas, com componentes reutilizáveis, filtros dinâmicos e layout moderno.',
    role: 'Front-end Developer',
    link: '#',
  },
  {
    title: 'Sistema com MySQL',
    tags: ['MySQL', 'Modelagem de dados'],
    description:
      'Projeto acadêmico com modelagem de banco relacional, normalização e construção de consultas SQL para relatórios.',
    role: 'Database Developer',
    link: '#',
  },
];

// ===== Funções de render =====
function renderList(list, elementId) {
  const ul = document.getElementById(elementId);
  if (!ul) return;
  list.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  projects.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'card project-card reveal';

    // Gradiente de hover
    const gradient = document.createElement('div');
    gradient.className = 'project-gradient';
    card.appendChild(gradient);

    // Thumbnail (se houver imagem)
    if (project.image) {
      const thumb = document.createElement('img');
      thumb.src = project.image;
      thumb.alt = project.title;
      thumb.className = 'project-thumb';
      card.appendChild(thumb);
    }

    // Chips de tags
    const chipRow = document.createElement('div');
    chipRow.className = 'project-chip-row';
    project.tags.forEach((tag) => {
      const chip = document.createElement('span');
      chip.className = 'project-chip';
      chip.textContent = tag;
      chipRow.appendChild(chip);
    });

    // Título
    const title = document.createElement('h3');
    title.textContent = project.title;

    // Descrição
    const desc = document.createElement('p');
    desc.textContent = project.description;

    // Rodapé
    const footer = document.createElement('div');
    footer.className = 'project-footer';

    const role = document.createElement('span');
    role.textContent = project.role;

    const link = document.createElement('a');
    link.href = project.link || '#';
    link.target =
      project.link && project.link !== '#' ? '_blank' : '_self';
    link.rel = 'noopener';
    link.textContent =
      project.link && project.link !== '#'
        ? 'Ver na Google Play ↗'
        : 'Ver projeto';

    footer.appendChild(role);
    footer.appendChild(link);

    // Monta o card
    card.appendChild(chipRow);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(footer);

    grid.appendChild(card);
  });
}

// ===== Reveal on scroll =====
function handleScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

// ===== Inicialização =====
document.addEventListener('DOMContentLoaded', () => {
  // ano no footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // listas
  renderList(softSkills, 'softSkillsList');
  renderList(techSkills, 'techSkillsList');

  // projetos
  renderProjects();

  // marca seções / cards para revelar
  document
    .querySelectorAll(
      '.section, .card, .hero-content, .hero-photo-card, .section-header'
    )
    .forEach((el) => el.classList.add('reveal'));

  handleScrollReveal();
  window.addEventListener('scroll', handleScrollReveal);
});
