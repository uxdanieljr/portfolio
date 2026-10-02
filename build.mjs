import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { caseStudyPage } from './case-components.mjs';

const root = path.dirname(fileURLToPath(import.meta.url));
const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
const resumeFiles = {
  pt: { href: '/Daniel%20Carvalho%20-%20Product%20Designer%202026.pdf', name: 'Daniel Carvalho - Product Designer 2026.pdf' },
  en: { href: '/Daniel%20Carvalho%20-%20Product%20Designer%20Resume%202026.pdf', name: 'Daniel Carvalho - Product Designer Resume 2026.pdf' }
};
const mail = 'mailto:uxdanieljr@gmail.com';
const linkedin = 'https://www.linkedin.com/in/dccarvalhojr/';
const canonicalOrigin = 'https://danielcarvalhodesign.com';

function nav(c, lang, route, isCase) {
  const u = c.ui;
  const resume = resumeFiles[lang] ?? resumeFiles.pt;
  const home = lang === 'en' ? '/en' : '/';
  const localRoute = route.replace(/^\/en(?=\/|$)/, '') || '/';
  const pt = localRoute;
  const en = localRoute === '/' ? '/en' : '/en' + localRoute;
  const menuToggle = isCase ? '' :
    '<button class="menu-toggle" type="button" aria-label="' + esc(u.openMenu) +
    '" aria-expanded="false" aria-controls="primary-navigation" data-open-label="' + esc(u.openMenu) +
    '" data-close-label="' + esc(u.closeMenu) + '" hidden><span class="menu-toggle-icon" aria-hidden="true"></span><span>' +
    esc(u.menu) + '</span></button>';
  const navClass = isCase ? 'case-nav' : 'home-nav';
  return `<a class="skip-link" href="#main">${esc(u.skip)}</a>
  <header class="navigation"><nav class="nav-inner container ${navClass}" aria-label="${esc(u.nav)}">
    <a class="wordmark" href="${home}#hero">${esc(isCase ? u.back : c.header.name)}</a>
    ${menuToggle}${isCase ? '' : `<div class="nav-links" id="primary-navigation"><a href="#projetos">${esc(u.projects)}</a><a href="#sobre">${esc(u.about)}</a><a href="#servicos">${esc(u.services)}</a><a href="${resume.href}" download="${esc(resume.name)}">${esc(u.resume)}</a><a href="#contato">${esc(u.contact)}</a></div>`}
    <div class="nav-tools"><div class="language-switch" role="group" aria-label="${esc(u.language)}"><a href="${pt}" lang="pt-BR" hreflang="pt-BR" ${lang === 'pt' ? 'aria-current="page"' : ''}>PT</a><span aria-hidden="true">/</span><a href="${en}" lang="en" hreflang="en" ${lang === 'en' ? 'aria-current="page"' : ''}>EN</a></div><button class="theme-switch" type="button" aria-pressed="false" data-dark="${esc(u.themeDark)}" data-light="${esc(u.themeLight)}">${esc(u.themeDark)}</button></div>
  </nav></header>`;
}

function footer(c, lang, isCase) {
  const home = lang === 'en' ? '/en' : '/';
  const u = c.ui;
  const target = section => `${isCase ? home : ''}#${section}`;
  return `<div class="footer-bottom container"><span>${esc(c.footer.name)} © <span data-year>${new Date().getFullYear()}</span></span><nav aria-label="${esc(u.footerNav)}"><a href="${target('projetos')}">${esc(u.projects)}</a><a href="${target('sobre')}">${esc(u.about)}</a><a href="${target('contato')}">${esc(u.contact)}</a><a href="${target('hero')}">${esc(u.top)}</a></nav></div>`;
}

function homeFooter(c, lang, isCase = false) {
  const u = c.ui;
  return `<footer class="contact"><div class="container"><div class="contact-main"><div><p class="eyebrow">${esc(c.contact.eyebrow)}</p><h2>${esc(c.contact.title)}</h2><p class="section-intro">${esc(c.contact.description)}</p><a class="button primary" href="${mail}">${esc(c.contact.emailCta)}</a></div><div class="contact-links"><p class="eyebrow">${esc(u.channels)}</p><a href="${mail}">uxdanieljr@gmail.com</a><a href="${linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a></div></div></div>${footer(c,lang,isCase)}</footer>`;
}

