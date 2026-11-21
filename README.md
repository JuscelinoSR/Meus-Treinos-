# Meus Treinos — JSR Fitness AI

Aplicativo mobile-first para planejar, executar e acompanhar treinos, com evolução modular para visão computacional.

**Status informado pelo responsável (21/11/2026):** aplicativo já em desenvolvimento e rodando. A implementação/ambiente ativos ainda precisam ser identificados e verificados neste repositório; não presumir que o protótipo HTML seja a aplicação principal.

## Módulos
- Workout Builder, Smart Cycle, Workout Session, Calendar & History, Exercise Guide (MVP musculação)
- Gym Scan (reconhecimento de aparelhos por foto, pós-MVP)
- Motion Coach (análise educativa de vídeos gravados, pós-MVP)
- Motion Coach Live (futuro)
- JSR Insight (desde o MVP)

## Documentação
- [PRD Mestre](docs/PRD_MASTER.md)
- [Arquitetura](docs/ARCHITECTURE.md)
- [Roadmap](docs/ROADMAP.md)
- [Diretrizes para agentes](AGENTS.md)
- [Decisão de integração visual ao aplicativo existente](docs/INTEGRACAO_GUIA_VISUAL.md)

## Próximo marco
**Próximo passo:** localizar e verificar a implementação já em execução, então integrar o Exercise Guide dos 58 exercícios sem recriar a aplicação ou duplicar módulos. Consultar a decisão de integração visual.

Princípios: baixo custo, privacidade, modularidade e nenhuma dependência obrigatória de API paga de IA. Visão computacional e análise de movimentos exigem testes e confirmação humana; não substituem professor de Educação Física.
