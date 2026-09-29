# Migração para Daniel Carvalho

Fonte prioritária: [site publicado](https://danielcarvalhodesign.com/), consultado em 27/09/2026. A home e os três cases públicos foram lidos nos dois idiomas. O repositório antigo não foi utilizado como fonte editorial. ESTRUTURA-DO-SITE.md permanece como referência histórica de layout.

## Conteúdo e composição

- Headline, apresentação, categorias, títulos e resumos dos três cases preservam a versão publicada em PT/EN, inclusive a frase adicional do resumo inglês.
- Retrato público usado na seção Sobre; as três capas e três imagens internas públicas são arquivos locais.
- Dois parágrafos sobre a atuação, duas formações e seis competências mantidos.
- Campos sem comprovação foram removidos: localização, disponibilidade, atuação global, lista de empresas, Design Engineer, Dribbble e WhatsApp.
- Currículo PDF e canais reais: uxdanieljr@gmail.com e https://www.linkedin.com/in/dccarvalhojr/.
- A estrutura conserva hero à esquerda, apoio de projetos à esquerda e título à direita, cases horizontais, retrato à esquerda no Sobre e contatos à direita.

## Confidencialidade e precisão editorial

Bradesco contém apenas o que foi renderizado na página pública: contexto, abordagem, resultado, síntese e aviso de confidencialidade. Não foram acessados a página completa, o formulário de senha ou os fluxos restritos. A migração não reproduz uma senha no cliente. Acesso adicional é solicitado pelo LinkedIn, como indicado no aviso publicado.

Links relacionados que apontavam para o Bradesco completo agora levam ao público. As rotas antigas `/cases/bradesco-seguros-completo` e `/en/cases/bradesco-seguros-completo` redirecionam para suas versões públicas. O arquivo de fluxos confidenciais não integra os assets nem a pasta de publicação.

No Mobinft, a versão publicada apresenta os 20% como meta e também como alcançados. O inventário editorial pede confirmação antes de promover essa informação a resultado. A migração conserva os 20% como **meta de negócio**, mantém os testes com seis e cinco participantes e os achados, e remove a afirmação de atingimento.

No Conecta, o card continua descrevendo uma proposta. O texto publicado do case menciona medição interna de 50%; esse conteúdo foi preservado no corpo do case, sem acrescentar a métrica à home ou transformar o resumo em resultado de implantação.

## Rotas

| Página | PT | EN |
|---|---|---|
| Home | `/` | `/en` |
| Bradesco público | `/cases/bradesco-seguros` | `/en/cases/bradesco-seguros` |
| Conecta | `/cases/conecta` | `/en/cases/conecta` |
| Mobinft | `/cases/mobinft` | `/en/cases/mobinft` |

Cada rota entrega HTML completo com idioma, título, descrição, canonical e alternates PT/EN. A mudança de idioma mantém o case correspondente; na home, mantém a âncora. As âncoras atuais são hero, projetos, sobre, servicos e contato. As antigas top/work/about/capabilities/contact têm aliases em JavaScript.

## Arquivos e publicação

- `content.json`: conteúdo estruturado da home PT/EN e textos de interface.
- `public-cases.json`: fragmentos sanitizados dos seis cases públicos.
- `build.mjs`: componentes compartilhados e geração estática.
- `styles.css` e `script.js`: aparência e interações.
- `asset-manifest.json`: origem, tamanho e SHA-256 de cada imagem/PDF.
- `sources/published-pages.json`: evidência da captura pública; não é publicada.
- `scripts/extract-content.py`: extração reproduzível dos textos públicos.
- `dist/`: saída de publicação, contendo apenas páginas e arquivos públicos necessários.

`npm run dev` inicia a prévia; `npm run build` gera a saída; `npm test` executa os testes. O servidor local usa uma lista explícita de rotas/arquivos; fontes, inventários e scripts de extração não ficam disponíveis por HTTP. Em uma futura publicação, servir somente `dist/` e aplicar seus redirecionamentos. Esta tarefa não alterou o domínio publicado.

## Validação

Os testes em `tests/portfolio.test.mjs` verificam as oito rotas, um H1 por página, idioma, canonical, todos os links internos e âncoras, seis competências, os contatos corretos, ausência de conteúdo do template, imagens e PDF idênticos aos arquivos baixados, assinatura do PDF e das imagens, redirecionamentos para Bradesco público, indisponibilidade do arquivo confidencial e respostas 404/405/400.

O arquivo público `img-hifi-mobinft.png` contém dados JPEG apesar da extensão. O servidor identifica a assinatura e responde `image/jpeg`; o asset é mantido sem alteração de conteúdo.

O currículo original foi aberto com pypdf e teve suas duas páginas renderizadas e inspecionadas. Como o navegador integrado não oferece uma prévia PDF funcional, os links do currículo usam download direto. As chamadas foram adaptadas para “Baixar currículo” / “Download résumé”; o arquivo permanece idêntico ao publicado. O evento de download foi confirmado no navegador e o arquivo foi salvo com o nome correto.

Resultado: **11 testes automatizados passaram**, além das verificações de sintaxe de JavaScript, build e servidor.

A revisão de navegador cobre home, troca PT/EN dentro de um case, carregamento das imagens, navegação de ida/volta, tema, teclado e carrossel no celular, além de larguras de 390 px, 779 px e desktop. O PDF é validado por formato e checksum; e-mail e LinkedIn são conferidos pelos destinos publicados, sem envio de mensagens.
