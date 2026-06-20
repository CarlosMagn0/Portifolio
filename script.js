// ========================================================================
// DADOS DO PORTFÓLIO
// ========================================================================

const softSkills = [
  'Trabalho em equipe',
  'Liderança',
  'Pensamento criativo',
  'Resolução de problemas',
  'Comunicação',
  'Proatividade',
];

// Tecnologias com nível de domínio (0-100) — ajuste como preferir
const techSkills = [
  { name: 'JavaScript', level: 85 },
  { name: 'Flutter & Dart', level: 88 },
  { name: 'HTML & CSS', level: 90 },
  { name: 'Firebase & Firestore', level: 80 },
  { name: 'Unity & C#', level: 70 },
  { name: 'MySQL', level: 75 },
  { name: 'Hive (banco local)', level: 78 },
  { name: 'Git & GitHub', level: 82 },
  { name: 'Node.js', level: 60 },
];

const projects = [
   {
    title: 'Lumio – Gestão Inteligente de Produtos e Finanças',
    tags: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Mobile App'],
    description:
      'App mobile para pequenos empreendedores gerenciarem produtos, estoque e desempenho financeiro: receita, lucro líquido, margem em tempo real, alertas de estoque crítico e simulações de precificação.',
    role: 'Full Stack Mobile Developer',
    link: 'https://github.com/CarlosMagn0/Gerenciamento',
    image: 'img/logo-lumio.png',
    featured: true,
  },

  {
    title: 'Missão Dengue Zero – Jogo 3D',
    tags: ['Unity', 'C#', 'Android', 'Google Play'],
    description:
      'Jogo 3D desenvolvido em Unity com foco em educação e conscientização sobre a Dengue. Inclui mecânicas de exploração, interação com NPCs e sistema de missões.',
    role: 'Game Developer',
    link: 'https://play.google.com/store/apps/details?id=com.MindEleve.MissaoDengueZero',
    image: 'img/missao-dengue-zero.png',
  },
  {
    title: 'DengCheck – App de combate à dengue',
    tags: ['Android', 'iOS', 'Mobile', 'Flutter', 'Google Play'],
    description:
      'Aplicativo mobile focado em prevenção e monitoramento de focos de dengue, desenvolvido em equipe como solução de apoio à saúde pública.',
    role: 'Mobile Developer (colaboração)',
    link: 'https://play.google.com/store/apps/details?id=com.dengue.dengueapp1',
    image: 'img/dengcheck.png',
  },
  {
    title: 'Recomeçar – Plataforma Mobile de Acompanhamento',
    tags: ['Flutter', 'Dart', 'Android', 'UI/UX'],
    description:
      'Aplicativo mobile desenvolvido em Flutter com foco em performance, usabilidade e design centrado no usuário, oferecendo uma experiência eficiente para acompanhamento ao longo da jornada do usuário.',
    role: 'Mobile Developer',
    link: 'https://play.google.com/store/apps/details?id=com.mindeleve.recomecarapp',
    image: 'img/recomecar.webp',
  },
 
  {
    title: 'MsTech – Site Profissional de Serviços de TI',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Responsivo'],
    description:
      'Site institucional para a MsTech, com layout moderno, responsividade completa, seções estratégicas de serviços, contato via WhatsApp e foco em conversão de clientes.',
    role: 'Front-end Developer & UI Designer',
    link: 'https://ms-tech-ten.vercel.app/',
    image: 'img/mstech.jpeg',
  },
  {
    title: 'MG Transportes – Landing Page Institucional',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX', 'Responsivo'],
    description:
      'Landing page institucional com design moderno, navegação intuitiva, layout totalmente responsivo e canais de contato para conversão de leads.',
    role: 'Front-end Developer & UI Designer',
    link: 'https://mg-transportes.vercel.app/',
    image: 'img/mg-transportes.png',
  },
 
   {
    title: 'TaskBoard – Sistema Interativo de Produtividade',
    tags: ['JavaScript', 'HTML', 'CSS', 'UX/UI'],
    description:
      'Sistema web interativo para gestão de tarefas com CRUD completo, filtros inteligentes, busca em tempo real e persistência de dados via localStorage.',
    role: 'Front-end Developer',
    link: 'https://task-board-1bexhbjz3-carlos-magnos-projects-389ad41d.vercel.app/',
    image: 'img/taskboard.png',
  },
  
  {
    title: 'Sistema acadêmico com MySQL',
    tags: ['MySQL', 'Modelagem de dados'],
    description:
      'Projeto acadêmico com modelagem de banco relacional, normalização e construção de consultas SQL para relatórios. Código privado por conter dados internos de estudo.',
    role: 'Database Developer (acadêmico)',
    link: null,
    visibility: 'private',
  },
];

