// ========================================================================
// DADOS DO PORTFÓLIO
// ========================================================================

const contactLinks = {
  github: 'https://github.com/CarlosMagn0',
  linkedin: 'https://br.linkedin.com/in/carlos-magno-silva-7720232ba',
  whatsapp: 'https://wa.me/5562996963978',
  email: 'mailto:carlosmagnos1005@gmail.com',
  cv: 'img/curriculo-carlos-magno.pdf',
};

const techIcons = {
  React: 'https://cdn.simpleicons.org/react/61DAFB',
  'Next.js': 'https://cdn.simpleicons.org/nextdotjs/FFFFFF',
  TypeScript: 'https://cdn.simpleicons.org/typescript/3178C6',
  JavaScript: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  HTML5: 'https://cdn.simpleicons.org/html5/E34F26',
  CSS3: 'https://cdn.simpleicons.org/css3/1572B6',
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  Firebase: 'https://cdn.simpleicons.org/firebase/FFCA28',
  Flutter: 'https://cdn.simpleicons.org/flutter/02569B',
  Dart: 'https://cdn.simpleicons.org/dart/0175C2',
  MySQL: 'https://cdn.simpleicons.org/mysql/4479A1',
  Git: 'https://cdn.simpleicons.org/git/F05032',
  GitHub: 'https://cdn.simpleicons.org/github/FFFFFF',
  Vercel: 'https://cdn.simpleicons.org/vercel/FFFFFF',
  Figma: 'https://cdn.simpleicons.org/figma/F24E1E',
  Unity: 'https://cdn.simpleicons.org/unity/FFFFFF',
};

const featuredTech = [
  { name: 'React', icon: techIcons.React },
  { name: 'Next.js', icon: techIcons['Next.js'] },
  { name: 'Node.js', icon: techIcons['Node.js'] },
  { name: 'Flutter', icon: techIcons.Flutter },
  { name: 'Firebase', icon: techIcons.Firebase },
  { name: 'TypeScript', icon: techIcons.TypeScript },
  { name: 'JavaScript', icon: techIcons.JavaScript },
  { name: 'GitHub', icon: techIcons.GitHub },
  { name: 'MySQL', icon: techIcons.MySQL },
  { name: 'HTML5', icon: techIcons.HTML5 },
  { name: 'CSS3', icon: techIcons.CSS3 },
  { name: 'Git', icon: techIcons.Git },
];

const skillCategories = [
  {
    title: 'Frontend',
    description: 'Interfaces responsivas, acessíveis e orientadas à experiência do usuário.',
    skills: [
      { name: 'React', level: 82 },
      { name: 'Next.js', level: 72 },
      { name: 'TypeScript', level: 74 },
      { name: 'JavaScript', level: 86 },
      { name: 'HTML5', level: 92 },
      { name: 'CSS3', level: 90 },
    ],
  },
  {
    title: 'Backend',
    description: 'APIs, regras de negócio, autenticação e integrações com banco de dados.',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'APIs REST', level: 76 },
      { name: 'Autenticação', level: 72 },
      { name: 'Arquitetura', level: 74 },
    ],
  },
  {
    title: 'Mobile',
    description: 'Aplicações mobile com foco em performance, usabilidade e publicação.',
    skills: [
      { name: 'Flutter', level: 88 },
      { name: 'Dart', level: 86 },
      { name: 'Android', level: 78 },
      { name: 'UI Mobile', level: 82 },
    ],
  },
  {
    title: 'Banco de Dados',
    description: 'Modelagem, consultas, persistência local e dados em tempo real.',
    skills: [
      { name: 'Firebase', level: 82 },
      { name: 'Cloud Firestore', level: 80 },
      { name: 'MySQL', level: 76 },
      { name: 'Hive', level: 78 },
    ],
  },
  {
    title: 'Ferramentas',
    description: 'Fluxo de versionamento, deploy, prototipação e colaboração.',
    skills: [
      { name: 'Git', level: 84 },
      { name: 'GitHub', level: 84 },
      { name: 'Vercel', level: 78 },
      { name: 'Figma', level: 72 },
    ],
  },
  {
    title: 'Cloud',
    description: 'Hospedagem, serviços gerenciados, autenticação e entrega contínua.',
    skills: [
      { name: 'Firebase Hosting', level: 78 },
      { name: 'Firebase Auth', level: 74 },
      { name: 'Firestore Rules', level: 72 },
      { name: 'Deploy Web', level: 82 },
    ],
  },
  {
    title: 'Metodologias',
    description: 'Organização do trabalho, qualidade e colaboração em ciclos curtos.',
    skills: [
      { name: 'Scrum', level: 76 },
      { name: 'Kanban', level: 78 },
      { name: 'Clean Code', level: 80 },
      { name: 'Code Review', level: 72 },
    ],
  },
];

