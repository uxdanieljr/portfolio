const themeButton = document.querySelector('.theme-switch');
const stack = document.querySelector('.project-stack');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const smallOrTouch = window.matchMedia('(max-width: 900px), (pointer: coarse)');
const navigationType = performance.getEntriesByType('navigation')[0]?.type || 'navigate';

function syncThemeButton() {
  if (!themeButton) return;
  const dark = document.documentElement.dataset.theme === 'dark';
  themeButton.setAttribute('aria-pressed', String(dark));
  themeButton.textContent = themeButton.dataset[dark ? 'light' : 'dark'];
}
syncThemeButton();
themeButton?.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  try { localStorage.setItem('daniel-portfolio-theme', dark ? 'dark' : 'light'); } catch { /* Storage may be unavailable. */ }
  syncThemeButton();
});
document.querySelectorAll('[data-year]').forEach(element => { element.textContent = String(new Date().getFullYear()); });
function syncLanguageHash() {
  document.querySelectorAll('.language-switch a').forEach(link => { link.hash = location.hash; });
}
window.addEventListener('hashchange', syncLanguageHash);
const oldAnchors = {top:'hero',work:'projetos',about:'sobre',capabilities:'servicos',contact:'contato'};
const oldAnchor = oldAnchors[location.hash.slice(1)];
if (oldAnchor && document.getElementById(oldAnchor)) {
  history.replaceState(null,'','#'+oldAnchor);
  if (navigationType === 'navigate') document.getElementById(oldAnchor).scrollIntoView({behavior:'instant'});
}
syncLanguageHash();

// Native scrolling remains the default for keyboard, touch, reduced motion and no-JS.
if (!reducedMotion.matches && document.querySelector('.hero') && (!location.hash || location.hash === '#hero')) {
  document.documentElement.classList.add('motion-enabled');
}
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.removeAttribute('data-motion-pending');
      observer.unobserve(entry.target);
    }
  }, {rootMargin:'0px 0px -8% 0px',threshold:0.01});
  for (const element of document.querySelectorAll('[data-reveal]')) {
    const bounds = element.getBoundingClientRect();
    if (bounds.top < window.innerHeight * .92) continue;
    element.setAttribute('data-motion-pending','');
    observer.observe(element);
  }
  document.addEventListener('focusin', event => {
    event.target.closest('[data-motion-pending]')?.removeAttribute('data-motion-pending');
  });
}

const footer = document.querySelector('body > footer');
if (footer && 'ResizeObserver' in window) {
  const measureFooter = () => {
    const shouldReveal = !reducedMotion.matches && !smallOrTouch.matches && footer.offsetHeight < window.innerHeight - 80;
    document.body.toggleAttribute('data-footer-reveal', shouldReveal);
    document.body.style.setProperty('--footer-height', `${footer.offsetHeight}px`);
  };
  const footerObserver = new ResizeObserver(measureFooter);
  footerObserver.observe(footer);
  window.addEventListener('resize', measureFooter);
  smallOrTouch.addEventListener('change', measureFooter);
  reducedMotion.addEventListener('change', measureFooter);
  measureFooter();
  footer.addEventListener('focusin', () => {
    if (document.body.hasAttribute('data-footer-reveal')) window.scrollTo({top:document.documentElement.scrollHeight,behavior:'instant'});
  });
}

