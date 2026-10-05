import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { build } from './build.mjs';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)),'dist');
const port = Number(process.env.PORT || 5173);
const {routes,assets} = await build();
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.svg':'image/svg+xml','.png':'image/png','.webp':'image/webp','.pdf':'application/pdf','.xml':'application/xml; charset=utf-8','.txt':'text/plain; charset=utf-8'};
const allowed = new Map([...routes.map(route=>[route,path.join(route,'index.html')]),...assets.map(asset=>[asset,asset]),...['styles.css','cases.css','script.js','sitemap.xml','robots.txt'].map(name=>['/'+name,name])]);
allowed.set('/index.html','index.html');
http.createServer(async(request,response)=>{
  if (!['GET','HEAD'].includes(request.method)) {response.writeHead(405,{Allow:'GET, HEAD'});response.end();return;}
  let pathname;
  try {pathname=decodeURIComponent(new URL(request.url,'http://localhost').pathname);} catch {response.writeHead(400);response.end('Bad request');return;}
  const normalized = pathname.length>1?pathname.replace(/\/$/,''):pathname;
  if (normalized.endsWith('/cases/bradesco-seguros-completo')) {
    response.writeHead(301,{Location:normalized.replace('bradesco-seguros-completo','bradesco-seguros')});response.end();return;
  }
  const entry=allowed.get(normalized);
  try {
    const name=entry || (pathname.startsWith('/en/')?'404-en.html':'404.html');
    const file=path.join(root,name);
    const content=await readFile(file);
    const mime=content.subarray(0,3).toString('hex')==='ffd8ff'?'image/jpeg':types[path.extname(file)] || 'application/octet-stream';
    response.writeHead(entry?200:404,{'Content-Type':mime,'Cache-Control':'no-store','X-Content-Type-Options':'nosniff'});
    response.end(request.method==='HEAD'?undefined:content);
  } catch {response.writeHead(500);response.end('Unable to load page');}
}).listen(port,'127.0.0.1',()=>console.log('Daniel Carvalho portfolio: http://127.0.0.1:'+port));
