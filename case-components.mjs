const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function caseHero(study){
  const {ui,meta}=study;
  const cover=study.heroMedia?`<figure class="study-hero-cover"><img src="${esc(study.heroMedia.src)}" alt="${esc(study.heroMedia.alt)}" width="612" height="344" decoding="async"></figure>`:'';
  return `<header class="study-hero"><div class="study-container study-hero-inner"><p class="eyebrow">${esc(study.category)}</p><h1>${esc(study.title)}</h1><p class="study-subtitle">${esc(study.subtitle)}</p><dl class="study-metrics">${study.metrics.map(m=>`<div class="study-metric${m.kind==='qualitative'?' study-metric-qualitative':''}"><dt>${esc(m.label)}</dt><dd><span>${esc(m.value)}</span>${m.unit?`<span class="metric-unit">${esc(m.unit)}</span>`:''}</dd><dd class="metric-evidence">${esc(m.evidence)}</dd></div>`).join('')}</dl><dl class="study-meta"><div><dt>${esc(ui.role)}</dt><dd>${esc(meta.role)}</dd></div><div><dt>${esc(ui.period)}</dt><dd>${esc(meta.period)}</dd></div><div><dt>${esc(ui.focus)}</dt><dd>${meta.focus.map(f=>`<span>${esc(f)}</span>`).join('')}</dd></div></dl>${cover}</div></header>`;
}

function mediaFigure(media,study,index){
  const captionId=`${study.slug}-caption-${index}`;
  let image;
  if(media.region){
    const [x,y,w,h]=media.region;
    const style=`--screen-ratio:${w}/${h};--screen-width:${media.width/w*100}%;--screen-left:${-x/w*100}%;--screen-top:${-y/h*100}%`;
    image=`<div class="study-screen" style="${style}"><img src="${esc(media.src)}" alt="${esc(media.alt)}" width="${media.width}" height="${media.height}" loading="lazy" decoding="async"></div>`;
  }else{
    image=`<img src="${esc(media.src)}" alt="${esc(media.alt)}" width="${media.width}" height="${media.height}" loading="lazy" decoding="async">`;
  }
  return `<figure class="study-figure media-span-${media.span}${media.region?' study-figure-detail':''}" data-reveal${media.width===700?' data-limited-resolution="true"':''}><a class="study-image-link" href="${esc(media.src)}" data-zoom-image data-image-alt="${esc(media.alt)}" data-image-caption="${esc(media.caption)}" aria-label="${esc(study.ui.zoom)}: ${esc(media.alt)}" aria-describedby="${captionId}">${image}<span class="study-zoom-label">${esc(study.ui.zoom)} ↗</span></a><figcaption id="${captionId}">${esc(media.caption)}</figcaption></figure>`;
}

function caseSection(section,study,index){
  let paragraphs=section.paragraphs.map(p=>esc(p));
  if(section.contactLink){paragraphs=paragraphs.map(p=>p
    .replace('LinkedIn','<a href="https://www.linkedin.com/in/dccarvalhojr/" target="_blank" rel="noopener noreferrer">LinkedIn</a>')
    .replace(study.locale==='en'?'email':'e-mail',`<a href="mailto:uxdanieljr@gmail.com">${study.locale==='en'?'email':'e-mail'}</a>`));}
  const notes=section.notes?.length?`<ul class="study-notes">${section.notes.map(n=>`<li>${esc(n)}</li>`).join('')}</ul>`:'';
  return `<section class="study-section study-container" id="${section.id}" aria-labelledby="${section.id}-title"><div class="study-chapter"><header><p class="eyebrow">${esc(section.eyebrow)}</p><h2 id="${section.id}-title" data-reveal>${esc(section.heading)}</h2></header><div class="study-prose">${paragraphs.map(p=>`<p>${p}</p>`).join('')}${notes}</div></div>${section.media?.length?`<div class="study-media-grid">${section.media.map((m,i)=>mediaFigure(m,study,`${index}-${i}`)).join('')}</div>`:''}</section>`;
}

function moreCases(study,home){
  const prefix=study.locale==='en'?'/en':'';
  const cards=study.relatedProjects.map(slug=>home.projects.items.find(item=>item.slug===slug));
  return `<section class="study-more" aria-labelledby="more-title" data-node-id="23010:3"><div class="study-more-divider"></div><div class="study-container"><h2 id="more-title" data-reveal>${esc(study.ui.more)}</h2><div class="study-more-grid">${cards.map(card=>`<article class="study-more-card" data-reveal><a class="study-more-link" href="${prefix}/cases/${card.slug}" aria-labelledby="related-${card.slug}">${card.image?`<img src="${esc(card.image)}" alt="${esc(card.alt)}" width="580" height="326" loading="lazy" decoding="async">`:'<div class="study-more-placeholder" aria-hidden="true"></div>'}<h3 id="related-${card.slug}">${esc(card.title)}</h3><p>${esc(card.relatedDescription||card.description)}</p><span class="button primary">${esc(study.ui.view)}</span></a></article>`).join('')}</div><a class="study-return" href="${prefix||'/'}#projetos">← ${esc(study.ui.backProjects)}</a></div></section>`;
}

function mediaDialog(ui){
  return `<dialog class="study-lightbox" aria-labelledby="image-dialog-title" aria-describedby="image-dialog-help"><div class="study-lightbox-toolbar"><h2 id="image-dialog-title">${esc(ui.zoom)}</h2><div><button type="button" data-image-zoom="-1" aria-label="${esc(ui.zoomOut)}">−</button><output data-image-scale aria-live="polite">100%</output><button type="button" data-image-zoom="1" aria-label="${esc(ui.zoomIn)}">+</button><button type="button" data-close-image>${esc(ui.close)} ×</button></div></div><p id="image-dialog-help">${esc(ui.zoomHelp)}</p><div class="study-lightbox-scroll" tabindex="0"><img alt="" data-lightbox-image></div><p data-lightbox-caption></p></dialog>`;
}

export function caseStudyPage(study,home){
  return `<main id="main" class="case-study-main case-redesign">${caseHero(study)}<article class="study-story" aria-label="${esc(study.title)}">${study.sections.map((section,index)=>caseSection(section,study,index)).join('')}</article>${moreCases(study,home)}${mediaDialog(study.ui)}</main>`;
}
