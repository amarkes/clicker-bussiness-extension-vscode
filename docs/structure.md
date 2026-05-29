# Clicker Business — Estrutura do Projeto

## Visão Geral

A extensão VSCode hospeda o jogo em um **WebviewPanel**. O jogo é uma SPA React + Vite + Tailwind buildada de forma estática e injetada no webview.

```
clicker-business/
├── src/                         ← extensão VSCode (TypeScript)
│   └── extension.ts
├── webview/                     ← jogo React (JavaScript)
│   ├── public/
│   ├── src/
│   │   ├── app/
│   │   ├── features/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── out/                         ← extensão compilada (gerado)
├── docs/
├── package.json                 ← extensão
└── tsconfig.json
```

---

## Webview — Estrutura detalhada

### `app/` — Estado global

```
app/
├── store.js          ← instância do Zustand
├── selectors.js      ← funções derivadas do estado (receita/s, etc.)
└── constants.js      ← dados estáticos (tabelas de funcionários, projetos...)
```

O estado global fica em um único store Zustand com slices por domínio:

```js
// store.js
{
  core:      { money, totalEarned, clickValue, prestigePoints },
  employees: { hired: [], multiplier },
  offices:   { current, unlocked },
  projects:  { active: [], completed: [] },
  upgrades:  { purchased: [] },
  research:  { unlocked: [], inProgress },
  events:    { queue: [] },
  prestige:  { count, bonuses },
}
```

---

### `features/` — Lógica por domínio

Cada feature é auto-contida: slice do store + componentes + hooks próprios.

```
features/
├── core/
│   ├── useGameLoop.js        ← setInterval principal (tick/s)
│   ├── useAutoSave.js        ← salva no localStorage a cada 5s
│   └── coreSlice.js          ← actions: addMoney, click, reset
│
├── employees/
│   ├── employeesSlice.js     ← hire, fire, calcPassiveIncome
│   ├── employeesData.js      ← tabela estática de cargos
│   ├── EmployeeCard.jsx
│   └── EmployeeShop.jsx
│
├── offices/
│   ├── officesSlice.js       ← upgrade, getMultiplier
│   ├── officesData.js
│   ├── OfficeCard.jsx
│   └── OfficePanel.jsx
│
├── projects/
│   ├── projectsSlice.js      ← start, tick, complete
│   ├── projectsData.js
│   ├── ProjectCard.jsx
│   └── ProjectsPanel.jsx
│
├── upgrades/
│   ├── upgradesSlice.js      ← purchase, isUnlocked
│   ├── upgradesData.js       ← ferramentas + benefícios
│   ├── UpgradeCard.jsx
│   └── UpgradesShop.jsx
│
├── clients/
│   ├── clientsSlice.js       ← spawn, accept, complete
│   ├── clientsData.js
│   └── ClientOffer.jsx
│
├── events/
│   ├── eventsSlice.js        ← schedule, trigger, dismiss
│   ├── eventsData.js         ← lista de eventos +/-
│   └── EventToast.jsx
│
├── research/
│   ├── researchSlice.js      ← start, complete, applyBonus
│   ├── researchData.js       ← árvore de tech
│   ├── ResearchNode.jsx
│   └── ResearchTree.jsx
│
└── prestige/
    ├── prestigeSlice.js      ← sell, calcPoints, applyBonuses
    ├── PrestigeBonuses.jsx
    └── PrestigeModal.jsx
```

---

### `components/` — UI reutilizável (sem lógica de negócio)

```
components/
├── ui/
│   ├── Button.jsx            ← variantes: primary | secondary | danger
│   ├── Card.jsx              ← container padrão com borda e sombra
│   ├── Badge.jsx             ← tags de status/tier
│   ├── ProgressBar.jsx       ← barra de progresso animada
│   ├── Modal.jsx             ← overlay genérico
│   ├── Toast.jsx             ← notificação temporária
│   ├── Tooltip.jsx
│   └── Divider.jsx
│
├── layout/
│   ├── Sidebar.jsx           ← navegação entre painéis
│   ├── Header.jsx            ← HUD: dinheiro + receita/s
│   ├── MainPanel.jsx         ← área central (conteúdo ativo)
│   └── StatusBar.jsx         ← rodapé: escritório atual, funcionários
│
└── game/
    ├── WorkButton.jsx        ← botão principal "Trabalhar" com animação
    ├── MoneyDisplay.jsx      ← formata R$ com animação de contagem
    └── IncomeRate.jsx        ← exibe receita/s
```