const stats = [
  { number: '8+', label: 'Projetos desenvolvidos' },
  { number: '5º', label: 'Período em andamento' },
  { number: '10+', label: 'Tecnologias dominadas' },
  { number: '100%', label: 'Dedicação e aprendizado' },
];

const experience = [
  {
    period: '2024 – atual',
    title: 'Desenvolvedor Freelance',
    description:
      'Desenvolvimento de landing pages, sites institucionais e apps mobile para clientes reais (MG Transportes, MsTech) e projetos próprios (Lumio, DengCheck). Atuação completa: UI, front-end, back-end e integração com bancos de dados.',
  },
  {
    period: '2024 – atual',
    title: 'Estudante de Engenharia de Software',
    description:
      'Cursando o 5º período na UniEVANGÉLICA, com participação em projetos acadêmicos de desenvolvimento web, mobile, modelagem de banco de dados e jogos digitais.',
  },
  {
    period: '2023 – 2024',
    title: 'Desenvolvimento de Jogos Educativos',
    description:
      'Game Developer no projeto "Missão Dengue Zero", jogo 3D em Unity publicado na Google Play com foco em conscientização sobre saúde pública.',
  },
];

const typedRoles = [
  'Desenvolvedor Full Stack',
  'Mobile Developer (Flutter)',
  'Game Developer (Unity)',
  'Apaixonado por resolver problemas',
];

// ========================================================================
// RENDER
// ========================================================================

function renderList(list, elementId) {
  const ul = document.getElementById(elementId);
  if (!ul) return;
  list.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
}

function renderSkillBars() {
  const wrap = document.getElementById('techSkillsList');
  if (!wrap) return;

  techSkills.forEach((skill, index) => {
    const row = document.createElement('div');
    row.className = 'skill-row reveal';
    row.style.setProperty('--delay', `${index * 60}ms`);

    const top = document.createElement('div');
    top.className = 'skill-row-top';
    top.innerHTML = `<span>${skill.name}</span><span class="skill-percent">${skill.level}%</span>`;

    const track = document.createElement('div');
    track.className = 'skill-track';

    const fill = document.createElement('div');
    fill.className = 'skill-fill';
    fill.dataset.level = skill.level;
    fill.style.width = '0%';

    track.appendChild(fill);
    row.appendChild(top);
    row.appendChild(track);
    wrap.appendChild(row);
  });
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  projects.forEach((project, index) => {
    const card = document.createElement('article');
    card.className = `card glass project-card reveal${project.featured ? ' featured' : ''}`;
    card.style.setProperty('--delay', `${index * 80}ms`);

    const gradient = document.createElement('div');
    gradient.className = 'project-gradient';
    card.appendChild(gradient);

    if (project.featured) {
      const badge = document.createElement('span');
      badge.className = 'project-featured-badge';
      badge.textContent = '★ Destaque';
      card.appendChild(badge);
    }

    if (project.image) {
      const thumbWrap = document.createElement('div');
      thumbWrap.className = 'project-thumb-wrap';
      const thumb = document.createElement('img');
      thumb.src = project.image;
      thumb.alt = project.title;
      thumb.className = 'project-thumb';
      thumbWrap.appendChild(thumb);
      card.appendChild(thumbWrap);
    }

    const chipRow = document.createElement('div');
    chipRow.className = 'project-chip-row';
    project.tags.forEach((tag) => {
      const chip = document.createElement('span');
      chip.className = 'project-chip';
      chip.textContent = tag;
      chipRow.appendChild(chip);
    });

    const title = document.createElement('h3');
    title.textContent = project.title;

    const desc = document.createElement('p');
    desc.textContent = project.description;

    const footer = document.createElement('div');
    footer.className = 'project-footer';

    const role = document.createElement('span');
    role.textContent = project.role;
    footer.appendChild(role);

    if (project.link && project.link !== '#') {
      const link = document.createElement('a');
      link.href = project.link;
      link.target = '_blank';
      link.rel = 'noopener';
      link.textContent = 'Ver Projeto ↗';
      footer.appendChild(link);
    } else if (project.visibility === 'private') {
      const privateLabel = document.createElement('span');
      privateLabel.className = 'project-private';
      privateLabel.textContent = 'Código privado';
      footer.appendChild(privateLabel);
    }

    card.appendChild(chipRow);
    card.appendChild(title);
    card.appendChild(desc);
    card.appendChild(footer);

    grid.appendChild(card);
  });

  setupTiltEffect();
}

