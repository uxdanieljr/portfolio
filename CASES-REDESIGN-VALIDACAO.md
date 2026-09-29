# Redesign dos cases — validação

Implementado em 27/09/2026 no projeto local que contém a home migrada. Esta pasta não contém um repositório Git; não há branch local para identificar. Nenhum deploy foi realizado.

## Escopo e fontes

- Alteração das seis páginas de case PT/EN e sua navegação relacionada.
- Referência visual: https://fabio.freire.nom.br/projects/metrix-saas e nó Figma 23010:3 do arquivo 82LPvMebLJJQJ02BcyvYlo, inspecionados nesta tarefa.
- Inventário: PLANO-REDESIGN-CASES-DANIEL.md fornecido pelo usuário.
- Conteúdo: textos públicos já migrados em public-cases.json e dados das capas/cards da home em content.json. Os parágrafos e subtítulos permanecem integralmente iguais, em sua ordem, com divisões por capítulo.
- Os arquivos HTML da home PT e EN foram comparados byte a byte com a cópia feita antes do redesign: sem alterações. O novo CSS é carregado apenas nos documentos de case; o código de ampliação de imagens só é inicializado quando existe seu diálogo.

## Composição e decisões editoriais

Hero com nome curto, resumo publicado, uma métrica, divisor e papel/período/foco. Capítulos têm rótulo/H2 à esquerda e texto à direita; a primeira linha do parágrafo começa na altura do H2, abaixo do rótulo. Figuras opcionais abaixo das colunas, com legendas e abertura da imagem original. O bloco final contém os outros dois cases, com capa, título, resumo real e CTA, antes do rodapé.

Os fatos públicos de prazos, restrições e colaboração do Bradesco e os tópicos de direção do redesign do Conecta foram incorporados à abordagem, sem a antiga coluna lateral repetitiva. A síntese de Conecta que confundia tempo de uso com retenção foi removida; o resultado publicado conserva sua unidade exata no capítulo de impacto.

| Case | Número destacado | Tratamento da evidência |
|---|---|---|
| Bradesco Seguros | ≈10 h/semana por funcionário | Resultado do case público; sem segunda métrica, telas internas ou imagem de fluxos protegidos. Aviso de confidencialidade e LinkedIn preservados. |
| Conecta | 4 semanas do cronograma | Indicador de processo visível na imagem pública. Os 50% permanecem no corpo como aumento médio no tempo de uso após medição interna; não apresentados como retenção, resultado causal comprovado ou número destacado no hero. |
| Mobinft | 2 rodadas de testes | Nota: 6 participantes na primeira e 5 na segunda, sem somar pessoas únicas. Os 20% permanecem como objetivo de negócio, sem afirmar que foram atingidos. |

Conecta: cronograma legendado como cronograma do projeto; três telas completas selecionadas por enquadramento CSS da montagem original (atividades/progresso, histórico, registros/medidas), seguidas da visão geral. A imagem original não foi alterada. Mobinft: montagem completa limitada à largura nativa de 700px, com ampliação e rolagem. A baixa resolução do arquivo original limita a leitura de textos pequenos mesmo ampliados; uma exportação melhor seria necessária para resolver esse limite de origem. Não foram criadas telas, gráficos ou detalhes artificiais.

Arquivos v1, gráficos de pesquisa com percentuais não confirmados e imagens internas do Bradesco não entraram no build. Todos os destinos Bradesco são públicos. Os aliases históricos da versão completa redirecionam para a versão pública.

## Verificação

- Build: oito rotas públicas e oito assets originais.
- 15 testes automatizados aprovados: HTTP, idiomas, H1, canonical, anchors, imagens, hashes dos assets/PDF, contatos, aliases, limites públicos, dois cards corretos por case, preservação dos subtítulos/parágrafos e preservação da home.
- Sintaxe validada em script.js, build.mjs, server.mjs e case-components.mjs.
- Desktop, largura efetiva 1304px: hero, metadados, parágrafo alinhado ao H2 nos capítulos e dois cards na mesma linha; imagens do Conecta carregadas.
- Ajuste global de 27/09/2026: o início dos parágrafos coincide com o topo dos H2 em todos os 34 capítulos das seis rotas PT/EN; no mobile, o texto fica abaixo do título, sem transbordamento horizontal.
- Largura intermediária 779px: duas colunas, sem transbordamento horizontal.
- Mobile 390px: seis rotas PT/EN sem transbordamento horizontal; capítulos e cards em uma coluna. Hero do Mobinft e cards finais inspecionados visualmente.
- Navegação por Enter: card Bradesco→Conecta e seletor EN→PT preservando Mobinft. Destinos dos seis pares de cards também verificados por HTTP.
- Ampliação Conecta desktop e Mobinft mobile: imagem carregada, zoom 100→150%, controles dentro do diálogo; Escape e botão fechar; rolagem da página restaurada e foco devolvido ao link de origem.
- Currículo e canais existentes preservados: arquivo PDF original com assinatura, MIME e hash validados; LinkedIn público e mailto originais.

## Manutenção

case-studies.json contém o modelo editorial PT/EN. case-components.mjs renderiza hero, capítulos, figuras, cards e diálogo; cases.css é a folha de estilos específica. scripts/structure-cases.py recompõe os dados a partir da narrativa pública migrada. Após editar os dados, executar npm run build e npm test. As fontes editoriais e ferramentas ficam fora de dist e não são servidas.
