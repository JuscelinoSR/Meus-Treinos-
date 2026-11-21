# Arquitetura proposta — JSR Fitness AI

## Princípios
Mobile-first; modularidade; baixo custo; sem API paga obrigatória; dados locais e exportáveis; segurança e privacidade por padrão.

## Candidatos técnicos (a validar)
- PWA, React e TypeScript para interface.
- IndexedDB para persistência local, com backup de exportação/importação.
- Regras TypeScript para geração de treinos e Smart Cycle.
- TensorFlow.js/modelo otimizado para reconhecimento de aparelhos por fotografia.
- MediaPipe Pose Landmarker para estimativa corporal em vídeos gravados.
- Backend e sincronização apenas após MVP, se necessários.

## Limitações e riscos
Visão computacional não é automaticamente rápida ou precisa; medir tamanho do modelo, consumo, qualidade e desempenho no iPhone. Landmarks não comprovam técnica correta. Navegador iOS pode restringir câmera, execução em segundo plano, armazenamento e cronômetros: testar em dispositivo real.

## Domínios previstos
workout-builder, smart-cycle, workout-session, calendar-history, exercise-guide, gym-scan, motion-coach, jsr-insight, shared.

## Regras de persistência
Sessão registra dados reais e snapshot da ficha; conclusão de ciclo idempotente; eventos de treino alternativo não avançam ciclo; treinos parciais não avançam automaticamente. Dados pessoais e vídeos não devem ser transmitidos sem autorização.