---

### `hooks/` — Hooks compartilhados

```
hooks/
├── useFormat.js       ← formata moeda: R$ 1.234,56 / R$ 1,2M / R$ 3,4B
├── useSound.js        ← efeitos sonoros opcionais
└── useVSCode.js       ← bridge com a API do VSCode (postMessage)
```

---

### `lib/` — Utilitários puros

```
lib/
├── math.js            ← calcPassiveIncome, calcPrestigePoints
├── storage.js         ← serialize/deserialize estado para localStorage
└── random.js          ← gerador de eventos e clientes aleatórios
```

---

## Convenções

### Componentes
- Um componente por arquivo, nome em PascalCase
- Props tipadas com JSDoc quando não-óbvias
- Componentes de UI em `components/ui/` não importam o store — recebem tudo via props
- Componentes de feature podem importar o store diretamente via `useStore`

### Estado
- Lógica de negócio só dentro dos slices (`features/*/Slice.js`)
- Componentes chamam actions, nunca mutam o estado diretamente
- `selectors.js` centraliza todo valor derivado (evita recalcular nos componentes)

### Tailwind
- Sem CSS customizado exceto em `index.css` (reset + fonte + scrollbar)
- Variantes de tema via `tailwind.config.js` (cores da empresa por nível de prestígio)
- Classes condicionais com `clsx`

```js
// exemplo de uso
import clsx from 'clsx'

<button className={clsx(
  'px-4 py-2 rounded-lg font-semibold transition-all',
  disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95',
  variant === 'primary' && 'bg-blue-600 text-white',
  variant === 'danger'  && 'bg-red-600 text-white',
)} />
```

### Arquivos de dados
- Dados estáticos (tabelas de cargos, projetos, upgrades) ficam em `*Data.js`
- Nunca hardcodar valores nos componentes ou slices

---

## Tailwind Config

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f9ff',
          500: '#3b82f6',
          900: '#1e3a5f',
        },
      },
      animation: {
        'click-pop': 'pop 0.15s ease-out',
        'money-in':  'slideUp 0.3s ease-out',
      },
      keyframes: {
        pop:     { '0%': { transform: 'scale(1)' }, '50%': { transform: 'scale(0.93)' }, '100%': { transform: 'scale(1)' } },
        slideUp: { '0%': { opacity: 0, transform: 'translateY(8px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
}
```

---

## Layout da UI

```
┌─────────────────────────────────────────────────────┐
│  Header: [Nome da Empresa]   R$ 1.234.567   +R$42/s  │
├──────────┬──────────────────────────────────────────┤
│          │                                          │
│ Sidebar  │           MainPanel                      │
│          │                                          │
│ > Core   │   [WorkButton]    [Projetos Ativos]      │
│   Equipe │                                          │
│   Obras  │   [Loja de Func.] [Upgrades]             │
│   Proj.  │                                          │
│   Tech   │                                          │
│   Prest. │                                          │
│          │                                          │
├──────────┴──────────────────────────────────────────┤
│  StatusBar: Home Office · 3 funcionários · Prestígio 0│
└─────────────────────────────────────────────────────┘
```

---

## Scripts

```json
{
  "scripts": {
    "dev":          "cd webview && vite",
    "build:web":    "cd webview && vite build",
    "build:ext":    "tsc -p ./",
    "build":        "npm run build:web && npm run build:ext",
    "watch":        "tsc -watch -p ./",
    "package":      "npm run build && vsce package",
    "publish":      "npm run build && vsce publish"
  }
}
```
