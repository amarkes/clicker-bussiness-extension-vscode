---
name: Executive Pulse
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#d0bcff'
  on-tertiary: '#3c0091'
  tertiary-container: '#a078ff'
  on-tertiary-container: '#340080'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-currency:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-currency-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The brand identity bridges the gap between high-stakes corporate management and addictive incremental gameplay. It targets a demographic that appreciates the "optimization" aspect of tycoon games, delivering a sense of power, precision, and exponential growth through a professional SaaS-inspired lens.

The design style is **Corporate / Modern** with a **Glassmorphic** twist. It utilizes a high-density information display characteristic of financial dashboards, refined with subtle translucency and vibrant accents to maintain game-like engagement. The aesthetic should feel like a premium Bloomberg terminal met with a futuristic mission control center: dark, focused, and data-rich.

## Colors

The palette is anchored in a deep, "Midnight" dark mode to allow functional colors to vibrate. 

- **Primary (Vibrant Blue):** Reserved for core interaction points—buying businesses, upgrading managers, and primary navigation.
- **Success (Emerald Green):** Exclusively for "Money In" events, profit margins, and positive growth indicators.
- **Tertiary (Violet):** Used for Research & Development, prestige mechanics, and high-tier technological milestones.
- **Accent (Cyan):** Used for energy, speed boosts, and real-time data visualizations (charts/graphs).
- **Backgrounds:** A tiered system of `Slate-950` (#020617) for the base, `Slate-900` (#0F172A) for surface containers, and `Slate-800` (#1E293B) for elevated interactive elements.

## Typography

Typography focuses on "Financial Hierarchy." Large currency values use **Inter** with tight tracking and heavy weights for impact. To enhance the "tech/SaaS" feel, **JetBrains Mono** is introduced for secondary labels, timers, and raw data points (like "Profit per Second"), providing a precise, calculated feel.

Use `label-caps` for section headers and `label-mono` for fluctuating numbers to prevent layout shift during value updates (tabular figures).

## Layout & Spacing

The system follows a strict 4px baseline grid to ensure a tight, "engineered" look.

- **Desktop:** 12-column fluid grid. Content is organized into a side-navigation layout (Management Tabs) with a main dashboard area for active business units.
- **Mobile:** Single-column vertical stack with a bottom-docked navigation bar for "Store," "Upgrades," and "Prestige."
- **Spacing Rhythm:** Use `md` (16px) for most container padding to maintain a high information density without feeling cluttered. `sm` (8px) is used to group related metrics (e.g., an icon and its label).

## Elevation & Depth

This design system uses **Tonal Layering** combined with **Glassmorphism** to create a multi-dimensional workspace.

1.  **Level 0 (Base):** Deepest black/slate background.
2.  **Level 1 (Cards):** Slate-900 with a subtle 1px inner border (white at 5% opacity) to define edges against the dark background.
3.  **Level 2 (Active Elements):** Use a backdrop blur (12px) and 40% opacity on the primary color for active modals or flyouts, giving the impression of "floating" data layers.
4.  **Shadows:** Shadows are rarely used for depth; instead, "Outer Glows" in the primary color (low opacity) indicate active business units or "boosted" states.

## Shapes

The shape language is "Modern Professional." We use a standard **0.5rem (8px)** corner radius for cards and buttons. This creates a balance—friendly enough for a game, but sharp enough to look like a high-end productivity tool.

Progress bars and sliders should use the **Pill (rounded-full)** shape to distinguish them from structural containers.

## Components

- **Buttons:**
    - *Primary:* Solid Blue (#3B82F6) with white text. On hover, a slight brightness increase and a subtle outer glow.
    - *Buy/Action:* Dual-layered. Left side shows the action (e.g., "Level Up"), right side shows the cost in a mono-font.
- **Cards (Business Units):** A horizontal layout containing an icon on the left, name/level in the center, and a thin "Progress Bar" at the bottom. The bar should glow when it reaches 100% (ready to collect).
- **Progress Bars:** Ultra-thin (4px or 6px height). Use the Success Green for standard profit cycles and the Accent Cyan for "Boost" durations.
- **Input Fields:** Used primarily for "Investment Amounts." Dark background, 1px border that illuminates in Blue when focused.
- **Chips/Badges:** Small, high-contrast labels (e.g., "MAX", "X2", "NEW") using `label-caps`. 
- **Icons:** Linear 2px stroke (Lucide style). Icons should be monochromatic (Slate-400) until activated or upgraded, where they take on the Primary or Tertiary color.
- **Data Visualizations:** Small sparklines (line charts) should appear inside business cards to show profit trends over the last 60 seconds.