const projects = [
  {
    id: 'lumio',
    title: 'Lumio – Gestão Inteligente de Produtos e Finanças',
    category: 'Mobile / Full Stack',
    role: 'Full Stack Mobile Developer',
    year: '2026',
    status: 'Em evolução',
    tags: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Mobile App'],
    description:
      'App mobile para pequenos empreendedores gerenciarem produtos, estoque e desempenho financeiro com receita, lucro líquido, margem, alertas e simulações de precificação.',
    problem:
      'Pequenos empreendedores precisam controlar estoque, margem e precificação sem depender de planilhas frágeis ou sistemas complexos.',
    solution:
      'Criei um aplicativo mobile com fluxo simples, dados centralizados no Firebase e telas focadas em indicadores que apoiam decisões rápidas do negócio.',
    architecture: [
      'Aplicação Flutter com componentes reutilizáveis e fluxo orientado a telas de gestão.',
      'Firebase e Cloud Firestore para persistência, sincronização e estrutura de dados em tempo real.',
      'Cálculos locais para margem, lucro líquido, estoque crítico e simulações de preço.',
    ],
    challenges: [
      'Modelar dados financeiros de forma clara para usuários não técnicos.',
      'Criar uma interface mobile densa sem sacrificar legibilidade.',
      'Organizar regras de cálculo para manter consistência entre telas.',
    ],
    learnings: [
      'Melhor separação entre interface, regras de negócio e persistência.',
      'Importância de indicadores simples para tomada de decisão.',
      'Uso mais estratégico do Firebase em produtos mobile.',
    ],
    metrics: ['Estoque crítico', 'Margem em tempo real', 'Simulação de precificação'],
    github: 'https://github.com/CarlosMagn0/Gerenciamento',
    demo: null,
    image: 'img/logo-lumio.png',
    gallery: ['img/logo-lumio.png'],
    featured: true,
  },
  {
    id: 'missao-dengue-zero',
    title: 'Missão Dengue Zero – Jogo 3D',
    category: 'Game / Educação',
    role: 'Game Developer',
    year: '2024',
    status: 'Publicado',
    tags: ['Unity', 'C#', 'Android', 'Google Play'],
    description:
      'Jogo 3D desenvolvido em Unity com foco em educação e conscientização sobre a dengue, com exploração, NPCs, missões e interação em ambiente mobile.',
    problem:
      'Campanhas educativas sobre dengue podem ter baixa retenção quando apresentadas apenas em formatos passivos.',
    solution:
      'Transformei o conteúdo de prevenção em uma experiência interativa, usando missões e exploração para reforçar comportamentos importantes.',
    architecture: [
      'Projeto Unity para Android com cenas, missões, colisões e interações com NPCs.',
      'Scripts em C# para controle de objetivos, fluxo de jogador e feedback visual.',
      'Publicação na Google Play com foco em acesso mobile.',
    ],
    challenges: [
      'Equilibrar educação e jogabilidade sem tornar a experiência cansativa.',
      'Organizar interações de NPCs e missões em um fluxo simples.',
      'Ajustar performance para dispositivos Android.',
    ],
    learnings: [
      'Planejamento de mecânicas educativas em jogos 3D.',
      'Otimização e empacotamento para publicação mobile.',
      'Comunicação entre design, código e objetivos pedagógicos.',
    ],
    metrics: ['Publicado na Google Play', 'Experiência 3D', 'Tema de impacto social'],
    github: null,
    demo: 'https://play.google.com/store/apps/details?id=com.MindEleve.MissaoDengueZero',
    demoLabel: 'Google Play',
    image: 'img/missao-dengue-zero.png',
    gallery: ['img/missao-dengue-zero.png'],
  },
  {
    id: 'dengcheck',
    title: 'DengCheck – App de combate à dengue',
    category: 'Mobile / Saúde pública',
    role: 'Mobile Developer (colaboração)',
    year: '2024',
    status: 'Publicado',
    tags: ['Flutter', 'Android', 'iOS', 'Mobile', 'Google Play'],
    description:
      'Aplicativo mobile focado em prevenção e monitoramento de focos de dengue, desenvolvido em equipe como solução de apoio à saúde pública.',
    problem:
      'O combate à dengue depende de identificação, orientação e acompanhamento recorrente de possíveis focos.',
    solution:
      'Participei do desenvolvimento de um app mobile com experiência simples para apoiar ações de prevenção e registro de informações relevantes.',
    architecture: [
      'Aplicação mobile com Flutter e fluxo centrado em ações rápidas.',
      'Estrutura visual pensada para uso direto em campo.',
      'Organização do projeto em equipe com responsabilidades de desenvolvimento mobile.',
    ],
    challenges: [
      'Trabalhar em colaboração mantendo consistência de interface.',
      'Criar uma experiência simples para um problema de utilidade pública.',
      'Ajustar o app para publicação e uso em ambiente mobile.',
    ],
    learnings: [
      'Colaboração em projeto de software com impacto social.',
      'Atenção à usabilidade em apps de serviço público.',
      'Construção de telas e fluxos em Flutter.',
    ],
    metrics: ['App publicado', 'Projeto em equipe', 'Foco em saúde pública'],
    github: null,
    demo: 'https://play.google.com/store/apps/details?id=com.dengue.dengueapp1',
    demoLabel: 'Google Play',
    image: 'img/dengcheck.png',
    gallery: ['img/dengcheck.png'],
  },
  {
    id: 'recomecar',
    title: 'Recomeçar – Plataforma Mobile de Acompanhamento',
    category: 'Mobile / UI',
    role: 'Mobile Developer',
    year: '2024',
    status: 'Publicado',
    tags: ['Flutter', 'Dart', 'Android', 'UI/UX'],
    description:
      'Aplicativo mobile em Flutter com foco em performance, usabilidade e design centrado no usuário para acompanhamento de jornada.',
    problem:
      'Usuários precisam de acompanhamento claro e acessível em uma jornada que exige continuidade e orientação.',
    solution:
      'Desenvolvi telas mobile com organização visual, navegação simples e atenção à experiência em dispositivos Android.',
    architecture: [
      'Interface Flutter com componentes reutilizáveis.',
      'Fluxos mobile pensados para reduzir fricção de navegação.',
      'Camadas de UI organizadas para evolução do app.',
    ],
    challenges: [
      'Manter clareza visual em telas com diferentes densidades de informação.',
      'Garantir responsividade entre tamanhos de dispositivos.',
      'Aprimorar percepção de fluidez no uso mobile.',
    ],
    learnings: [
      'Construção de UI mobile com foco em jornada.',
      'Boas práticas de organização visual no Flutter.',
      'Importância de consistência entre telas.',
    ],
    metrics: ['App publicado', 'UI mobile', 'Experiência centrada no usuário'],
    github: null,
    demo: 'https://play.google.com/store/apps/details?id=com.mindeleve.recomecarapp',
    demoLabel: 'Google Play',
    image: 'img/recomecar.webp',
    gallery: ['img/recomecar.webp'],
  },
  {
    id: 'mstech',
    title: 'MsTech – Site Profissional de Serviços de TI',
    category: 'Web / Institucional',
    role: 'Front-end Developer & UI Designer',
    year: '2025',
    status: 'Online',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Responsivo'],
    description:
      'Site institucional para empresa de TI, com layout moderno, responsividade, seções estratégicas, WhatsApp e foco em conversão de clientes.',
    problem:
      'A empresa precisava comunicar serviços de TI com clareza, credibilidade e canal direto de conversão.',
    solution:
      'Projetei e desenvolvi uma landing page objetiva, responsiva e visualmente alinhada a serviços profissionais de tecnologia.',
    architecture: [
      'HTML semântico com seções orientadas a conversão.',
      'CSS responsivo com hierarquia visual e componentes reutilizáveis.',
      'JavaScript para interações leves e navegação fluida.',
    ],
    challenges: [
      'Equilibrar visual moderno com leitura rápida dos serviços.',
      'Criar responsividade consistente em desktop e mobile.',
      'Direcionar o usuário para contato sem poluir a interface.',
    ],
    learnings: [
      'Estruturação de landing pages para aquisição de clientes.',
      'Atenção a CTA, hierarquia e prova de serviço.',
      'Refinamento de UI para negócios locais.',
    ],
    metrics: ['Site online', 'Contato via WhatsApp', 'Layout responsivo'],
    github: null,
    demo: 'https://ms-tech-ten.vercel.app/',
    demoLabel: 'Demo',
    image: 'img/mstech.jpeg',
    gallery: ['img/mstech.jpeg'],
  },
  {
    id: 'mg-transportes',
    title: 'MG Transportes – Landing Page Institucional',
    category: 'Web / Landing Page',
    role: 'Front-end Developer & UI Designer',
    year: '2025',
    status: 'Online',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Responsivo'],
    description:
      'Landing page institucional com design moderno, navegação intuitiva, layout responsivo e canais de contato para conversão de leads.',
    problem:
      'A marca precisava apresentar serviços de transporte com confiança e facilitar pedidos de orçamento.',
    solution:
      'Criei uma página responsiva com comunicação direta, CTAs visíveis e estrutura adequada para conversão.',
    architecture: [
      'HTML semântico para SEO e leitura clara.',
      'CSS responsivo com foco em navegação mobile.',
      'JavaScript para interações simples e experiência fluida.',
    ],
    challenges: [
      'Transmitir confiança com poucos elementos visuais.',
      'Manter a página leve e rápida.',
      'Organizar informação para usuários que chegam pelo celular.',
    ],
    learnings: [
      'Design de páginas comerciais orientadas a leads.',
      'Importância de contraste, CTA e escaneabilidade.',
      'Refinamento de seções institucionais responsivas.',
    ],
    metrics: ['Landing page online', 'Foco em leads', 'Responsividade completa'],
    github: null,
    demo: 'https://mg-transportes.vercel.app/',
    demoLabel: 'Demo',
    image: 'img/mg-transportes.png',
    gallery: ['img/mg-transportes.png'],
  },
  {
    id: 'taskboard',
    title: 'TaskBoard – Sistema Interativo de Produtividade',
    category: 'Web App / Produtividade',
    role: 'Front-end Developer',
    year: '2025',
    status: 'Online',
    tags: ['JavaScript', 'HTML', 'CSS', 'CRUD', 'LocalStorage'],
    description:
      'Sistema web para gestão de tarefas com CRUD completo, filtros inteligentes, busca em tempo real e persistência via localStorage.',
    problem:
      'Usuários precisam organizar tarefas de forma rápida sem cadastro, banco externo ou interface complexa.',
    solution:
      'Desenvolvi um web app interativo com CRUD, filtros e persistência local, priorizando velocidade e clareza na rotina.',
    architecture: [
      'JavaScript puro para estado, filtros, busca e manipulação do DOM.',
      'LocalStorage para persistência sem backend.',
      'CSS responsivo para uso em desktop e mobile.',
    ],
    challenges: [
      'Controlar estado e filtros mantendo o código simples.',
      'Evitar perda de dados com persistência local.',
      'Criar uma UI útil para uso repetido.',
    ],
    learnings: [
      'Organização de estado em JavaScript sem framework.',
      'Boas práticas de CRUD e persistência no navegador.',
      'Feedback visual para produtividade.',
    ],
    metrics: ['CRUD completo', 'Busca em tempo real', 'Persistência local'],
    github: null,
    demo: 'https://task-board-1bexhbjz3-carlos-magnos-projects-389ad41d.vercel.app/',
    demoLabel: 'Demo',
    image: 'img/taskboard.png',
    gallery: ['img/taskboard.png'],
  },
  {
    id: 'sistema-academico-mysql',
    title: 'Sistema acadêmico com MySQL',
    category: 'Banco de Dados',
    role: 'Database Developer (acadêmico)',
    year: '2024',
    status: 'Código privado',
    tags: ['MySQL', 'Modelagem de dados', 'SQL', 'Relatórios'],
    description:
      'Projeto acadêmico com modelagem de banco relacional, normalização e consultas SQL para relatórios. Código privado por conter dados internos de estudo.',
    problem:
      'O projeto exigia estruturar dados acadêmicos de forma consistente para consultas e relatórios.',
    solution:
      'Modelei o banco relacional, normalizei tabelas e construí consultas SQL para extrair informações úteis.',
    architecture: [
      'Modelo relacional com entidades, relacionamentos e chaves bem definidas.',
      'Normalização para reduzir duplicidade e preservar integridade.',
      'Consultas SQL para relatórios e análise de dados.',
    ],
    challenges: [
      'Definir relacionamentos coerentes entre entidades.',
      'Evitar redundância sem dificultar consultas.',
      'Transformar requisitos acadêmicos em estrutura de banco.',
    ],
    learnings: [
      'Modelagem relacional com foco em integridade.',
      'Consultas SQL mais expressivas para relatórios.',
      'Importância de documentação em projetos de dados.',
    ],
    metrics: ['Modelo relacional', 'Consultas SQL', 'Normalização'],
    github: null,
    demo: null,
    visibility: 'private',
    image: null,
    gallery: [],
  },
];

