# Integração visual do Exercise Guide — decisão de produto

Data: 21/11/2026 | Status: decisão aprovada; integração técnica pendente de inspeção da aplicação em execução

## Contexto e correção de status
O responsável pelo produto confirmou que **o aplicativo já está em desenvolvimento e rodando** em um ambiente de execução. O README atual deste repositório ainda descreve planejamento e não comprova qual código, branch, URL ou ambiente corresponde à aplicação em funcionamento. **Não tratar o protótipo HTML como substituto da aplicação existente.** Antes de editar a interface, localizar o código-fonte e o ambiente ativos, verificar sua arquitetura e integrar sem recriar módulos ou sobrescrever trabalho.

## Decisões obrigatórias
- Integrar o guia de exercícios **à aplicação já existente**, seguindo o design system previamente definido: **JSR Fitness Premium Black & Green**, visual escuro/grafite, verde vibrante, branco, mobile-first, responsivo e adequado ao iPhone.
- **Custo financeiro novo = R$ 0** para implementação do guia visual. Não contratar APIs pagas, infraestrutura, serviços, armazenamento, domínio ou assinaturas; não exigir cartão nem ativar cobrança. Hospedagem gratuita só depois de confirmar condições e limites do plano.
- Não confundir custo de desenvolvimento com custo de operação: código e interface podem ser feitos sem contratar serviço; infraestrutura futura depende de escolhas e limites de uso.
- Os 58 IDs oficiais e seis categorias são preservados. Fonte de dados: `assets/jsr-fitness-premium/research/catalogo-58.json`. Não criar um catálogo paralelo nem duplicar telas/componentes.
- O arquivo `prototype/exercise-guide/index.html` é **protótipo de referência**, não aplicação principal nem evidência de implantação. Preferir importar/adaptar seus componentes à arquitetura real após inspecioná-la.
- Fichas: 3 com referências preliminares, 55 com rascunhos anatômicos gerais; **0 validadas profissionalmente**. Sinalizar claramente a condição e não anunciar 58 estudos científicos concluídos.
- Imagens próprias/permitidas: exibir quando disponíveis; caso contrário usar placeholders acessíveis. Não copiar imagens ou vídeos de terceiros sem licença adequada. Não bloquear MVP por ausência de imagens.
- O guia deve ser acessível durante o treino **sem interromper a sessão nem perder séries, cronômetro, cargas ou progresso**.
- Preservar regras de Smart Cycle, snapshots do histórico, persistência local, privacidade e backup; não criar dependências de IA paga.

## Plano de integração na aplicação real
1. **Descoberta:** localizar branch, arquivos de interface, rotas, componentes e armazenamento da versão em execução; identificar divergências entre documentação e código antes de modificar.
2. **Contrato de dados:** adaptar o catálogo único ao modelo `Exercício` existente, sem alterar IDs; adicionar validação de duplicatas, categorias e estados de revisão.
3. **UI:** conectar busca e filtros por grupo; ficha com músculos, equipamentos, movimento, fontes e avisos; visual Black & Green, acessibilidade e estados de carregamento/vazio.
4. **Imagens:** suportar execução e anatomia quando houver arquivos licenciados; fallback sem quebrar layout.
5. **Fluxo de treino:** abrir e voltar do guia sem reiniciar sessão; testar persistência, Smart Cycle e navegação.
6. **Verificação:** executar testes existentes e validar manualmente no iPhone, incluindo recarga, funcionamento offline quando previsto e reabertura.
7. **Entrega:** registrar commits, telas realmente integradas, testes executados e pendências; não declarar implantação sem evidência.

## Critérios de aceite
- Interface integrada à aplicação ativa, não apenas ao HTML isolado.
- 58 exercícios e seis categorias exibidos a partir de fonte única; busca e filtros funcionando.
- Estado de revisão visível e avisos educativos.
- Nenhuma perda de dados ao abrir/fechar guia durante treino.
- Nenhuma dependência financeira nova ou ativação de cobrança.
- Evidência de testes; pendências declaradas honestamente.

## Pendências conhecidas
- Identificar a implementação real em execução (código/branch/ambiente); não presumir que o README antigo reflete o estado atual.
- Conferir referências exercício por exercício e obter/produzir imagens autorizadas.
- Confirmar hospedagem e testes no iPhone.
