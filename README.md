# Daniel Carvalho — Portfolio

Site de portfólio estático em português e inglês, gerado com Node.js. A home apresenta os projetos Bradesco Seguros, Conecta e Mobinft; cada case tem rota própria e navegação para os outros projetos.

## Desenvolvimento

```bash
npm run dev
```

O servidor local inicia em `http://127.0.0.1:5173` e gera as páginas antes de servi-las.

## Build e validação

```bash
npm run build
npm run check
npm test
```

O build cria a pasta `dist` com as rotas públicas em PT/EN, imagens responsivas, arquivos versionados, sitemap, páginas 404 e regras de cache. Publique o conteúdo de `dist` na raiz pública do domínio. Em hospedagem Apache, como a Hostinger, o build inclui `.htaccess`; `_headers` e `_redirects` atendem plataformas estáticas que reconhecem esses arquivos.

Rotas principais: `/`, `/en`, `/cases/bradesco-seguros`, `/cases/conecta`, `/cases/mobinft` e suas versões em `/en`. O case Bradesco publicado respeita os limites de confidencialidade.