const stats = [
  { number: '+10', label: 'Projetos e entregas' },
  { number: '+5', label: 'Tecnologias principais' },
  { number: '100%', label: 'Responsivo e acessível' },
  { number: 'GitHub', label: 'Ativo e em evolução' },
];

const timeline = [
  {
    period: '2024',
    title: 'Início em Engenharia de Software',
    description: 'Base em lógica, arquitetura, modelagem, banco de dados e construção de software.',
  },
  {
    period: '2024',
    title: 'Primeiro app Flutter',
    description: 'Criação de interfaces mobile e evolução prática com Dart, Android e publicação.',
  },
  {
    period: '2025',
    title: 'Landing pages e projetos para clientes',
    description: 'Entrega de sites responsivos com foco em conversão, presença digital e contato.',
  },
  {
    period: '2025',
    title: 'Projetos full stack e dados',
    description: 'Integrações com Firebase, modelagem MySQL, CRUDs, dashboards e produtos próprios.',
  },
  {
    period: 'Hoje',
    title: 'Portfólio internacional e evolução contínua',
    description: 'Foco em React, Next.js, Node.js, arquitetura, UX e experiências completas de produto.',
  },
];

const experience = [
  {
    title: 'Desenvolvimento Full Stack Mobile',
    company: 'Projetos próprios',
    period: '2025 – atual',
    description:
      'Criação de apps mobile com Flutter, Firebase e lógica de negócio aplicada, incluindo gestão financeira, estoque, simulações e experiência centrada no usuário.',
    highlights: ['Flutter', 'Firebase', 'Cloud Firestore', 'Arquitetura mobile'],
  },
  {
    title: 'Front-end Developer & UI Designer',
    company: 'Projetos para clientes',
    period: '2024 – atual',
    description:
      'Desenvolvimento de sites institucionais e landing pages responsivas para negócios reais, com foco em clareza, contato via WhatsApp e conversão.',
    highlights: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Vercel'],
  },
  {
    title: 'Game Developer',
    company: 'Projeto educacional publicado',
    period: '2023 – 2024',
    description:
      'Desenvolvimento de jogo 3D em Unity com C#, missões, interação com NPCs e publicação na Google Play para conscientização sobre dengue.',
    highlights: ['Unity', 'C#', 'Android', 'Google Play'],
  },
  {
    title: 'Engenharia de Software',
    company: 'UniEVANGÉLICA',
    period: '2024 – 2027',
    description:
      'Formação com projetos acadêmicos envolvendo desenvolvimento web, mobile, modelagem de dados, banco relacional, metodologias e boas práticas.',
    highlights: ['MySQL', 'Git', 'Scrum', 'Projetos acadêmicos'],
  },
];

