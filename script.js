document.addEventListener('DOMContentLoaded', () => {

  /* --- 1. GERENCIADOR DE TEMA CLARO/ESCURO --- */
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const body = document.body;

  function applyTheme(theme) {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);

    themeToggleBtns.forEach(btn => {
      const sunIcon = btn.querySelector('.sun-icon');
      const moonIcon = btn.querySelector('.moon-icon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.style.display = 'block';
          moonIcon.style.display = 'none';
        } else {
          sunIcon.style.display = 'none';
          moonIcon.style.display = 'block';
        }
      }
    });
  }

  const savedTheme = localStorage.getItem('portfolio-theme');
  let currentTheme = 'light';
  if (savedTheme) {
    currentTheme = savedTheme;
  }
  applyTheme(currentTheme);

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const newTheme = body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  });

  /* --- 2. MENU MOBILE --- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
    });
  }

  if (navLinks.length > 0 && navMenu && mobileMenuBtn) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }

  /* --- 3. BARRA DE PROGRESSO DE SCROLL --- */
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    const progressEl = document.getElementById('scroll-progress');
    if (progressEl) progressEl.style.width = scrolled + '%';
  });

  /* --- 4. SCROLL REVEAL E SCROLLSPY (INTERSECTION OBSERVER) --- */
  const spyOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px',
    threshold: 0
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, spyOptions);

  const revealOptions = {
    root: null,
    rootMargin: '0px 0px -100px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealOptions);

  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    spyObserver.observe(section);
    revealObserver.observe(section);
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY < 100) {
      navLinks.forEach(link => link.classList.remove('active'));
    }
  });
});

/* --- 5. GERENCIADOR DE IDIOMAS (PT/EN) --- */
const langToggleBtns = document.querySelectorAll('.lang-toggle-btn');

function applyLang(lang) {
  document.body.setAttribute('data-lang', lang);
  localStorage.setItem('portfolio-lang', lang);
  langToggleBtns.forEach(btn => {
    btn.textContent = lang === 'en' ? 'EN' : 'PT';
  });
}

const savedLang = localStorage.getItem('portfolio-lang');
let currentLang = savedLang ? savedLang : 'pt';
applyLang(currentLang);

langToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const newLang = document.body.getAttribute('data-lang') === 'en' ? 'pt' : 'en';
    applyLang(newLang);
  });
});
