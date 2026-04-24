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
// 🧾 Projetos
// Dica: coloque os prints em uma pasta "img" e ajuste o caminho em "image".
const projects = [
  {
    title: 'Missão Dengue Zero – Jogo 3D',
    tags: ['Unity', 'C#', 'Android', 'Google Play'],
    description:
      'Jogo 3D desenvolvido em Unity com foco em educação e conscientização sobre a Dengue. Inclui mecânicas de exploração, interação com NPCs e sistema de missões.',
    role: 'Game Developer',
    link: 'https://play.google.com/store/apps/details?id=com.MindEleve.MissaoDengueZero',
    // salve um print do jogo na pasta img, por exemplo:
    // img/missao-dengue-zero.png
    image: 'img/missao-dengue-zero.png',
  },
  {
    title: 'DengCheck – App de combate à dengue',
    tags: ['Android', 'iOS', 'Mobile', 'Flutter', 'Google Play'],
    description:
      'Aplicativo mobile focado em prevenção e monitoramento de focos de dengue, desenvolvido em equipe como solução de apoio à saúde pública.',
    role: 'Mobile Developer (colaboração)',
    link: 'https://play.google.com/store/apps/details?id=com.dengue.dengueapp1',
    // print da tela do app
    image: 'img/dengcheck.png',
  },
  {
  title: 'Recomeçar – Plataforma Mobile de Acompanhamento',
  tags: ['Flutter', 'Dart', 'Android', 'UI/UX'],
  description:
    'Aplicativo mobile desenvolvido em Flutter com foco em performance, usabilidade e design centrado no usuário. Possui interface moderna, navegação fluida e estrutura bem organizada, oferecendo uma experiência eficiente para acompanhamento e interação ao longo da jornada do usuário.',
  role: 'Mobile Developer',
  link: 'https://play.google.com/store/apps/details?id=com.mindeleve.recomecarapp',
  image: 'img/recomecar.webp',
  },
 {
  title: 'TaskBoard – Sistema Interativo de Produtividade',
  tags: ['JavaScript', 'HTML', 'CSS', 'UX/UI'],
  description:
    'Sistema web interativo para gestão de tarefas com interface moderna e responsiva. Implementa funcionalidades completas de CRUD, filtros inteligentes, busca em tempo real e persistência de dados via localStorage. O projeto destaca boas práticas de desenvolvimento front-end, organização de código e foco em experiência do usuário.',
  role: 'Front-end Developer',
  link: 'https://task-board-1bexhbjz3-carlos-magnos-projects-389ad41d.vercel.app/',
  image: 'img/taskboard.png',
  },
  {
  title: 'MsTech – Site Profissional de Serviços de TI',
  tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Responsivo'],
  description:
    'Site institucional desenvolvido para a MsTech, focado na apresentação de serviços de tecnologia e conversão de clientes. Possui layout moderno, responsividade completa para dispositivos móveis, seções estratégicas de apresentação, serviços, contato direto via WhatsApp e otimização para experiência do usuário. O projeto evidencia habilidades em desenvolvimento front-end, design visual e construção de interfaces voltadas para negócios reais.',
  role: 'Front-end Developer & UI Designer',
  link: 'https://ms-tech-ten.vercel.app/',
  image: 'img/mstech.jpeg',
  },
  {
    title: 'Sistema acadêmico com MySQL',
    tags: ['MySQL', 'Modelagem de dados'],
    description:
      'Projeto acadêmico com modelagem de banco relacional, normalização e construção de consultas SQL para relatórios. Código privado por conter dados internos de estudo.',
    role: 'Database Developer (projeto acadêmico)',
    link: null,           
    visibility: 'private' 
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

    footer.appendChild(role);

    // Link / status
    if (project.link && project.link !== '#') {
      const link = document.createElement('a');
      link.href = project.link;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = 'Ver na Google Play ↗';
      footer.appendChild(link);
    } else if (project.visibility === 'private') {
      const privateLabel = document.createElement('span');
      privateLabel.className = 'project-private';
      privateLabel.textContent = 'Código privado';
      footer.appendChild(privateLabel);
    } else if (project.link === '#') {
      const soon = document.createElement('span');
      soon.className = 'project-private';
      soon.textContent = 'Em breve';
      footer.appendChild(soon);
    }

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