const typedRoles = [
  'React • Next.js • TypeScript',
  'Flutter • Firebase • Mobile Apps',
  'Node.js • APIs REST • Dashboards',
  'Git • Arquitetura • Produtos reais',
];

window.portfolioData = {
  contactLinks,
  featuredTech,
  skillCategories,
  projects,
  stats,
  timeline,
  experience,
};

// ========================================================================
// HELPERS
// ========================================================================

function createElement(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text) el.textContent = text;
  return el;
}

function getIconForSkill(name) {
  return techIcons[name] || techIcons[name.replace('Firebase ', '')] || null;
}

function getProjectDetailsUrl(project) {
  return `project.html?id=${encodeURIComponent(project.id)}`;
}

function createTechIcon(name, src) {
  const wrap = createElement('span', 'tech-icon');
  if (src) {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.setAttribute('aria-hidden', 'true');
    img.addEventListener('error', () => {
      img.remove();
      wrap.textContent = name.slice(0, 2).toUpperCase();
      wrap.classList.add('tech-icon-fallback');
    });
    wrap.appendChild(img);
  } else {
    wrap.textContent = name.slice(0, 2).toUpperCase();
    wrap.classList.add('tech-icon-fallback');
  }
  return wrap;
}

function createActionLink({ href, label, className = 'project-action', external = true, disabled = false, ariaLabel }) {
  if (disabled || !href) {
    const span = createElement('span', `${className} disabled`, label);
    span.setAttribute('aria-disabled', 'true');
    return span;
  }

  const link = createElement('a', className, label);
  link.href = href;
  if (external) {
    link.target = '_blank';
    link.rel = 'noopener';
  }
  if (ariaLabel) link.setAttribute('aria-label', ariaLabel);
  return link;
}

