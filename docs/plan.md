# Clicker Business — Plano Faseado

## Estrutura final do projeto

```
clicker-business/
├── src/
│   └── extension.ts          ← abre o WebviewPanel
├── webview/                  ← app React + Vite (o jogo)
│   ├── src/
│   │   ├── features/
│   │   │   ├── core/         ← dinheiro, clique, estado global
│   │   │   ├── employees/
│   │   │   ├── offices/
│   │   │   ├── projects/
│   │   │   ├── upgrades/
│   │   │   ├── events/
│   │   │   ├── research/
│   │   │   └── prestige/
│   │   ├── components/
│   │   └── App.jsx
│   └── vite.config.js
└── package.json
```

---

## Fase 1 — Estrutura & WebviewPanel
**Objetivo:** extensão abre o jogo dentro do VSCode via `Cmd+Shift+P`

- [ ] Configurar monorepo: extensão (`src/`) + app React (`webview/`)
- [ ] `extension.ts` registra comando que abre `WebviewPanel`
- [ ] Vite buildado com assets inline (sem server externo)
- [ ] Hot reload em dev: `vite dev` + extensão observa mudanças
- [ ] CI local: `npm run build` compila tudo junto

---

## Fase 2 — Core Loop (clique + dinheiro)
**Objetivo:** loop básico jogável

- [ ] Estado global com `useReducer` ou Zustand
- [ ] Botão "Trabalhar" → `+R$ 1` por clique
- [ ] Painel de HUD: dinheiro atual + receita/s
- [ ] Auto-save no `localStorage` a cada 5s
- [ ] Animação de clique (feedback visual)

---

## Fase 3 — Funcionários & Renda Passiva
**Objetivo:** primeira fonte de idle

- [ ] Tabela de funcionários (Estagiário → Tech Lead)
- [ ] Contratar: debita custo, adiciona ao roster
- [ ] Game loop via `setInterval`: soma produtividade/s
- [ ] Painel "Equipe": lista de contratados + total/s
- [ ] Salário descontado periodicamente

---

## Fase 4 — Projetos
**Objetivo:** segunda fonte de receita, requer gestão

- [ ] Catálogo de projetos (Landing Page → SaaS)
- [ ] Requisito mínimo de funcionários por projeto
- [ ] Progresso de execução com barra de tempo
- [ ] Conclusão → deposita valor no saldo

---

## Fase 5 — Escritórios
**Objetivo:** progression gate que desbloqueia conteúdo

- [ ] 6 níveis de escritório (Home Office → Sede)
- [ ] Cada upgrade: multiplicador de produtividade + unlock de funcionários/projetos
- [ ] UI de expansão com custo e benefícios visíveis

---

## Fase 6 — Upgrades (Ferramentas & Benefícios)
**Objetivo:** otimização e customização

- [ ] Upgrades de ferramentas (Notebook → IA para Dev)
- [ ] Benefícios para funcionários (plano de saúde, bônus)
- [ ] Loja de upgrades com condições de desbloqueio por saldo

---

## Fase 7 — Clientes & Eventos Aleatórios
**Objetivo:** variância e imprevisibilidade

- [ ] Clientes aleatórios com contratos especiais
- [ ] Sistema de eventos temporizados (positivos/negativos)
- [ ] Modal/toast de notificação de evento
- [ ] Consequências: boost de receita ou penalidade

---

## Fase 8 — Pesquisa & Tecnologia
**Objetivo:** progressão de longo prazo

- [ ] Árvore de tech (Automação → Robótica)
- [ ] Pesquisas com custo e tempo de conclusão
- [ ] Cada tech aplica bônus permanente

---

## Fase 9 — Prestígio
**Objetivo:** replayability

- [ ] Gatilho ao atingir R$ 1 bilhão
- [ ] "Vender a Empresa": reinicia estado, mantém Pontos de Prestígio
- [ ] Bônus permanentes por rodada de prestígio

---

## Fase 10 — Polish & Publicação
**Objetivo:** marketplace

- [ ] Responsivo desktop + mobile (dentro do webview)
- [ ] Ícone da extensão + banner do marketplace
- [ ] `README.md` com screenshots
- [ ] `publisher` configurado no `package.json`
- [ ] `vsce package` → `.vsix`
- [ ] `vsce publish` → Visual Studio Marketplace
