# Agente da Biblioteca Visual — JSR Fitness Premium

## Missão
Manter, organizar e integrar a biblioteca visual de exercícios do aplicativo JSR Fitness AI / Meus Treinos, respeitando as diretrizes do AGENTS.md da raiz e os documentos docs/PRD_MASTER.md, docs/ARCHITECTURE.md e docs/ROADMAP.md.

## Escopo
Esta instrução aplica-se à pasta assets/jsr-fitness-premium/ e seus descendentes. Não alterar módulos externos, dados do usuário ou dependências sem autorização.

## Fonte de verdade
- Lista oficial fixa de 58 exercícios, com IDs e nomes originais definidos pelo projeto.
- Seis categorias principais: Peito, Costas, Ombros, Braços, Membros inferiores, Abdômen e Core.
- Um único grupo principal por exercício; subcategorias e músculos secundários podem complementar.
- Nunca inferir o ID a partir da posição em um painel ilustrativo.
- Não renomear exercícios oficiais, criar exercícios adicionais ou duplicar IDs sem aprovação.

## Padrão visual
- Identidade Fitness Premium Black & Green: preto, grafite, verde vibrante, detalhes brancos.
- Para cada exercício: imagem A (execução realista) e imagem B (anatomia 3D).
- A e B devem representar a mesma postura, fase do movimento, equipamento, pegada e, quando viável, ângulo de câmera.
- Na anatomia: músculos principais em vermelho, secundários em laranja e demais músculos em cinza.
- Preferência por WebP otimizado para celular e enquadramento vertical 4:5.
- Não substituir fotos por cartões com texto nem reaproveitar imagem de exercício diferente.
- Não aceitar anatomia incompatível com execução, membros deformados ou equipamento incorreto.

## Convenção de arquivos
- `imagens/01_peito/`, `02_costas/`, `03_ombros/`, `04_bracos/`, `05_membros_inferiores/`, `06_abdomen_core/`.
- Exemplo: `001_supino_reto_execucao.webp` e `001_supino_reto_anatomia.webp`.
- Os nomes devem manter número oficial com três dígitos, slug estável e sufixos `execucao` / `anatomia`.
- Catálogo JSON e CSV devem informar: id, nome, categoria, subcategoria, músculos, equipamento, caminho de cada imagem e status.

## Fluxo de trabalho
1. Inspecionar arquivos reais do repositório antes de qualquer alteração.
2. Comparar o catálogo com a lista oficial; verificar duplicidades, caminhos e arquivos ausentes.
3. Gerar ou receber imagens individuais; não declarar painéis compostos como imagens independentes.
4. Conferir visualmente correspondência A/B e registrar problemas conhecidos.
5. Atualizar catálogo e relatório de pendências sem inventar arquivos.
6. Integrar somente caminhos existentes; usar fallback visual para imagens pendentes.
7. Executar testes disponíveis e registrar resultados.
8. Trabalhar em lotes pequenos, com mudanças rastreáveis e sem apagar materiais anteriores.

## Status e validação
- `pendente`: imagem não existe.
- `ilustrativo`: arquivo existe, mas não recebeu revisão técnica.
- `revisao_visual`: imagem requer correção de coerência ou qualidade.
- `validado`: somente após confirmação explícita de profissional responsável.
- A revisão anatômica e biomecânica profissional foi adiada para etapa posterior. Não apresentar ilustrações como orientação técnica certificada.
- Nunca afirmar que 116 imagens foram produzidas quando apenas painéis foram gerados.

## Segurança e produto
- O material é educativo ilustrativo; não fazer diagnóstico, prescrição individualizada ou promessas de segurança.
- Preservar foco mobile-first, acessibilidade, privacidade e baixo custo.
- Não publicar imagens com direitos de terceiros sem autorização.
- Não modificar PRD, arquitetura ou fluxos de treino fora do escopo.

## Entrega por lote
Registrar: IDs contemplados, pares WebP realmente presentes, arquivos pendentes, diferenças visuais conhecidas, testes e impacto na integração.

## Contrato de entrega para integração automática (21/11/2026)
- **Entregar arquivos reais no repositório**, não apenas afirmar que estão no computador local ou no PDF. O app usa `exercise-assets.js`, com os caminhos determinísticos por ID, nome e grupo.
- Produzir primeiro e publicar os 5 pares WebP locais já existentes, se autorizados e com qualidade aceitável. Registrar IDs, origem, licença, correspondência visual A/B e status. Não substituir arquivos já aprovados silenciosamente.
- Para os 53 exercícios restantes, produzir pares individualmente, em lotes pequenos. **Nenhuma geração é realizada por este arquivo de instruções**: é necessário executar o agente em ambiente com gerador de imagens e permissão de upload.
- Pasta obrigatória: `assets/jsr-fitness-premium/imagens/<grupo>/NNN_nome_normalizado_execucao.webp` e `..._anatomia.webp`. Grupos: 01_peito, 02_costas, 03_ombros, 04_bracos, 05_membros_inferiores, 06_abdomen_core. Normalizar slug removendo acentos e substituindo caracteres não alfanuméricos por sublinhado.
- O aplicativo tenta carregar imagens publicadas e recua para a fotografia anterior ou cartão informativo se o arquivo estiver ausente; **não alterar `app.js`, `exercise-media.js` ou `exercise-assets.js` sem revisão**.
- Executar `node scripts/audit-fitness-assets.mjs` e `npm test` após cada lote. A auditoria lista arquivos faltantes; não confundir ausência de imagem com falha de código.
- Anexar ao PR ou issue relatório com arquivos enviados, pares completos, diferenças de pose, fontes de pesquisa e revisão humana pendente.
- O material científico do `research/catalogo-58.json` permanece preliminar; pesquisar e conferir links antes de marcar qualquer estudo como validado.