function homePage(c, lang) {
  const u = c.ui;
  const prefix = lang === 'en' ? '/en' : '';
  const resume = resumeFiles[lang] ?? resumeFiles.pt;
  return `<main id="main">
    <section class="hero" id="hero" aria-labelledby="hero-title"><div class="hero-main container"><p class="eyebrow">${esc(c.hero.eyebrow)}</p><h1 id="hero-title"><span class="hero-line-mask"><span class="hero-line">${esc(c.hero.title[0])}</span></span><span class="hero-line-mask"><span class="hero-line secondary-line">${esc(c.hero.title[1])}</span></span></h1></div>
    <div class="hero-bottom"><div class="hero-bottom-inner container"><p class="hero-description">${esc(c.hero.description)}</p><div class="hero-actions"><a class="button primary" href="#projetos">${esc(c.hero.cta)}</a><a class="button outline" href="${resume.href}" download="${esc(resume.name)}">${esc(c.hero.resume)}</a></div><a class="scroll-link" href="#projetos">${esc(u.scroll)}</a></div></div></section>
    <section class="work section" id="projetos" aria-labelledby="work-title"><div class="container"><header class="section-heading work-heading"><div class="work-heading-copy"><p class="eyebrow">${esc(c.projects.eyebrow)}</p><p class="section-intro">${esc(c.projects.intro)}</p></div><h2 id="work-title" data-reveal>${esc(c.projects.title)}</h2></header></div>
    <div class="project-stack container" style="--stack-count:${c.projects.items.length}" aria-label="${esc(c.projects.eyebrow)}">${c.projects.items.map((p,index) => `<article class="project-card" style="--stack-layer:${index+1};--stack-target-scale:${(1 - (c.projects.items.length - index - 1) * .04).toFixed(2)}"><a class="project-card-surface" href="${prefix}/cases/${p.slug}" aria-labelledby="project-title-${p.slug} project-cta-${p.slug}" aria-describedby="project-description-${p.slug}">${p.image ? `<span class="project-media-link"><img class="project-image" src="${esc(p.image)}" alt="${esc(p.alt)}" loading="lazy" decoding="async" width="1600" height="900" draggable="false"></span>` : '<span class="project-media-link"><span class="project-image project-image-placeholder image-placeholder" aria-hidden="true"></span></span>'}<div class="project-copy"><span class="project-index" aria-hidden="true">${String(index+1).padStart(2,'0')} / ${String(c.projects.items.length).padStart(2,'0')}</span><p class="project-category">${esc(p.category)}</p><h3 id="project-title-${p.slug}">${esc(p.title)}</h3><p id="project-description-${p.slug}">${esc(p.description)}</p><span class="button outline" id="project-cta-${p.slug}">${esc(p.cta)}</span></div></a></article><div class="project-stack-spacer" aria-hidden="true"></div>`).join('')}</div></section>
    <section class="about" id="sobre" aria-labelledby="about-title"><figure class="about-figure" data-reveal><img class="portrait-image" src="/assets/foto_site_portfolio.png" alt="${esc(u.portrait)}" width="900" height="1200" loading="lazy" decoding="async"></figure><div class="about-content"><header class="section-heading"><h2 id="about-title" data-reveal>${esc(c.about.title)}</h2></header><div class="about-copy">${c.about.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}<div class="about-bottom"><div><p class="eyebrow">${esc(u.education)}</p><ul class="education-list">${c.about.education.map(e=>`<li><strong>${esc(e.title)}</strong><span>${esc(e.school)}</span></li>`).join('')}</ul></div><a class="button outline" href="${resume.href}" download="${esc(resume.name)}">${esc(u.download)}</a></div></div></div></section>
    <section class="capabilities section" id="servicos" aria-labelledby="capabilities-title"><div class="container"><header class="section-heading"><p class="eyebrow">${esc(c.capabilities.eyebrow)}</p><h2 id="capabilities-title" data-reveal>${esc(c.capabilities.title)}</h2></header><ul class="capability-list">${c.capabilities.items.map(item=>`<li><h3>${esc(item.title)}</h3><p>${esc(item.description)}</p></li>`).join('')}</ul></div></section>
  </main>`;
}