// ========================================================================
// RENDERIZAÇÃO
// ========================================================================

function renderTechStack() {
  const grid = document.getElementById('techStackGrid');
  if (!grid) return;

  featuredTech.forEach((tech, index) => {
    const item = createElement('div', 'tech-stack-item glass reveal');
    item.style.setProperty('--delay', `${index * 40}ms`);
    item.appendChild(createTechIcon(tech.name, tech.icon));
    item.appendChild(createElement('span', null, tech.name));
    grid.appendChild(item);
  });
}

function renderSkillCategories() {
  const grid = document.getElementById('skillCategoriesGrid');
  if (!grid) return;

  skillCategories.forEach((category, index) => {
    const card = createElement('article', 'skill-category-card card glass reveal');
    card.style.setProperty('--delay', `${index * 70}ms`);

    const header = createElement('div', 'skill-category-header');
    const titleWrap = createElement('div');
    titleWrap.appendChild(createElement('h3', null, category.title));
    titleWrap.appendChild(createElement('p', null, category.description));
    header.appendChild(titleWrap);
    header.appendChild(createElement('span', 'skill-count', `${category.skills.length} skills`));

    const list = createElement('div', 'skill-token-list');
    category.skills.forEach((skill) => {
      const item = createElement('div', 'skill-token');
      const top = createElement('div', 'skill-token-top');
      const label = createElement('span', 'skill-token-label');
      label.appendChild(createTechIcon(skill.name, skill.icon || getIconForSkill(skill.name)));
      label.appendChild(createElement('span', null, skill.name));

      const level = createElement('span', 'skill-percent', `${skill.level}%`);
      top.appendChild(label);
      top.appendChild(level);

      const track = createElement('div', 'skill-track');
      track.setAttribute('aria-label', `${skill.name}: ${skill.level}%`);
      const fill = createElement('div', 'skill-fill');
      fill.dataset.level = skill.level;
      fill.style.width = '0%';
      track.appendChild(fill);

      item.appendChild(top);
      item.appendChild(track);
      list.appendChild(item);
    });

    card.appendChild(header);
    card.appendChild(list);
    grid.appendChild(card);
  });
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  projects.forEach((project, index) => {
    const card = createElement('article', `card glass project-card reveal${project.featured ? ' featured' : ''}`);
    card.style.setProperty('--delay', `${index * 70}ms`);

    const gradient = createElement('div', 'project-gradient');
    gradient.setAttribute('aria-hidden', 'true');
    card.appendChild(gradient);

    if (project.featured) {
      card.appendChild(createElement('span', 'project-featured-badge', 'Destaque'));
    }

    const imageWrap = createElement('div', 'project-thumb-wrap');
    if (project.image) {
      const image = document.createElement('img');
      image.src = project.image;
      image.alt = `Imagem do projeto ${project.title}`;
      image.className = 'project-thumb';
      image.loading = index < 2 ? 'eager' : 'lazy';
      image.decoding = 'async';
      imageWrap.appendChild(image);
    } else {
      const fallback = createElement('div', 'project-image-fallback');
      fallback.appendChild(createElement('span', null, 'SQL'));
      fallback.appendChild(createElement('small', null, 'Banco de Dados'));
      imageWrap.appendChild(fallback);
    }
    card.appendChild(imageWrap);

    const meta = createElement('div', 'project-meta');
    meta.appendChild(createElement('span', null, project.category));
    meta.appendChild(createElement('span', null, project.status));
    card.appendChild(meta);

    const chipRow = createElement('div', 'project-chip-row');
    project.tags.forEach((tag) => {
      chipRow.appendChild(createElement('span', 'project-chip', tag));
    });
    card.appendChild(chipRow);

    card.appendChild(createElement('h3', null, project.title));
    card.appendChild(createElement('p', null, project.description));

    const role = createElement('div', 'project-role');
    role.appendChild(createElement('span', null, 'Meu papel'));
    role.appendChild(createElement('strong', null, project.role));
    card.appendChild(role);

    const actions = createElement('div', 'project-actions');
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
    actions.appendChild(createActionLink({
      href: getProjectDetailsUrl(project),
      label: 'Ver detalhes',
      className: 'project-action primary-link',
      external: false,
      ariaLabel: `Ver detalhes do projeto ${project.title}`,
    }));
    card.appendChild(actions);

    grid.appendChild(card);
  });

  setupTiltEffect();
}

