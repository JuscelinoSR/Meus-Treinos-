# Upload das imagens JSR Fitness Premium — pendente

Verificado em 21/11/2026: o pacote local `JSR_Fitness_Premium_Organizado_v02.zip` contém 10 imagens WebP individuais, além de `catalogo.json`, `catalogo.csv`, `README.md` e painéis de referência.

**Estado:** arquivos WebP **não enviados** ao repositório nesta etapa. Não declarar integração concluída nem exibir caminhos como imagens existentes até confirmar o upload.

## Destino exato para os 10 WebP

Extrair o ZIP e enviar **somente** o conteúdo da pasta `imagens/` para `assets/jsr-fitness-premium/imagens/`, preservando a estrutura:

- `01_peito/001_supino_reto_execucao.webp`
- `01_peito/001_supino_reto_anatomia.webp`
- `01_peito/002_supino_inclinado_execucao.webp`
- `01_peito/002_supino_inclinado_anatomia.webp`
- `01_peito/020_supino_reto_com_barra_execucao.webp`
- `01_peito/020_supino_reto_com_barra_anatomia.webp`
- `02_costas/003_puxada_frontal_execucao.webp`
- `02_costas/003_puxada_frontal_anatomia.webp`
- `06_abdomen_core/010_prancha_execucao.webp`
- `06_abdomen_core/010_prancha_anatomia.webp`

**Não integrar** a pasta `referencias_visuais_nao_integrar/`: contém painéis compostos ilustrativos com identificações potencialmente inconsistentes.

## Contrato para integração

- Manter IDs oficiais 01, 02, 03, 10 e 20.
- Exibir imagem somente se o arquivo estiver presente, com fallback acessível para as outras 53 fichas.
- Imagens são provisórias, pendentes de revisão anatômica e biomecânica.
- O catálogo principal de pesquisa está em `research/catalogo-58.json`; não substituí-lo automaticamente pelo catálogo do ZIP sem comparar esquemas e IDs.
- Após upload, conferir os 10 caminhos via GitHub e testar no aplicativo existente. Não gerar nova aplicação.

## Procedimento manual alternativo

Pelo navegador do GitHub, abrir o repositório, navegar até `assets/jsr-fitness-premium/`, escolher **Add file > Upload files**, selecionar as imagens extraídas e confirmar o commit. A interface de upload web pode não preservar hierarquias ao selecionar arquivos individualmente; garantir que os caminhos de destino permaneçam os descritos acima. Uma ferramenta Git local também pode preservar as pastas com `git add`, `commit` e `push`.
