import test, {before,after} from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {readFile} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const origin='http://127.0.0.1:5174';
let server;
let serverOutput='';
before(async()=>{
  server=spawn(process.execPath,['server.mjs'],{cwd:root,env:{...process.env,PORT:'5174'},stdio:['ignore','pipe','pipe']});
  await new Promise((resolve,reject)=>{
    const timeout=setTimeout(()=>reject(new Error('Server startup timed out: '+serverOutput)),15000);
    server.stdout.on('data',chunk=>{serverOutput+=chunk;if(serverOutput.includes('portfolio:')){clearTimeout(timeout);resolve();}});
    server.stderr.on('data',chunk=>{serverOutput+=chunk;});
    server.on('error',reject);
    server.on('exit',code=>{if(code!==null&&code!==0){clearTimeout(timeout);reject(new Error(serverOutput));}});
  });
});
after(()=>server?.kill());

const slugs=['bradesco-seguros','conecta','mobinft'];
for(const lang of ['pt','en']){
  const prefix=lang==='en'?'/en':'';
  for(const route of [prefix||'/',...slugs.map(slug=>prefix+'/cases/'+slug)]){
    test('public route, locale, links and media: '+route,async()=>{
      const response=await fetch(origin+route);
      assert.equal(response.status,200);
      const html=await response.text();
      assert.match(html,new RegExp('<html lang="'+(lang==='en'?'en':'pt-BR')+'"'));
      assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
      assert.match(html,new RegExp('rel="canonical" href="https://danielcarvalhodesign.com'+route+'"'));
      assert.doesNotMatch(html,/Fabio|Freire|Unibank|App Skale|Pocket Reading|Design Engineer|hi@fabiofreire|Working globally|Available for projects/i);
      assert.doesNotMatch(html,/type="password"|bradesco-seguros-completo|img_fluxos_brds/);
      const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
      assert.equal(ids.size,[...html.matchAll(/\bid="([^"]+)"/g)].length);
      for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
        const link=match[1].replaceAll('&amp;','&');
        if(link.startsWith('#')){assert.ok(ids.has(link.slice(1)),'Missing anchor '+link);continue;}
        if(!link.startsWith('/'))continue;
        const parsed=new URL(link,origin);
        const linked=await fetch(parsed,{method:'HEAD'});
        assert.equal(linked.status,200,'Broken internal URL '+link);
        if(parsed.hash){const destination=await (await fetch(parsed)).text();assert.ok(destination.includes('id="'+parsed.hash.slice(1)+'"'),'Missing linked anchor '+link);}
      }
      if(!route.includes('/cases/')){
        assert.equal((html.match(/class="project-card"/g)||[]).length,3);
        assert.equal((html.match(/<li><h3>/g)||[]).length,5);
        assert.ok(html.includes('mailto:uxdanieljr@gmail.com'));
        assert.ok(html.includes('https://www.linkedin.com/in/dccarvalhojr/'));
      }
      if(route.endsWith('/bradesco-seguros')) {
        assert.doesNotMatch(html,/GPRS|img_fluxos_brds/i);
        assert.match(html,lang==='en'?/confidentiality agreement/:/acordo de confidencialidade/);
        assert.match(html,/mailto:uxdanieljr@gmail\.com/);
        assert.match(html,/https:\/\/www\.linkedin\.com\/in\/dccarvalhojr\//);
        assert.ok(html.indexOf('id="disclosure"')<html.indexOf('class="study-more"'));
        assert.match(html,/study-hero-cover[\s\S]*banner-bradesco-negociacao\.svg/);
      }
      if(route.endsWith('/mobinft')){
        assert.match(html,lang==='en'?/Volunteer UX study/:/Estudo voluntário/);
        assert.doesNotMatch(html,/20%|marketplace|six participants|five participants|seis participantes|cinco participantes/i);
      }
    });
  }
}

test('local assets match downloaded originals and have valid formats',async()=>{
  const manifest=JSON.parse((await readFile(path.join(root,'asset-manifest.json'),'utf8')).replace(/^\uFEFF/,''));
  for(const item of manifest){
    const response=await fetch(origin+encodeURI(item.path));
    assert.equal(response.status,200,item.path);
    const bytes=Buffer.from(await response.arrayBuffer());
    assert.equal(createHash('sha256').update(bytes).digest('hex').toUpperCase(),item.sha256,item.path);
    if(item.path.endsWith('.pdf')){assert.match(response.headers.get('content-type'),/application\/pdf/);assert.equal(bytes.subarray(0,5).toString(),'%PDF-');}
    if(item.path.endsWith('.png')) {
      const jpeg=bytes.subarray(0,3).toString('hex')==='ffd8ff';
      assert.ok(jpeg || bytes.subarray(0,8).toString('hex')==='89504e470d0a1a0a','Invalid raster image '+item.path);
      assert.match(response.headers.get('content-type'),jpeg?/image\/jpeg/:/image\/png/);
    }
    if(item.path.endsWith('.svg')) assert.match(bytes.toString(),/<svg[\s>]/);
  }
});

test('motion preserves both home narratives and destinations',async()=>{
  const content=JSON.parse(await readFile(path.join(root,'content.json'),'utf8'));
  const escape=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  for(const [lang,current] of [['pt','index.html'],['en','en/index.html']]){
    const html=await readFile(path.join(root,'dist',current),'utf8');
    const data=content.locales[lang];
    for(const copy of [...data.hero.title,data.hero.description,data.projects.title,...data.projects.items.flatMap(item=>[item.title,item.description]),data.about.title,...data.about.paragraphs,data.contact.title,data.contact.description]){
      assert.ok(html.includes(escape(copy)),`Missing published ${lang} copy: ${copy}`);
    }
    assert.equal((html.match(/class="hero-line-mask"/g)||[]).length,2);
    assert.match(html,/class="project-stack container"/);
    assert.doesNotMatch(html,/project-grid|project-track|project-rail|rail-control/);
    assert.ok(slugs.every((slug,index)=>index===0 || html.indexOf(`/cases/${slugs[index-1]}`)<html.indexOf(`/cases/${slug}`)));
    assert.match(html,/class="page-shell"/);
    assert.ok(html.indexOf('class="project-card"')<html.indexOf('id="sobre"'));
  }
});

test('home project cards are whole-card links with one accessible target',async()=>{
  for(const [lang,prefix] of [['pt',''],['en','/en']]){
    const html=await (await fetch(origin+(prefix||'/'))).text();
    const cards=[...html.matchAll(/<article class="project-card"[^>]*>([\s\S]*?)<\/article>/g)].map(match=>match[1]);
    assert.equal(cards.length,3);
    for(const [index,card] of cards.entries()){
      const slug=slugs[index];
      assert.match(card,new RegExp(`<a class="project-card-surface" href="${prefix}/cases/${slug}" aria-labelledby="project-title-${slug} project-cta-${slug}" aria-describedby="project-description-${slug}">`));
      assert.equal((card.match(/<a\b/g)||[]).length,1,'Card must have one link target');
      assert.match(card,new RegExp(`<h3 id="project-title-${slug}">`));
      assert.match(card,new RegExp(`<p id="project-description-${slug}">`));
      assert.match(card,new RegExp(`<span class="button outline" id="project-cta-${slug}">`));
    }
    assert.ok(html.includes(lang==='pt'
      ?'Sou Daniel Carvalho, Product Designer há mais de 4 anos. Conduzo pesquisas, prototipo e desenho interfaces para sistemas corporativos, aplicativos e SaaS, conectando necessidades dos usuários aos objetivos do negócio.'
      :'I redesign complex workflows. At Bradesco Seguros, a before-and-after comparison indicated about 10 fewer hours of manual work per employee each week.'));
  }
});

test('every case links to the other two public cases with localized cover cards',async()=>{
  const home=JSON.parse(await readFile(path.join(root,'content.json'),'utf8'));
  for(const prefix of ['','/en']) for(const slug of slugs){
    const html=await (await fetch(origin+prefix+'/cases/'+slug)).text();
    const section=html.split('<section class="study-more"')[1].split('</section>')[0];
    const links=[...section.matchAll(/class="study-more-link" href="([^"]+)"/g)].map(m=>m[1]);
    const related=slugs.filter(s=>s!==slug);
    assert.deepEqual(links,related.map(s=>prefix+'/cases/'+s));
    assert.equal((section.match(/<img /g)||[]).length,related.length);
    assert.equal((section.match(/class="study-more-placeholder"/g)||[]).length,0);
    assert.equal((section.match(/<h3 /g)||[]).length,2);
    assert.equal((section.match(/class="button primary"/g)||[]).length,2);
    assert.ok(section.includes(prefix?'See more':'Veja também'));
    assert.ok(section.includes(prefix?'View project':'Ver projeto'));
    for(const card of section.matchAll(/<article class="study-more-card"[^>]*>([\s\S]*?)<\/article>/g))assert.equal((card[1].match(/<a /g)||[]).length,1);
    assert.ok(html.indexOf('study-more-divider')<html.indexOf('<footer'));
    if(slug!=='bradesco-seguros'){
      const bradescoSummary=home.locales[prefix? 'en':'pt'].projects.items.find(item=>item.slug==='bradesco-seguros').relatedDescription;
      assert.ok(section.includes(bradescoSummary),`${prefix||'pt'} Bradesco related card summary missing from ${slug}`);
    }
  }
});

test('all case pages reuse the home footer base with localized navigation',async()=>{
  for(const prefix of ['','/en']){
    const homeHtml=await (await fetch(origin+(prefix||'/'))).text();
    const footerMarkup=html=>{
      const start=html.lastIndexOf('<footer class="contact">');
      assert.notEqual(start,-1,'Missing shared contact footer');
      const end=html.indexOf('</footer>',start);
      assert.notEqual(end,-1,'Unclosed contact footer');
      return html.slice(start,end+'</footer>'.length);
    };
    const homeFooter=footerMarkup(homeHtml);
    const normalizeLinks=markup=>markup.replace(/href="[^"]*"/g,'href="$link"');
    const normalizedHomeFooter=normalizeLinks(homeFooter);
    const sharedContact=homeFooter.slice(0,homeFooter.indexOf('<div class="footer-bottom'));
    for(const slug of slugs){
      const html=await (await fetch(origin+prefix+'/cases/'+slug)).text();
      const footer=footerMarkup(html);
      assert.equal(normalizeLinks(footer),normalizedHomeFooter,slug+' footer markup differs from home');
      assert.equal(footer.slice(0,footer.indexOf('<div class="footer-bottom')),sharedContact,slug);
      assert.doesNotMatch(html,/class="case-footer"/);
      const nav=footer.slice(footer.indexOf('<nav aria-label='));
      const home=prefix||'/';
      for(const section of ['projetos','sobre','contato','hero']) assert.ok(nav.includes(`href="${home}#${section}"`),`${slug} footer missing ${section} destination`);
    }
  }
});

test('editorial copy keeps outcomes, targets, authorship and evidence bounded',async()=>{
  const home=JSON.parse(await readFile(path.join(root,'content.json'),'utf8'));
  const studies=JSON.parse(await readFile(path.join(root,'case-studies.json'),'utf8'));
  for(const lang of ['pt','en']){
    const cards=home.locales[lang].projects.items;
    const bradescoCard=cards.find(item=>item.slug==='bradesco-seguros');
    const bradesco=bradescoCard.description;
    const conecta=cards.find(item=>item.slug==='conecta').description;
    const mobinft=cards.find(item=>item.slug==='mobinft').description;
    assert.match(bradesco,lang==='pt'?/mais de 20 fluxos em cinco funcionalidades/i:/more than 20 workflows across five features/i);
    assert.match(bradesco,lang==='pt'?/economia aproximada de 10 horas semanais.*por funcionário/i:/approximately 10 hours of manual work saved per employee each week/i);
    assert.match(bradescoCard.cta,lang==='pt'?/Ver versão pública/i:/View public case/i);
    assert.match(bradescoCard.relatedDescription,lang==='pt'?/aproximada.*por funcionário.*restrita/i:/approximately.*per employee.*restricted/i);
    assert.doesNotMatch(bradesco,/GPRS|automação|automation/i);
    assert.match(conecta,lang==='pt'?/quatro semanas.*freelance/i:/four-week freelance project/i);
    assert.match(conecta,lang==='pt'?/testes/i:/Testing informed/i);
    assert.doesNotMatch(conecta,/50%|relatório interno|internal report|lançada|launched|after launch/i);
    assert.match(mobinft,lang==='pt'?/estudo voluntário.*time de design/i:/volunteer UX study with a design team/i);
    assert.match(mobinft,/wireframes/i);
    assert.doesNotMatch(mobinft,/20%|six participants|five participants|seis participantes|cinco participantes|marketplace/i);
    assert.match(home.locales[lang].ui.services,lang==='pt'?/Atuação/:/Practice/);
    assert.equal(home.locales[lang].capabilities.items.length,5);
    const capabilities=home.locales[lang].capabilities.items;
    assert.deepEqual(capabilities.map(item=>item.title),lang==='pt'
      ?['Pesquisa e testes','Fluxos e interfaces','Prototipação e entrega','Design System','IA no processo']
      :['Research and testing','Workflows and interfaces','Prototyping and delivery','Design System','AI in my workflow']);
    const expectedOpenings=lang==='pt'?['Conduzo ','Mapeio ','Crio ','Crio ','Uso ']:Array(5).fill('I ');
    assert.deepEqual(capabilities.map(item=>expectedOpenings.some(opening=>item.description.startsWith(opening))),Array(5).fill(true));
    assert.equal(home.locales[lang].contact.title,lang==='pt'?'Tem um problema complexo para resolver?':'Have a complex problem to solve?');
    assert.equal(home.locales[lang].contact.description,lang==='pt'
      ?'Conte-me onde seu produto ou sua equipe está travando. Posso investigar com usuários, testar alternativas e desenhar os próximos fluxos. Escreva por e-mail ou LinkedIn.'
      :'Tell me where your product or team is getting stuck. I can investigate with users, test options, and design the next workflows. Reach out by email or on LinkedIn.');
    assert.match(home.locales[lang].about.education[0].school,lang==='pt'?/em andamento/:/in progress/);
  }
  const body=study=>[
    study.category,
    study.title,
    study.subtitle,
    ...study.metrics.flatMap(metric=>[metric.kind,metric.value,metric.unit,metric.label,metric.evidence]),
    ...(study.heroMedia?[study.heroMedia.alt]:[]),
    study.meta.role,
    study.meta.period,
    ...study.meta.focus,
    ...study.sections.flatMap(section=>[
      section.eyebrow,
      section.heading,
      ...section.paragraphs,
      ...(section.notes||[]),
      ...(section.media||[]).flatMap(media=>[media.alt,media.caption])
    ]),
    study.seo.title,
    study.seo.description
  ].join(' ');

  for(const [route,lang] of [['/cases/bradesco-seguros','pt'],['/en/cases/bradesco-seguros','en']]){
    const study=studies[route];
    const copy=body(study);
    assert.match(copy,lang==='pt'?/Redesenhei fluxos.*mais de 20 fluxos em cinco funcionalidades/i:/I redesigned workflows.*more than 20 workflows across five features/i);
    assert.match(copy,lang==='pt'?/A comparação de tempos antes e depois indicou economia aproximada de 10 horas semanais de trabalho manual por funcionário/i:/A before-and-after time comparison indicated approximately 10 hours of manual work saved per employee each week/i);
    assert.match(copy,lang==='pt'?/As anotações e os protótipos também ajudaram a alinhar requisitos técnicos e de negócio/i:/The annotations and prototypes also helped teams align on technical and business requirements/i);
    assert.match(copy,lang==='pt'?/Parte deste projeto está sob acordo de confidencialidade/i:/Part of this project is covered by a confidentiality agreement/i);
    assert.match(copy,lang==='pt'?/Product Designer pela Capgemini/i:/Product Designer at Capgemini/i);
    assert.doesNotMatch(copy,/GPRS|regulatório|regulatory|automação|automation/i);
    assert.equal(study.metrics[0].value,'≈10');
    assert.equal(study.metrics[0].unit,lang==='pt'?'h/semana':'h/week');
    assert.match(study.metrics[0].label,lang==='pt'?/trabalho manual.*por funcionário/:/manual work per employee/);
    assert.match(study.metrics[0].evidence,lang==='pt'?/comparação de tempos antes e depois/i:/before-and-after time comparison/i);
    const approach=study.sections.find(section=>section.id==='approach');
    assert.match(approach.paragraphs.join(' '),lang==='pt'?/Desenvolvi mais de 20 fluxos em cinco funcionalidades/i:/I developed more than 20 workflows across five features/i);
    assert.match(approach.paragraphs.join(' '),lang==='pt'?/anotações para tornar as regras e os estados compreensíveis/i:/annotations that helped the team understand the rules and system states/i);
    const disclosure=study.sections.at(-1);
    assert.equal(disclosure.id,'disclosure');
    assert.equal(disclosure.contactLink,true);
    assert.match(study.seo.description,lang==='pt'?/comparação de tempos antes e depois.*aproximada.*restrita/i:/before-and-after time comparison.*approximately.*restricted/i);
    const media=studies[route].sections.flatMap(section=>section.media||[]);
    assert.deepEqual(media,[]);
    const homeHtml=await (await fetch(origin+(lang==='en'?'/en':''))).text();
    assert.match(homeHtml,/src="\/assets\/banner-bradesco-negociacao\.svg"/);
    const caseHtml=await (await fetch(origin+route)).text();
    assert.match(caseHtml,/study-hero-cover[\s\S]*banner-bradesco-negociacao\.svg/);
    assert.ok(caseHtml.includes(`name="description" content="${study.seo.description}"`));
    const disclosureMarkup=caseHtml.split('<section class="study-section study-container" id="disclosure"')[1].split('</section>')[0];
    assert.match(disclosureMarkup,/href="mailto:uxdanieljr@gmail\.com"/);
    assert.match(disclosureMarkup,/href="https:\/\/www\.linkedin\.com\/in\/dccarvalhojr\//);
    assert.ok(caseHtml.indexOf('id="disclosure"')<caseHtml.indexOf('class="study-more"'));
  }

  for(const [route,lang] of [['/cases/conecta','pt'],['/en/cases/conecta','en']]){
    const study=studies[route];
    const copy=body(study);
    assert.equal(study.metrics[0].value,'4');
    assert.equal(study.metrics[0].unit,lang==='pt'?'semanas':'weeks');
    assert.match(study.meta.role,/freelance/i);
    assert.match(copy,lang==='pt'?/testes de usabilidade/i:/usability testing/i);
    assert.match(copy,lang==='pt'?/priorizar melhorias pelo impacto esperado e pela viabilidade/i:/prioritize improvements by expected impact and feasibility/i);
    assert.doesNotMatch(copy,/50%|relatório interno|internal report|lançamento|launched|after launch/i);
    assert.doesNotMatch(copy,/maior adesão|higher treatment adherence|retenção|retention|drop-off/i);
    assert.match(copy,/quatro semanas|four weeks/i);
  }

  for(const [route,lang] of [['/cases/mobinft','pt'],['/en/cases/mobinft','en']]){
    const study=studies[route];
    const copy=body(study);
    assert.equal(study.metrics[0].kind,'qualitative');
    assert.match(copy,lang==='pt'?/Estudo voluntário/i:/Volunteer UX study/i);
    assert.match(copy,lang==='pt'?/protótipos testáveis/i:/testable prototypes/i);
    assert.match(copy,lang==='pt'?/UX Designer em equipe/i:/UX Designer on a team/i);
    assert.doesNotMatch(copy,/20%|six participants|five participants|seis participantes|cinco participantes|marketplace/i);
  }
});

test('metric semantics, empty-media chapters and public media boundaries',async()=>{
  const studies=JSON.parse(await readFile(path.join(root,'case-studies.json'),'utf8'));
  for(const [route,study] of Object.entries(studies)){
    assert.equal(study.metrics.length,1);
    assert.ok(study.sections.some(s=>!s.media?.length),'Must accept chapters without images');
    const media=study.sections.flatMap(s=>s.media||[]);
    assert.ok(media.every(m=>m.caption&&m.alt!==undefined&&m.src.startsWith('/assets/')));
    if(study.slug==='bradesco-seguros'){
      assert.equal(study.metrics[0].value,'≈10');
      assert.ok(['h/semana','h/week'].includes(study.metrics[0].unit));
      assert.equal(study.heroMedia.src,'/assets/banner-bradesco-negociacao.svg');
      assert.equal(study.sections.at(-1).id,'disclosure');
      assert.deepEqual(media,[]);
    }
    if(study.slug==='conecta'){
      assert.equal(study.metrics[0].value,'4');
      assert.ok(study.sections.flatMap(s=>s.paragraphs).join(' ').includes('four weeks')||study.sections.flatMap(s=>s.paragraphs).join(' ').includes('quatro semanas'));
      assert.ok(media.filter(m=>m.region).length===3);
    }
    if(study.slug==='mobinft'){
      assert.equal(study.metrics[0].kind,'qualitative');
      assert.equal(study.metrics[0].unit,'');
    }
  }
});

test('restricted aliases resolve only to the public case',async()=>{
  for(const prefix of ['','/en']){
    const response=await fetch(origin+prefix+'/cases/bradesco-seguros-completo',{redirect:'manual'});
    assert.equal(response.status,301);
    assert.equal(response.headers.get('location'),prefix+'/cases/bradesco-seguros');
  }
  for(const route of ['/assets/case-bradesco-negociacao/img_fluxos_brds.png','/published-pages.json','/public-cases.json','/content.json','/build.mjs','/missing']){
    const response=await fetch(origin+route);assert.equal(response.status,404,route);
  }
});

test('unsupported methods and malformed URLs fail cleanly',async()=>{
  assert.equal((await fetch(origin+'/',{method:'POST'})).status,405);
  assert.equal((await fetch(origin+'/%zz')).status,400);
  assert.equal((await fetch(origin+'/cases/conecta/')).status,200);
});