function renderStats() {
  const grid = document.getElementById('statsGrid');
  if (!grid) return;

  stats.forEach((stat, index) => {
    const card = createElement('div', 'stat-card glass reveal');
    card.style.setProperty('--delay', `${index * 80}ms`);

    const number = createElement('span', 'stat-number', '0');
    number.dataset.target = stat.number;

    const label = createElement('span', 'stat-label', stat.label);
    card.appendChild(number);
    card.appendChild(label);
    grid.appendChild(card);
  });
}

function renderTimeline() {
  const list = document.getElementById('timelineList');
  if (!list) return;

  timeline.forEach((item, index) => {
    const entry = createElement('div', 'timeline-item reveal');
    entry.style.setProperty('--delay', `${index * 90}ms`);

    entry.appendChild(createElement('div', 'timeline-dot'));

    const content = createElement('div', 'timeline-content glass');
    content.appendChild(createElement('span', 'timeline-period', item.period));
    content.appendChild(createElement('h3', null, item.title));
    content.appendChild(createElement('p', null, item.description));

    entry.appendChild(content);
    list.appendChild(entry);
  });
}

function renderExperience() {
  const grid = document.getElementById('experienceGrid');
  if (!grid) return;

  experience.forEach((item, index) => {
    const card = createElement('article', 'experience-card card glass reveal');
    card.style.setProperty('--delay', `${index * 80}ms`);

    const meta = createElement('div', 'experience-meta');
    meta.appendChild(createElement('span', null, item.period));
    meta.appendChild(createElement('span', null, item.company));

    card.appendChild(meta);
    card.appendChild(createElement('h3', null, item.title));
    card.appendChild(createElement('p', null, item.description));

    const tags = createElement('div', 'experience-tags');
    item.highlights.forEach((tag) => tags.appendChild(createElement('span', null, tag)));
    card.appendChild(tags);

    grid.appendChild(card);
  });
}