if (stack) {
  const cards = [...stack.querySelectorAll('.project-card')];
  const navigation = document.querySelector('.navigation');
  let panelHeight = 0;
  let hold = 0;
  let top = 0;
  let peek = 0;
  let scaleFrame = 0;
  const cssStackMotion = CSS.supports('animation-timeline: view()') && CSS.supports('animation-range: exit-crossing 0% exit-crossing 100%');

  function naturalHeight(card, singleColumn) {
    const style = getComputedStyle(card.querySelector('.project-card-surface'));
    const edges = ['paddingTop','paddingBottom','borderTopWidth','borderBottomWidth']
      .reduce((total,key) => total + parseFloat(style[key]), 0);
    const media = card.querySelector('.project-media-link').offsetHeight;
    const copy = card.querySelector('.project-copy').scrollHeight;
    return edges + (singleColumn ? media + parseFloat(style.rowGap) + copy : Math.max(media,copy));
  }

  function updateFallbackScale() {
    scaleFrame = 0;
    if (stack.dataset.stackMotion !== 'js') return;
    const stage = panelHeight + hold;
    const distance = -stack.getBoundingClientRect().top;
    cards.slice(0,-1).forEach((card,index) => {
      const progress = Math.max(0,Math.min(1,distance / stage - index));
      const target = parseFloat(card.style.getPropertyValue('--stack-target-scale'));
      card.querySelector('.project-card-surface').style.setProperty('--stack-js-scale',String(1 - (1 - target) * progress));
    });
  }

  function queueFallbackScale() {
    if (stack.dataset.stackMotion === 'js' && !scaleFrame) scaleFrame = requestAnimationFrame(updateFallbackScale);
  }

  function measureStack() {
    top = navigation?.offsetHeight || 0;
    peek = window.innerWidth <= 600 ? 8 : 14;
    const singleColumn = window.matchMedia('(max-width: 760px)').matches;
    const availableHeight = window.innerHeight - top - (cards.length - 1) * peek;
    const contentHeight = Math.max(...cards.map(card => naturalHeight(card,singleColumn)));
    panelHeight = Math.min(availableHeight,Math.max(availableHeight * .68,contentHeight + (singleColumn ? 32 : 64)));
    hold = Math.max(150,Math.min(panelHeight * .36,300));
    const fits = cards.length > 1 && !reducedMotion.matches && panelHeight >= 440 &&
      contentHeight <= panelHeight - 20;
    if (fits) {
      stack.style.setProperty('--stack-top',`${top}px`);
      stack.style.setProperty('--panel-height',`${panelHeight}px`);
      stack.style.setProperty('--stack-hold',`${hold}px`);
      stack.style.setProperty('--stack-peek',`${peek}px`);
      stack.dataset.stacked = 'true';
      stack.dataset.stackMotion = cssStackMotion ? 'css' : 'js';
      queueFallbackScale();
    } else {
      stack.removeAttribute('data-stacked');
      stack.removeAttribute('data-stack-motion');
      stack.style.removeProperty('--stack-top');
      stack.style.removeProperty('--panel-height');
      stack.style.removeProperty('--stack-hold');
      stack.style.removeProperty('--stack-peek');
      cards.forEach(card => card.querySelector('.project-card-surface').style.removeProperty('--stack-js-scale'));
    }
  }

  stack.addEventListener('focusin', event => {
    if (stack.dataset.stacked !== 'true') return;
    const card = event.target.closest('.project-card');
    const index = cards.indexOf(card);
    if (index < 0) return;
    const start = stack.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({top:start + index * (panelHeight + hold) - top - index * peek,behavior:'instant'});
  });
  if (!cssStackMotion) window.addEventListener('scroll',queueFallbackScale,{passive:true});
  window.addEventListener('resize',measureStack);
  window.addEventListener('pageshow',measureStack);
  reducedMotion.addEventListener('change',measureStack);
  document.fonts?.ready.then(measureStack);
  stack.querySelectorAll('img').forEach(image => image.addEventListener('load',measureStack,{once:true}));
  measureStack();
}

// Public case media keeps a direct image link when JavaScript is unavailable.
const imageDialog = document.querySelector('.study-lightbox');
if (imageDialog) {
  const image = imageDialog.querySelector('[data-lightbox-image]');
  const viewport = imageDialog.querySelector('.study-lightbox-scroll');
  const scaleOutput = imageDialog.querySelector('[data-image-scale]');
  const caption = imageDialog.querySelector('[data-lightbox-caption]');
  const closeButton = imageDialog.querySelector('[data-close-image]');
  let trigger = null;
  let scale = 1;
  let initialWidth = 0;
  function applyScale() {
    image.style.width = `${initialWidth * scale}px`;
    scaleOutput.value = `${Math.round(scale * 100)}%`;
    imageDialog.querySelector('[data-image-zoom="-1"]').disabled = scale <= 1;
    imageDialog.querySelector('[data-image-zoom="1"]').disabled = scale >= 4;
  }
  document.querySelectorAll('[data-zoom-image]').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      trigger = link;
      scale = 1;
      image.alt = link.dataset.imageAlt;
      caption.textContent = link.dataset.imageCaption;
      imageDialog.showModal();
      document.documentElement.classList.add('image-dialog-open');
      image.onload = () => {
        initialWidth = Math.min(image.naturalWidth, viewport.clientWidth - 24);
        applyScale();
        viewport.scrollTo(0, 0);
      };
      image.src = link.href;
      closeButton.focus();
    });
  });
  imageDialog.querySelectorAll('[data-image-zoom]').forEach(button => {
    button.addEventListener('click', () => {
      scale = Math.max(1, Math.min(4, scale + Number(button.dataset.imageZoom) * .5));
      applyScale();
    });
  });
  closeButton.addEventListener('click', () => imageDialog.close());
  imageDialog.addEventListener('close', () => {
    document.documentElement.classList.remove('image-dialog-open');
    trigger?.focus({preventScroll:true});
  });
}

// Static routes can finish measuring after the browser's first hash jump.
if (location.hash && location.hash !== '#hero' && navigationType === 'navigate') {
  requestAnimationFrame(() => {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    target?.scrollIntoView({behavior:'instant'});
  });
}
