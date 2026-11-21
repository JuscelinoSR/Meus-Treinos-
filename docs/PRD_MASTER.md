# PRD Mestre — JSR Fitness AI
Versão 1.0 | 20/11/2026 | Status: planejamento

## Visão
Aplicativo mobile-first de treinamento pessoal, inicialmente para musculação, com evolução modular e sem dependência obrigatória de APIs pagas de IA. Não substitui orientação profissional.

## Público e plataforma
Uso pessoal inicial no iPhone; PWA é a proposta técnica inicial, ainda sujeita a validação. Possível expansão futura para treinadores e academias, fora do escopo inicial.

## Módulos
1. **Workout Builder (MVP):** fichas personalizadas; exercícios, séries, repetições, cargas, descansos e observações. Gerador por regras com objetivo, nível, tempo, músculos, equipamentos e preferências; sugestões editáveis.
2. **Smart Cycle (MVP):** sequência configurável A→B→C; falta não avança; treino alternativo não elimina pendência; parcial exige decisão; dispensa manual fica registrada; conclusão idempotente; edição de ficha não reescreve histórico.
3. **Workout Session (MVP):** execução, registro real das séries, cronômetro configurável, pausa, pular e adicionar tempo; preservar sessão ao navegar.
4. **Calendar & History (MVP):** calendário mensal com planejados, realizados, pendentes e dispensados; histórico com data efetiva, cargas, frequência e duração.
5. **Exercise Guide (MVP básico):** músculos principais/secundários, execução, erros comuns, precauções, equipamentos, alternativas e imagens; acesso sem perder sessão.
6. **Gym Scan (pós-MVP):** fotografia do aparelho, classificação por visão computacional, apresentação de candidatos, confirmação humana e biblioteca manual; inventário 'Minha Academia'. Não presumir precisão sem testes.
7. **Motion Coach (pós-MVP):** vídeos curtos gravados, estimativa de pontos corporais e análises educativas para exercícios validados; qualidade insuficiente resulta em análise inconclusiva; encaminhar a professor presencial quando necessário.
8. **Motion Coach Live (futuro):** acompanhamento ao vivo somente após validação de desempenho, segurança e precisão da análise gravada.
9. **JSR Insight (desde MVP):** eventos mínimos de uso, falhas, não uso e motivos quando informados; privacidade, consentimento e LGPD.

## Regras de segurança e privacidade
- Não diagnosticar lesões nem garantir execução correta com base em vídeo.
- Dor, instabilidade ou dificuldade persistente: recomendar interromper quando apropriado e buscar avaliação qualificada.
- Processamento local por padrão quando viável; não enviar vídeos automaticamente; controles de exclusão; atenção a terceiros filmados.
- Nenhuma função essencial do MVP requer IA paga.

## Modelo de dados preliminar
Perfil, Exercício, Equipamento, Ficha, Ciclo, Sessão, SérieRealizada, AnáliseVídeo, EventoInsight. Sessões guardam snapshot da ficha para preservar histórico.

## Critérios de aceitação do MVP
Criar/editar fichas; adicionar exercícios; gerar sugestão editável; executar sessão e descanso; manter Smart Cycle correto após faltas, treinos alternativos e conclusão duplicada; calendário e histórico; preservar dados após reabrir; exportar/importar backup; funcionar no iPhone.

## Fora do escopo inicial
Pagamentos, marketplace, rede social, wearables, prescrição clínica, gestão de academias e análise de vídeo ao vivo.
