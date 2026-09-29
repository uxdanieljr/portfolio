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
        assert.equal((html.match(/<li><h3>/g)||[]).length,6);
        assert.ok(html.includes('mailto:uxdanieljr@gmail.com'));
        assert.ok(html.includes('https://www.linkedin.com/in/dccarvalhojr/'));
      }
      if(route.endsWith('/bradesco-seguros')) assert.match(html,lang==='en'?/confidentiality agreement/:/acordo de confidencialidade/);
      if(route.endsWith('/mobinft')){
        assert.match(html,lang==='en'?/business objective/i:/objetivo de negócio/);
        assert.match(html,/20%/);
        assert.doesNotMatch(html,/alcance da meta comercial|achieving the business goal|successfully achieved|atingido com sucesso/);
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

test('every case links to the other two public cases with localized cover cards',async()=>{
  for(const prefix of ['','/en']) for(const slug of slugs){
    const html=await (await fetch(origin+prefix+'/cases/'+slug)).text();
    const section=html.split('<section class="study-more"')[1].split('</section>')[0];
    const links=[...section.matchAll(/class="study-more-link" href="([^"]+)"/g)].map(m=>m[1]);
    assert.deepEqual(links,slugs.filter(s=>s!==slug).map(s=>prefix+'/cases/'+s));
    assert.equal((section.match(/<img /g)||[]).length,2);
    assert.equal((section.match(/<h3 /g)||[]).length,2);
    assert.equal((section.match(/class="button primary"/g)||[]).length,2);
    assert.ok(section.includes(prefix?'See more':'Veja também'));
    assert.ok(section.includes(prefix?'View project':'Ver projeto'));
    for(const card of section.matchAll(/<article class="study-more-card"[^>]*>([\s\S]*?)<\/article>/g))assert.equal((card[1].match(/<a /g)||[]).length,1);
    assert.ok(html.indexOf('study-more-divider')<html.indexOf('<footer'));
  }
});

test('published narrative and summary survive chapter recomposition',async()=>{
  const originals=JSON.parse(await readFile(path.join(root,'public-cases.json'),'utf8'));
  const studies=JSON.parse(await readFile(path.join(root,'case-studies.json'),'utf8'));
  const plain=s=>s.replace(/<[^>]*>/g,'').replaceAll('&amp;','&').replaceAll('&quot;','"').replaceAll('&#39;',"'").replace(/\s+/g,' ').trim();
  for(const [route,original] of Object.entries(originals)){
    const paragraphs=[...original.html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(m=>plain(m[1]));
    const study=studies[route];
    assert.equal(study.subtitle,paragraphs.shift(),route+' summary');
    assert.equal(study.sections.flatMap(s=>s.paragraphs).join(' '),paragraphs.join(' '),route+' narrative');
    for(const note of study.sections.flatMap(s=>s.notes||[]))assert.ok(plain(original.html).includes(note),route+' notes must be published facts');
  }
});

test('metric semantics, empty-media chapters and public media boundaries',async()=>{
  const studies=JSON.parse(await readFile(path.join(root,'case-studies.json'),'utf8'));
  for(const [route,study] of Object.entries(studies)){
    assert.equal(study.metrics.length,1);
    assert.ok(study.sections.some(s=>!s.media?.length),'Must accept chapters without images');
    const media=study.sections.flatMap(s=>s.media||[]);
    assert.ok(media.every(m=>m.caption&&m.alt&&m.src.startsWith('/assets/')));
    if(study.slug==='bradesco-seguros'){
      assert.equal(study.metrics[0].value,'≈10');
      assert.match(study.metrics[0].label,/funcionário|employee/);
      assert.deepEqual(media.map(m=>m.src),['/assets/banner-bradesco-negociacao.svg']);
    }
    if(study.slug==='conecta'){
      assert.equal(study.metrics[0].value,'4');
      assert.match(study.metrics[0].unit,/semanas|weeks/);
      assert.ok(study.sections.flatMap(s=>s.paragraphs).join(' ').includes('50%'));
      assert.ok(media.filter(m=>m.region).length===3);
    }
    if(study.slug==='mobinft'){
      assert.equal(study.metrics[0].value,'2');
      assert.match(study.metrics[0].evidence,/6.*5/);
      assert.ok(!study.metrics.some(m=>m.value.includes('20')));
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
