# Plano de testes — JSR Fitness 0.1

## Testes automáticos
Execute `npm test` com Node.js 20+ na raiz do projeto. O GitHub Actions executará a mesma suíte nos próximos commits.

## Testes manuais no iPhone
1. Abrir o aplicativo pelo Safari em uma hospedagem HTTPS.
2. Criar ficha A com 2 exercícios e ficha B com 1 exercício.
3. Fechar e reabrir o Safari: conferir persistência das fichas.
4. Iniciar A, editar carga e repetições, marcar séries e concluir: verificar histórico e avanço para B.
5. Iniciar A fora de sequência, concluir: verificar que B continua pendente.
6. Iniciar B e encerrar parcialmente: verificar que B continua pendente.
7. Exportar backup, criar ficha temporária e importar backup: verificar restauração.
8. Excluir ficha anterior à pendente: verificar manutenção do ciclo.
9. Testar tela bloqueada e troca de abas durante descanso.

## Limitações conhecidas
- PWA ainda sem service worker/offline completo, ícones e hospedagem.
- Persistência inicial via localStorage (não IndexedDB); armazenamento pode ser apagado pelo Safari.
- Cronômetro não retém contagem após recarregar a página.
- Ainda não há gerador automático, calendário, Gym Scan, Motion Coach ou JSR Insight.
- O fluxo de ciclo é simplificado e requer testes de integração adicionais.
- Nenhum teste manual no iPhone foi confirmado.

## Publicação
Não ativar GitHub Pages público sem decisão explícita sobre exposição do projeto. Preferir hospedagem com acesso controlado caso o repositório seja privado.