function documentPage({c,lang,route,main,title,description,isCase=false}) {
  const local = route.replace(/^\/en(?=\/|$)/, '') || '/';
  const en = local === '/' ? '/en' : '/en' + local;
  return `<!doctype html><html lang="${lang === 'pt' ? 'pt-BR' : 'en'}"><head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}">
  <script>try{const saved=localStorage.getItem('daniel-portfolio-theme');document.documentElement.dataset.theme=saved==='dark'||(!saved&&matchMedia('(prefers-color-scheme: dark)').matches)?'dark':'light'}catch{document.documentElement.dataset.theme=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}</script>
  <link rel="canonical" href="${canonicalOrigin}${route}"><link rel="alternate" hreflang="pt-BR" href="${canonicalOrigin}${local}"><link rel="alternate" hreflang="en" href="${canonicalOrigin}${en}"><link rel="alternate" hreflang="x-default" href="${canonicalOrigin}${local}">
  <meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${canonicalOrigin}${route}"><meta property="og:type" content="website"><meta property="og:image" content="${canonicalOrigin}/assets/foto_site_portfolio.png">
  <link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600&family=Space+Grotesk:wght@600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css">${isCase ? '<link rel="stylesheet" href="/cases.css">' : ''}<script src="/script.js" defer></script></head><body class="${isCase ? 'case-page' : 'home-page'}"><div class="page-shell">${nav(c,lang,route,isCase)}${main}${isCase ? '' : '<span class="contact-anchor" id="contato" aria-hidden="true"></span>'}</div>${homeFooter(c,lang,isCase)}</body></html>\n`;
}

export async function build() {
  const data = JSON.parse(await readFile(path.join(root,'content.json'),'utf8'));
  const cases = JSON.parse(await readFile(path.join(root,'case-studies.json'),'utf8'));
  const manifest = JSON.parse((await readFile(path.join(root,'asset-manifest.json'),'utf8')).replace(/^\uFEFF/, ''));
  const dist = path.join(root,'dist');
  await mkdir(dist,{recursive:true});
  const routes = [];
  for (const lang of ['pt','en']) {
    const c = data.locales[lang];
    const homeRoute = lang === 'en' ? '/en' : '/';
    const pages = [{route:homeRoute,main:homePage(c,lang),title:c.seo.title,description:c.seo.description,isCase:false},...Object.entries(cases).filter(([route])=>(route.startsWith('/en/') ? 'en' : 'pt')===lang).map(([route,item])=>({route,main:caseStudyPage(item,c),title:item.seo.title,description:item.seo.description,isCase:true}))];
    for (const page of pages) {
      const directory = path.join(dist,page.route);
      await mkdir(directory,{recursive:true});
      await writeFile(path.join(directory,'index.html'),documentPage({...page,c,lang}));
      routes.push(page.route);
    }
    await writeFile(path.join(dist,lang==='en'?'404-en.html':'404.html'),documentPage({c,lang,route:homeRoute,isCase:true,title:`${c.ui.notFound} | Daniel Carvalho`,description:c.ui.notFoundBody,main:`<main id="main" class="not-found container"><h1>${esc(c.ui.notFound)}</h1><p>${esc(c.ui.notFoundBody)}</p><a class="button primary" href="${homeRoute}">${esc(c.ui.home)}</a></main>`}));
  }
  for (const entry of manifest) {
    const name = entry.path.slice(1);
    const destination = path.join(dist,name);
    await mkdir(path.dirname(destination),{recursive:true});
    await copyFile(path.join(root,name),destination);
  }
  for (const name of ['styles.css','cases.css','script.js']) await copyFile(path.join(root,name),path.join(dist,name));
  await writeFile(path.join(dist,'_redirects'),'/cases/bradesco-seguros-completo /cases/bradesco-seguros 301\n/en/cases/bradesco-seguros-completo /en/cases/bradesco-seguros 301\n');
  await writeFile(path.join(dist,'_headers'),'/assets/case-mobinft/img-hifi-mobinft.png\n  Content-Type: image/jpeg\n');
  await writeFile(path.join(dist,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route=>`<url><loc>${canonicalOrigin}${route}</loc></url>`).join('')}</urlset>`);
  await writeFile(path.join(dist,'robots.txt'),`User-agent: *\nAllow: /\nSitemap: ${canonicalOrigin}/sitemap.xml\n`);
  await writeFile(path.join(root,'index.html'),await readFile(path.join(dist,'index.html'),'utf8'));
  return {routes,assets:manifest.map(a=>a.path)};
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await build();
  console.log(`Built ${result.routes.length} public PT/EN routes and ${result.assets.length} assets.`);
}