function renderStats() {
  const grid = document.getElementById('statsGrid');
  if (!grid) return;

  stats.forEach((stat, index) => {
    const card = document.createElement('div');
    card.className = 'stat-card glass reveal';
    card.style.setProperty('--delay', `${index * 100}ms`);

    const number = document.createElement('span');
    number.className = 'stat-number';
    number.dataset.target = stat.number;
    number.textContent = '0';

    const label = document.createElement('span');
    label.className = 'stat-label';
    label.textContent = stat.label;

    card.appendChild(number);
    card.appendChild(label);
    grid.appendChild(card);
  });
}

function renderExperience() {
  const list = document.getElementById('experienceList');
  if (!list) return;

  experience.forEach((item, index) => {
    const entry = document.createElement('div');
    entry.className = 'timeline-item reveal';
    entry.style.setProperty('--delay', `${index * 120}ms`);

    const dot = document.createElement('div');
    dot.className = 'timeline-dot';

    const content = document.createElement('div');
    content.className = 'timeline-content glass';

    const period = document.createElement('span');
    period.className = 'timeline-period';
    period.textContent = item.period;

    const title = document.createElement('h3');
    title.textContent = item.title;

    const desc = document.createElement('p');
    desc.textContent = item.description;

    content.appendChild(period);
    content.appendChild(title);
    content.appendChild(desc);

    entry.appendChild(dot);
    entry.appendChild(content);
    list.appendChild(entry);
  });
}

// ========================================================================
// EFEITO DE DIGITAÇÃO (HERO)
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
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 1600);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % typedRoles.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 65);
  }
  tick();
}

// ========================================================================
// CONTADOR ANIMADO (STATS)
// ========================================================================

function animateCounter(el) {
  const raw = el.dataset.target;
  const match = raw.match(/(\d+)/);
  if (!match) {
    el.textContent = raw;
    return;
  }
  const targetNum = parseInt(match[1], 10);
  const suffix = raw.replace(match[1], '');
  const duration = 1000;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const current = Math.floor(progress * targetNum);
    el.textContent = `${current}${suffix}`;
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
    { threshold: 0.4 }
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
    { threshold: 0.3 }
  );
  fills.forEach((el) => observer.observe(el));
}

// ========================================================================
// REVEAL ON SCROLL
// ========================================================================

function handleScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  const triggerBottom = window.innerHeight * 0.9;

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) el.classList.add('visible');
  });
}

// ========================================================================
// SCROLL SUAVE + BARRA DE PROGRESSO
// ========================================================================

function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function setupScrollProgress() {
  const bar = document.getElementById('scrollBar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = `${scrolled}%`;
  });
}

// ========================================================================
// CURSOR CUSTOMIZADO
// ========================================================================

function setupCustomCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring || window.matchMedia('(pointer: coarse)').matches) {
    if (dot) dot.style.display = 'none';
    if (ring) ring.style.display = 'none';
    return;
  }

  let ringX = 0, ringY = 0, mouseX = 0, mouseY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .project-card, .magnetic').forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('cursor-hover'));
  });
}

// ========================================================================
// BOTÕES MAGNÉTICOS
// ========================================================================

function setupMagneticButtons() {
  document.querySelectorAll('.magnetic').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'translate(0, 0)';
    });
  });
}

// ========================================================================
// TILT 3D NOS CARDS DE PROJETO
// ========================================================================

function setupTiltEffect() {
  document.querySelectorAll('.project-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// ========================================================================
// PARTÍCULAS EM CANVAS (rede leve)
// ========================================================================

function setupParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let width, height;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  function createParticles() {
    const count = Math.floor((width * height) / 18000);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.6 + 0.6,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(139, 92, 246, 0.5)';
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.12)';

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  });
}

// ========================================================================
// INICIALIZAÇÃO
// ========================================================================

document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  renderList(softSkills, 'softSkillsList');
  renderSkillBars();
  renderStats();
  renderProjects();
  renderExperience();

  document
    .querySelectorAll('.section-header, .stat-card')
    .forEach((el) => el.classList.add('reveal'));

  handleScrollReveal();
  window.addEventListener('scroll', handleScrollReveal);

  setupTypedEffect();
  setupStatsObserver();
  setupSkillBarsObserver();
  setupSmoothScroll();
  setupScrollProgress();
  setupCustomCursor();
  setupMagneticButtons();
  setupParticles();
});