// ========================================================================
// EFEITOS E INTERAÇÕES
// ========================================================================

function setupTypedEffect() {
  const el = document.getElementById('typed');
  if (!el) return;

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = typedRoles[roleIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex += 1;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1500);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex -= 1;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % typedRoles.length;
      }
    }

    setTimeout(tick, deleting ? 34 : 58);
  }

  tick();
}

function animateCounter(el) {
  const raw = el.dataset.target;
  const match = raw.match(/(\d+)/);

  if (!match) {
    el.textContent = raw;
    return;
  }

  const targetNum = parseInt(match[1], 10);
  const prefix = raw.slice(0, match.index);
  const suffix = raw.slice(match.index + match[1].length);
  const duration = 1000;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * targetNum);
    el.textContent = `${prefix}${current}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = raw;
  }

  requestAnimationFrame(step);
}

function setupStatsObserver() {
  const statNumbers = document.querySelectorAll('.stat-number');
  if (!statNumbers.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.45 }
  );

  statNumbers.forEach((el) => observer.observe(el));
}

function setupSkillBarsObserver() {
  const fills = document.querySelectorAll('.skill-fill');
  if (!fills.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.style.width = `${el.dataset.level}%`;
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.25 }
  );

  fills.forEach((el) => observer.observe(el));
}

function setupScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  elements.forEach((el) => observer.observe(el));
}

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const href = link.getAttribute('href');
      const target = href ? document.querySelector(href) : null;
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function setupScrollProgress() {
  const bar = document.getElementById('scrollBar');
  if (!bar) return;

  let ticking = false;

  function update() {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
    bar.style.width = `${scrolled}%`;
    ticking = false;
  }

  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    },
    { passive: true }
  );

  update();
}

function setupMagneticButtons() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll('.magnetic').forEach((btn) => {
    if (btn.dataset.magneticBound === 'true') return;
    btn.dataset.magneticBound = 'true';

    btn.addEventListener('mousemove', (event) => {
      const rect = btn.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.16}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

function setupTiltEffect() {
  if (!window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -7}deg) rotateY(${x * 7}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

function setupParticles() {
  const canvas = document.getElementById('particles');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!canvas || reducedMotion) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let width = 0;
  let height = 0;
  let animationFrame;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = Math.min(70, Math.floor((width * height) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.5 + 0.5,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(139, 92, 246, 0.48)';
    ctx.strokeStyle = 'rgba(6, 182, 212, 0.11)';

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      if (particle.x < 0 || particle.x > width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > height) particle.vy *= -1;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 118) {
          ctx.globalAlpha = 1 - dist / 118;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
    animationFrame = requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener(
    'resize',
    () => {
      cancelAnimationFrame(animationFrame);
      resize();
      createParticles();
      draw();
    },
    { passive: true }
  );
}

// ========================================================================
// INICIALIZAÇÃO
// ========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderStats();
  renderTechStack();
  renderSkillCategories();
  renderProjects();
  renderTimeline();
  renderExperience();

  setupTypedEffect();
  setupStatsObserver();
  setupSkillBarsObserver();
  setupScrollReveal();
  setupSmoothScroll();
  setupScrollProgress();
  setupMagneticButtons();
  setupParticles();
});
