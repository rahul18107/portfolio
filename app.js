/**
 * RAHUL S — PORTFOLIO CONTROLLER
 * Inspired by bermawy.com
 * Handles Typewriter, Retro GameBoy deck controller, Category Tabs, and Project Modals
 */

document.addEventListener('DOMContentLoaded', () => {

  // =========================================================================
  // 1. DATA: Rahul's Projects from GitHub (@rahul18107)
  // =========================================================================
  const projects = [
    {
      id: 'virality-project',
      name: 'Virality Predictor',
      repoName: 'virality-project',
      category: 'ai',
      categoryLabel: 'AI & PERSONAS',
      status: 'LIVE DEMO DEPLOYED',
      homepage: 'https://goviral-indol.vercel.app',
      repoUrl: 'https://github.com/rahul18107/virality-project',
      summary: 'Simulates content diffusion across an autonomous network of AI personas and computes algorithmic virality scores.',
      description: 'Virality Predictor is an end-to-end simulation environment. Users input multi-modal content (text, prompts, media), and an AI persona graph simulates viewing behavior, engagement probability, and network cascade spread. It visualizes reach graphs in real time and predicts performance prior to live publishing.',
      features: [
        'Multi-modal content intake & semantic parsing',
        'AI persona simulation network with distinct behavioral priors',
        'Virality velocity scoring & engagement forecasting',
        'Interactive diffusion network graph visualization',
        'Persona detail panel for deep demographic inspection'
      ],
      stack: ['Python', 'FastAPI', 'React', 'JavaScript', 'Diffusion Modeling']
    },
    {
      id: 'RAG-project',
      name: 'StudyComp (RAG)',
      repoName: 'RAG-project',
      category: 'ai',
      categoryLabel: 'LLM & RAG',
      status: 'OPEN SOURCE',
      homepage: null,
      repoUrl: 'https://github.com/rahul18107/RAG-project',
      summary: 'Retrieval-Augmented Generation companion turning lecture PDFs and notes into interactive context-aware learning agents.',
      description: 'StudyComp is an AI-powered learning companion. It ingests complex educational materials, indexes them into a vector space, and offers source-grounded interactive chat. Students can ask nuanced questions and automatically generate high-retention flashcards grounded purely in their uploaded curriculum.',
      features: [
        'High-speed PDF and document parsing pipeline',
        'RAG architecture with semantic chunking and vector embeddings',
        'Context-aware chat assistant with source attribution',
        'Automated AI flashcard generation with spaced-repetition logic',
        'Persistent document library and multi-session chat history'
      ],
      stack: ['Flutter', 'Dart', 'Python', 'Vector DB', 'Semantic Search', 'RAG']
    },
    {
      id: 'DailyCollege',
      name: 'DailyCollege',
      repoName: 'DailyCollege',
      category: 'fullstack',
      categoryLabel: 'MOBILE & SUPABASE',
      status: 'ACTIVE BUILD',
      homepage: null,
      repoUrl: 'https://github.com/rahul18107/DailyCollege',
      summary: 'Automated campus intelligence converting high-velocity WhatsApp chatter into clean daily event cards.',
      description: 'DailyCollege tackles university communication chaos. It parses messy, high-volume WhatsApp group announcements, extracts dates, venues, deadlines, and event metadata, and delivers structured daily cards with phone-based authentication.',
      features: [
        'WhatsApp unstructured message parsing engine',
        'AI event categorization & urgency filtering',
        'Clean typed card presentation with event actions',
        'Secure phone-based OTP authentication',
        'Multi-account synchronization via Supabase backend'
      ],
      stack: ['Flutter', 'Dart', 'Node.js', 'Supabase', 'PostgreSQL']
    },
    {
      id: 'campuscravings',
      name: 'CampusCravings',
      repoName: 'campuscravings',
      category: 'fullstack',
      categoryLabel: 'FULL-STACK WEB',
      status: 'STABLE',
      homepage: null,
      repoUrl: 'https://github.com/rahul18107/campuscravings',
      summary: 'College canteen ordering platform featuring campus email domain restrictions, smart carts, and order dispatch.',
      description: 'A focused food ordering application specifically tailored for university canteens. Solves long lunch queues by providing pre-ordering with real-time status updates and restricts registration strictly to valid campus email domains.',
      features: [
        'Live canteen menu browsing with categorization',
        'Smart cart with instant pricing and dietary preferences',
        'Domain-restricted student registration (@college.edu)',
        'JWT-based secure authentication pipeline',
        'Real-time order state tracking and fulfillment dashboard'
      ],
      stack: ['JavaScript', 'Node.js', 'Express', 'HTML5', 'CSS3']
    },
    {
      id: 'VibeOs',
      name: 'VibeOS',
      repoName: 'VibeOs',
      category: 'ai',
      categoryLabel: 'INTENT COMPUTING',
      status: 'RESEARCH & PROTOTYPE',
      homepage: null,
      repoUrl: 'https://github.com/rahul18107/VibeOs',
      summary: 'Exploring the AI-native operating system where software is synthesized on demand from plain-language intent.',
      description: 'VibeOS explores what personal computing looks like when you no longer need pre-installed software silos. Instead of searching, installing, and configuring tools, the user expresses intent in natural language and the system synthesizes dynamic micro-applications on the fly.',
      features: [
        'Intent-to-UI dynamic application generation',
        'Prompt-driven runtime environment',
        'Zero-install workflow orchestration',
        'AI code synthesis and instant sandboxed execution'
      ],
      stack: ['Python', 'LLM Agents', 'Web UI', 'Code Generation']
    },
    {
      id: 'Agrilens',
      name: 'AgriLens',
      repoName: 'Agrilens',
      category: 'data',
      categoryLabel: 'DATA ANALYTICS',
      status: 'COMPLETED',
      homepage: null,
      repoUrl: 'https://github.com/rahul18107/Agrilens',
      summary: 'Interactive Power BI data dashboard tracking agricultural yields, rainfall correlations, and pesticide usage across India.',
      description: 'AgriLens is an interactive data visualization suite built using Power BI. It synthesizes extensive agricultural records from across Indian states, analyzing crop production, seasonality, rainfall impact, and fertilizer/pesticide utilization trends.',
      features: [
        'Multi-state agricultural yield benchmarking',
        'Seasonal production breakdown (Kharif, Rabi, Zaid)',
        'Rainfall correlation and irrigation dependency analysis',
        'Chemical fertilizer and pesticide efficiency insights',
        'Drill-down interactive filters by crop and geography'
      ],
      stack: ['Power BI', 'Data Modeling', 'DAX', 'Agricultural Analytics']
    },
    {
      id: 'deep-learning',
      name: 'Deep Learning Experiments',
      repoName: 'deep-learning',
      category: 'data',
      categoryLabel: 'MACHINE LEARNING',
      status: 'LAB REPO',
      homepage: null,
      repoUrl: 'https://github.com/rahul18107/deep-learning',
      summary: 'Hands-on neural network implementations, exploratory training notebooks, and architectural benchmarks.',
      description: 'A curated laboratory repository featuring Jupyter notebooks and code implementations exploring neural network architectures, optimization dynamics, computer vision, and NLP model foundations.',
      features: [
        'Implementations of core neural network architectures',
        'Hyperparameter exploration and convergence benchmarking',
        'Loss visualization and tensor validation routines'
      ],
      stack: ['Python', 'Jupyter Notebook', 'PyTorch / ML']
    }
  ];

  // =========================================================================
  // 2. TYPEWRITER EFFECT (bermawy.com style)
  // =========================================================================
  const typewriterTarget = document.getElementById('typewriter-target');
  if (typewriterTarget) {
    const phrases = [
      'hi there_',
      'rahul here_',
      'building with ai & llms_',
      'crafting mobile & flutter apps_',
      'shipping practical systems_'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typeSpeed = 55;
    const deleteSpeed = 35;
    const pauseDelay = 1400;

    function handleTyping() {
      const currentPhrase = phrases[phraseIndex];

      if (!isDeleting) {
        typewriterTarget.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentPhrase.length) {
          isDeleting = true;
          setTimeout(handleTyping, pauseDelay);
          return;
        }
      } else {
        typewriterTarget.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          setTimeout(handleTyping, 350);
          return;
        }
      }

      setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);
    }

    handleTyping();
  }

  // =========================================================================
  // 3. NAVBAR SCROLL BLUR
  // =========================================================================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('is-scrolled');
    } else {
      navbar?.classList.remove('is-scrolled');
    }
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      mobileToggle.querySelector('.menu-icon').textContent =
        mobileDrawer.classList.contains('open') ? '[CLOSE ✕]' : '[MENU]';
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.querySelector('.menu-icon').textContent = '[MENU]';
      });
    });
  }

  // =========================================================================
  // 4. RETRO GAMEBOY / TERMINAL CONSOLE CONTROLLER
  // =========================================================================
  let currentCategory = 'all';
  let filteredProjects = [...projects];
  let currentIndex = 0;

  const listContainer = document.getElementById('projects-list-container');
  const consoleScreen = document.getElementById('console-screen');
  const btnPrev = document.getElementById('btn-prev-proj');
  const btnNext = document.getElementById('btn-next-proj');
  const btnA = document.getElementById('gameboy-btn-a');
  const btnB = document.getElementById('gameboy-btn-b');
  const btnStart = document.getElementById('gameboy-btn-start');
  const btnSelect = document.getElementById('gameboy-btn-select');

  function renderProjectsList() {
    if (!listContainer) return;
    listContainer.innerHTML = '';

    filteredProjects.forEach((proj, index) => {
      const card = document.createElement('div');
      card.className = `proj-item-card ${index === currentIndex ? 'active' : ''}`;
      card.dataset.index = index;

      card.innerHTML = `
        <div class="proj-item-header">
          <span class="proj-name">${proj.name}</span>
          <span class="proj-category-pill">${proj.categoryLabel}</span>
        </div>
        <p class="proj-summary">${proj.summary}</p>
        <div class="proj-tags-inline">
          ${proj.stack.slice(0, 3).map(s => `<span class="mini-tag">${s}</span>`).join('')}
          ${proj.homepage ? '<span class="mini-tag" style="color:#16a34a;border-color:#16a34a;">⚡ LIVE</span>' : ''}
        </div>
      `;

      card.addEventListener('click', () => {
        selectProject(index);
      });

      listContainer.appendChild(card);
    });

    updateConsoleScreen();
  }

  function selectProject(index) {
    if (index < 0 || index >= filteredProjects.length) return;
    currentIndex = index;

    // Update active class on list
    const allCards = listContainer.querySelectorAll('.proj-item-card');
    allCards.forEach((c, i) => {
      c.classList.toggle('active', i === currentIndex);
    });

    // Scroll active item into view within container
    if (allCards[currentIndex]) {
      allCards[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    updateConsoleScreen();
  }

  // =========================================================================
  // RETRO 8-BIT AUDIO SYNTHESIZER (Pure Web Audio API)
  // =========================================================================
  let soundEnabled = true;
  let audioCtx = null;

  function playRetroClick(freq = 600, type = 'square', duration = 0.04) {
    if (!soundEnabled) return;
    try {
      if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not permitted or supported
    }
  }

  const soundToggle = document.getElementById('deck-sound-toggle');
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      soundEnabled = !soundEnabled;
      soundToggle.textContent = soundEnabled ? '🔊 SFX: ON' : '🔇 SFX: OFF';
      if (soundEnabled) playRetroClick(880, 'sine', 0.05);
    });
  }

  function updateConsoleScreen() {
    if (!consoleScreen || filteredProjects.length === 0) return;
    const proj = filteredProjects[currentIndex];

    consoleScreen.innerHTML = `
      <div class="screen-top-meta">
        <span>SYS://INTENT_OS</span>
        <div class="screen-wave-bars" title="Telemetry Activity">
          <span></span><span></span><span></span><span></span>
        </div>
        <span>[0${currentIndex + 1}/0${filteredProjects.length}]</span>
      </div>

      <div class="screen-proj-header">
        <span>&gt; ${proj.repoName.toUpperCase()}</span>
      </div>

      <div class="screen-field"><span class="screen-label">STATUS:</span> <span class="screen-val">${proj.status}</span></div>
      <div class="screen-field"><span class="screen-label">DOMAIN:</span> <span class="screen-val">${proj.categoryLabel}</span></div>
      
      <div class="screen-stats-grid">
        <div><span class="screen-label">LANG:</span> ${proj.stack[0]}</div>
        <div><span class="screen-label">TARGET:</span> ${proj.category.toUpperCase()}</div>
      </div>
      
      <div class="screen-field" style="margin-top: 0.4rem;">
        <span class="screen-label">SYS_SUMMARY:</span>
        <div style="color: #CBD5E1; font-size: 0.74rem; margin-top: 2px; line-height: 1.4;">
          ${proj.summary}
        </div>
      </div>

      <div class="screen-prompt">&gt; PRESS [A] NEXT • [B] PREV • [CLICK] INSPECT_</div>
    `;
  }

  // Physical button listeners
  function goNext() {
    playRetroClick(750, 'square', 0.035);
    const nextIdx = (currentIndex + 1) % filteredProjects.length;
    selectProject(nextIdx);
  }

  function goPrev() {
    playRetroClick(520, 'square', 0.035);
    const prevIdx = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    selectProject(prevIdx);
  }

  const btnLeft = document.getElementById('btn-left-proj');
  const btnRight = document.getElementById('btn-right-proj');

  btnA?.addEventListener('click', (e) => {
    e.stopPropagation();
    goNext();
  });

  btnB?.addEventListener('click', (e) => {
    e.stopPropagation();
    goPrev();
  });

  btnNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    goNext();
  });

  btnPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    goPrev();
  });

  btnRight?.addEventListener('click', (e) => {
    e.stopPropagation();
    goNext();
  });

  btnLeft?.addEventListener('click', (e) => {
    e.stopPropagation();
    goPrev();
  });

  btnStart?.addEventListener('click', () => {
    playRetroClick(980, 'triangle', 0.06);
    const proj = filteredProjects[currentIndex];
    if (proj) {
      window.open(proj.homepage || proj.repoUrl, '_blank');
    }
  });

  btnSelect?.addEventListener('click', () => {
    playRetroClick(660, 'sine', 0.04);
    const proj = filteredProjects[currentIndex];
    if (proj) {
      openModal(proj);
    }
  });

  consoleScreen?.addEventListener('click', () => {
    playRetroClick(660, 'sine', 0.04);
    const proj = filteredProjects[currentIndex];
    if (proj) {
      openModal(proj);
    }
  });

  // =========================================================================
  // 5. CATEGORY FILTER TABS
  // =========================================================================
  const tabButtons = document.querySelectorAll('.tab-button');
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.dataset.tab;
      currentCategory = cat;

      if (cat === 'all') {
        filteredProjects = [...projects];
      } else {
        filteredProjects = projects.filter(p => p.category === cat);
      }

      currentIndex = 0;
      renderProjectsList();
    });
  });

  // Initial render
  renderProjectsList();

  // =========================================================================
  // 6. PROJECT MODAL POPUP
  // =========================================================================
  const modalOverlay = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const modalPrimaryBtn = document.getElementById('modal-primary-btn');
  const modalRepoBtn = document.getElementById('modal-repo-btn');

  function openModal(proj) {
    if (!modalOverlay) return;

    modalTitle.textContent = proj.name;
    modalBody.innerHTML = `
      <div style="margin-bottom: 1rem;">
        <span class="badge-lang">${proj.categoryLabel}</span>
        <span class="badge-lang" style="margin-left: 0.5rem; background: #DCFCE7; color: #166534; border-color: #166534;">${proj.status}</span>
      </div>
      <p style="margin-bottom: 1rem; font-size: 1rem;">${proj.description}</p>
      
      <div class="modal-section-title">KEY CAPABILITIES & ARCHITECTURE</div>
      <ul class="modal-features-list">
        ${proj.features.map(f => `<li>${f}</li>`).join('')}
      </ul>

      <div class="modal-section-title">TECHNOLOGY STACK</div>
      <div class="modal-tech-chips">
        ${proj.stack.map(s => `<span class="tech-chip">${s}</span>`).join('')}
      </div>
    `;

    if (proj.homepage) {
      modalPrimaryBtn.style.display = 'inline-flex';
      modalPrimaryBtn.href = proj.homepage;
      modalPrimaryBtn.textContent = '[LAUNCH LIVE APP ↗]';
    } else {
      modalPrimaryBtn.style.display = 'none';
    }

    modalRepoBtn.href = proj.repoUrl;
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modalClose?.addEventListener('click', closeModal);
  modalOverlay?.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay?.classList.contains('active')) {
      closeModal();
    }
  });

  // Wire up "IN THE WORKS" inspect triggers
  document.querySelectorAll('.inspect-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const repoKey = btn.dataset.repo;
      const found = projects.find(p => p.id === repoKey || p.repoName === repoKey);
      if (found) {
        openModal(found);
      }
    });
  });

  // Wire up archive table rows to inspect modal
  document.querySelectorAll('.repo-row').forEach(row => {
    row.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // Allow direct link clicks
      const name = row.dataset.name;
      const found = projects.find(p => p.id === name || p.repoName === name);
      if (found) {
        openModal(found);
      }
    });
  });

});
