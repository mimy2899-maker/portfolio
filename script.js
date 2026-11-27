/**
 * YASMIM SOARES — PORTFÓLIO & CURRÍCULO DIGITAL
 * Motor de Movimentos, Física 3D e Animações Estilo Lando Norris (landonorris.com)
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. SELETORES GERAIS ---
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const sections = document.querySelectorAll('section[id]');
  const btnCopyEmail = document.getElementById('btnCopyEmail');
  const emailAddress = document.getElementById('emailAddress');
  const contactForm = document.getElementById('contactForm');
  const formFeedback = document.getElementById('formFeedback');

  // Filtros & Cards do Hall da Fama
  const filterButtons = document.querySelectorAll('.filter-tab-btn');
  const hallFameCards = document.querySelectorAll('.hall-fame-card');
  const inspectButtons = document.querySelectorAll('.btn-inspect-process');

  // Modal Hall da Fama
  const craftModal = document.getElementById('craftModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDynamicContent = document.getElementById('modalDynamicContent');

  // Dados detalhados das Jaquetas no Hall da Fama
  const jacketsData = {
    '1': {
      tag: 'HALL OF FAME // DENIM CUSTOM 01',
      title: 'Cyber Denim Jacket',
      imageJpg: 'assets/jaquetas/jaqueta-01.jpg',
      imageSvg: 'assets/jaquetas/jaqueta-01.svg',
      desc: 'Peça desenvolvida com pintura acrílica especializada para tecido, mesclando traçados geométricos, tipografia industrial e camadas sobrepostas. O projeto explora a desconstrução do jeans tradicional aplicando contraste direto em azul elétrico e preto fosco.',
      steps: [
        { num: 'ETAPA 01', title: 'Ideação & Croqui', detail: 'Definição da geometria, paleta de cores e estudo de contraste em azul elétrico.' },
        { num: 'ETAPA 02', title: 'Preparação do Tecido', detail: 'Higienização e aplicação de base seladora para garantir flexibilidade e fixação.' },
        { num: 'ETAPA 03', title: 'Pintura & Estêncil', detail: 'Aplicação manual em 3 camadas finas para evitar craquelamento do pigmento.' },
        { num: 'ETAPA 04', title: 'Termofixação', detail: 'Cura térmica que torna a peça resistente a lavagens e uso contínuo.' }
      ],
      specs: [
        { label: 'Técnica', value: 'Pintura manual com pincel e estêncil em relevo' },
        { label: 'Base Têxtil', value: 'Denim 100% algodão pesado (14oz)' },
        { label: 'Conceito', value: 'Cyberpunk industrial & estética esportiva' },
        { label: 'Conexão Dev', value: 'Planejamento de camadas e consistência de entrega sem tolerância a erros' }
      ]
    },
    '2': {
      tag: 'HALL OF FAME // TECHWEAR & UPCYCLE 02',
      title: 'Cobalt Structural Vest',
      imageJpg: 'assets/jaquetas/jaqueta-02.jpg',
      imageSvg: 'assets/jaquetas/jaqueta-02.svg',
      desc: 'Exploração de sustentabilidade têxtil (upcycling) com corte de precisão e costura manual estruturada. Criação de bolsos modulares, aplicação de zíperes utilitários e acabamento reforçado nas costuras de carga.',
      steps: [
        { num: 'ETAPA 01', title: 'Desconstrução', detail: 'Seleção e desmontagem de sobras de sarja e jeans reaproveitados.' },
        { num: 'ETAPA 02', title: 'Modelagem Modular', detail: 'Corte ergonômico de painéis e bolsos com foco em usabilidade.' },
        { num: 'ETAPA 03', title: 'Costura de Reforço', detail: 'União manual com pesponto duplo e zíperes industriais reforçados.' },
        { num: 'ETAPA 04', title: 'Acabamento & Teste', detail: 'Verificação de resistência mecânica e teste ergonômico da peça.' }
      ],
      specs: [
        { label: 'Técnica', value: 'Desconstrução têxtil, upcycling e costura de reforço' },
        { label: 'Base Têxtil', value: 'Sobra de tecidos sarja e denim reaproveitados' },
        { label: 'Conceito', value: 'Techwear modular e ergonomia utilitária' },
        { label: 'Conexão Dev', value: 'Modularidade de componentes e reaproveitamento de código/recursos' }
      ]
    },
    '3': {
      tag: 'HALL OF FAME // SPECIAL EDITION 03',
      title: 'Electric Pulse Jacket',
      imageJpg: 'assets/jaquetas/jaqueta-03.jpg',
      imageSvg: 'assets/jaquetas/jaqueta-03.svg',
      desc: 'Painel prático de experimentação cromática sobre superfícies escuras. O teste investigou a aderência de pigmentos vibrantes (#398DFF) e técnicas de fixação que mantêm o toque flexível da peça com brilho de corrida.',
      steps: [
        { num: 'ETAPA 01', title: 'Estudo Cromático', detail: 'Teste de luminosidade e aderência da tinta acrílica neon em tecido escuro.' },
        { num: 'ETAPA 02', title: 'Máscaras de Precisão', detail: 'Isolamento de trilhas e linhas dinâmicas inspiradas em circuitos.' },
        { num: 'ETAPA 03', title: 'Gradiente Manual', detail: 'Transição suave entre azul elétrico e cyan com aerógrafo/pincel.' },
        { num: 'ETAPA 04', title: 'Selagem Térmica', detail: 'Blindagem final com verniz fosco flexível para proteção de cor.' }
      ],
      specs: [
        { label: 'Técnica', value: 'Gradientes manuais, máscaras de pintura e selagem térmica' },
        { label: 'Base Têxtil', value: 'Tecido canvas e sarja com acabamento acetinado' },
        { label: 'Conceito', value: 'Circuitos elétricos e traçados dinâmicos de corrida' },
        { label: 'Conexão Dev', value: 'Design System, contraste de acessibilidade e tolerância a falhas' }
      ]
    },
    '4': {
      tag: 'HALL OF FAME // MONOCHROME 04',
      title: 'Monochrome Flow Jacket',
      imageJpg: 'assets/jaquetas/jaqueta-04.jpg',
      imageSvg: 'assets/jaquetas/jaqueta-04.svg',
      desc: 'Estudo minimalista que equilibra blocos de cor em branco puro, listras de corrida e tipografia técnica. Desenvolvida para demonstrar como o alto contraste pode transformar uma silhueta clássica em uma peça editorial moderna.',
      steps: [
        { num: 'ETAPA 01', title: 'Composição Livery', detail: 'Diagramação de proporções e blocos visuais inspirados em uniformes de corrida.' },
        { num: 'ETAPA 02', title: 'Corte de Painéis', detail: 'Recorte de faixas brancas em tecido estruturado de alta densidade.' },
        { num: 'ETAPA 03', title: 'Aplicação Térmica', detail: 'Termocolagem com prensa térmica de precisão e costura perimetral.' },
        { num: 'ETAPA 04', title: 'Tipografia Manual', detail: 'Aplicação de detalhes tipográficos com caneta têxtil permanente.' }
      ],
      specs: [
        { label: 'Técnica', value: 'Composição de blocos, termocolagem e costura perimetral' },
        { label: 'Base Têxtil', value: 'Denim escuro e lona de algodão puro branco' },
        { label: 'Conceito', value: 'Minimalismo editorial e identidade esportiva' },
        { label: 'Conexão Dev', value: 'Hierarquia visual clara, tipografia sólida e limpeza de interface' }
      ]
    }
  };

  // --- 2. HEADER SCROLL & BLUR ---
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- 3. MENU MOBILE DRAWER ---
  const toggleMobileMenu = () => {
    const isOpen = menuToggle.classList.toggle('open');
    mobileDrawer.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    menuToggle.classList.remove('open');
    mobileDrawer.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  menuToggle.addEventListener('click', toggleMobileMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- 4. SCROLL REVEAL SUAVE (ANIMAÇÃO AO ROLAR ESTILO LANDO NORRIS) ---
  const revealElements = document.querySelectorAll(
    '.hero-main-content, .hero-footer-specs, .about-visual-card, .about-narrative-content, .career-card, .project-card, .hall-fame-card, .craft-philosophy-box, .contact-editorial-layout'
  );

  revealElements.forEach(el => el.classList.add('reveal-item'));

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null,
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // --- 5. EFEITO DE INCLINAÇÃO 3D INTERATIVO (3D TILT COM O MOUSE) ---
  // Inspirado no site de Lando Norris onde os cards e itens reagem ao movimento do cursor
  const tiltCards = document.querySelectorAll('.hall-fame-card, .project-card, .about-visual-card');

  tiltCards.forEach(card => {
    const photo = card.querySelector('.jacket-photo-img, .project-card-header');
    const spotlight = card.querySelector('.podium-spotlight');

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -9; // Rotação no eixo X
      const rotateY = ((x - centerX) / centerX) * 9;  // Rotação no eixo Y

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

      // Parallax mais profundo na jaqueta (faz a jaqueta saltar para frente)
      if (photo) {
        const moveX = ((x - centerX) / centerX) * 16;
        const moveY = ((y - centerY) / centerY) * 16;
        photo.style.transform = `translate3d(${moveX}px, ${moveY - 10}px, 40px) scale(1.06)`;
      }

      // Deslocamento do holofote de luz acompanhando o cursor
      if (spotlight) {
        spotlight.style.transform = `translate(${((x - centerX) / centerX) * 40}px, ${((y - centerY) / centerY) * 40}px) scale(1.2)`;
        spotlight.style.opacity = '0.65';
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      if (photo) photo.style.transform = '';
      if (spotlight) {
        spotlight.style.transform = '';
        spotlight.style.opacity = '';
      }
    });
  });

  // --- 6. PARALLAX SUAVE NO HERO TITLE (MOUSE INTERACTION) ---
  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle && window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
      const mouseX = (e.clientX / window.innerWidth) - 0.5;
      const mouseY = (e.clientY / window.innerHeight) - 0.5;
      
      heroTitle.style.transform = `translate3d(${mouseX * 14}px, ${mouseY * 10}px, 0)`;
    });
  }

  // --- 7. BOTÕES MAGNÉTICOS SUTIS ---
  const magneticButtons = document.querySelectorAll('.btn-primary-action, .btn-white-action, .btn-pill-white');
  magneticButtons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });

  // --- 8. ACTIVE SECTION OBSERVER ---
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });

        mobileLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-30% 0px -50% 0px',
    threshold: 0
  });

  sections.forEach(section => sectionObserver.observe(section));

  // --- 9. FILTROS DO HALL DA FAMA ---
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      hallFameCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeInCard 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- 10. MODAL EXPANDIDO: DETALHES DO PROCESSO DA JAQUETA ---
  const openModal = (pieceId) => {
    const data = jacketsData[pieceId];
    if (!data) return;

    let stepsHtml = data.steps.map(s => `
      <div class="step-card">
        <div class="step-number">${s.num}</div>
        <div class="step-name">${s.title}</div>
        <div class="step-detail">${s.detail}</div>
      </div>
    `).join('');

    let specsHtml = data.specs.map(s => `
      <div class="spec-row">
        <span>${s.label}:</span>
        <span>${s.value}</span>
      </div>
    `).join('');

    modalDynamicContent.innerHTML = `
      <div class="modal-header-block">
        <span class="modal-piece-tag">${data.tag}</span>
        <h3 class="modal-piece-title">${data.title}</h3>
      </div>

      <div class="modal-photo-preview">
        <img 
          src="${data.imageJpg}" 
          onerror="this.onerror=null; this.src='${data.imageSvg}';" 
          alt="${data.title}" 
          class="modal-photo-img"
        >
      </div>

      <p class="modal-piece-desc">${data.desc}</p>

      <div class="modal-steps-container">
        <h4 class="modal-steps-title">Etapas do Processo de Customização:</h4>
        <div class="process-steps-list">
          ${stepsHtml}
        </div>
      </div>

      <div class="modal-tech-specs">
        ${specsHtml}
      </div>
    `;

    craftModal.classList.add('open');
    craftModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    craftModal.classList.remove('open');
    craftModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  inspectButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const pieceId = btn.getAttribute('data-piece-id');
      openModal(pieceId);
    });
  });

  hallFameCards.forEach(card => {
    card.addEventListener('click', () => {
      const pieceId = card.getAttribute('data-piece-id');
      openModal(pieceId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && craftModal.classList.contains('open')) {
      closeModal();
    }
  });

  // --- 11. COPIAR E-MAIL COM FEEDBACK VISUAL ---
  if (btnCopyEmail && emailAddress) {
    btnCopyEmail.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = emailAddress.textContent.trim();

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btnCopyEmail.querySelector('.copy-text').textContent;
        btnCopyEmail.querySelector('.copy-text').textContent = 'Copiado!';
        btnCopyEmail.style.background = 'var(--electric-blue)';
        btnCopyEmail.style.color = '#07090e';

        setTimeout(() => {
          btnCopyEmail.querySelector('.copy-text').textContent = originalText;
          btnCopyEmail.style.background = '';
          btnCopyEmail.style.color = '';
        }, 2200);
      } catch (err) {
        prompt('Copie o endereço de e-mail abaixo:', textToCopy);
      }
    });
  }

  // --- 12. FORMULÁRIO DE CONTATO (SIMULAÇÃO) ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitBtn.innerHTML;

      submitBtn.innerHTML = `
        <span>Processando...</span>
      `;
      submitBtn.disabled = true;

      setTimeout(() => {
        formFeedback.className = 'form-feedback-message success';
        formFeedback.textContent = 'Mensagem enviada com sucesso! Yasmim entrará em contato em breve.';
        
        contactForm.reset();
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;

        setTimeout(() => {
          formFeedback.className = 'form-feedback-message';
          formFeedback.textContent = '';
        }, 5000);
      }, 700);
    });
  }
});
