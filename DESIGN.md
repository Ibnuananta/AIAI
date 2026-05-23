# DESIGN.md

## 1. Design Direction

Create an interface inspired by Reflect.app: calm, minimalist, premium, focused, and thoughtful.

The product should feel like a private thinking space rather than a loud productivity dashboard. The design should help users write, capture ideas, connect thoughts, and return to their notes without visual friction.

The UI should feel:

- Minimal
- Calm
- Premium
- Thoughtful
- Fast
- Private
- Human
- Knowledge-focused
- Softly futuristic

Avoid anything that feels noisy, overly colorful, gamified, corporate, or visually heavy.

---

## 2. Product Mood

The interface should feel like a quiet digital notebook for serious thinking.

It should support:

- Daily notes
- Journaling
- Quick capture
- Connected notes
- Backlinks
- Search
- AI-assisted writing
- Reading highlights
- Meeting notes
- Personal knowledge management

The overall feeling should be:

> “A clean second brain that gets out of the way.”

The design should support connected thinking by making relationships between ideas natural, lightweight, and discoverable.

---

## 3. Visual Keywords

Use these words to guide the design:

- Minimal notebook
- Calm workspace
- Soft paper
- Quiet productivity
- Connected thoughts
- Second brain
- Premium writing app
- Focus mode
- Gentle contrast
- Elegant simplicity
- Private knowledge base
- Lightweight intelligence

---

## 4. Color Palette

Use a warm neutral color system. The UI should feel softer than pure black-and-white.

### Light Theme

```css
:root {
  --color-bg: #FAF8F3;
  --color-surface: #FFFFFF;
  --color-surface-soft: #F3F0E8;
  --color-surface-muted: #ECE7DC;

  --color-text: #1E1C18;
  --color-text-muted: #6F6A60;
  --color-text-soft: #9B9488;

  --color-border: #E2DCCD;
  --color-border-soft: #EEE8DC;

  --color-primary: #7C5CFF;
  --color-primary-hover: #6848F5;
  --color-primary-soft: #EEE9FF;

  --color-link: #5B4FD8;
  --color-success: #3D8B5F;
  --color-warning: #B7791F;
  --color-danger: #C44D4D;
}
```

### Dark Theme

```css
[data-theme="dark"] {
  --color-bg: #171512;
  --color-surface: #211F1A;
  --color-surface-soft: #2A2721;
  --color-surface-muted: #343025;

  --color-text: #F5F1E8;
  --color-text-muted: #B8B0A1;
  --color-text-soft: #8C8375;

  --color-border: #3B352B;
  --color-border-soft: #2E2A23;

  --color-primary: #A997FF;
  --color-primary-hover: #B9AAFF;
  --color-primary-soft: rgba(169, 151, 255, 0.14);

  --color-link: #B9AAFF;
  --color-success: #7AC99A;
  --color-warning: #E3B75F;
  --color-danger: #E07777;
}
```

### Color Rules

- Use warm off-white instead of pure white.
- Use charcoal brown instead of pure black.
- Use purple as the main accent, but sparingly.
- Keep most of the interface neutral.
- Links, backlinks, active states, and AI-related elements may use purple.
- Do not use loud gradients.
- Do not use saturated blue, red, or green unless needed for system feedback.

---

## 5. Typography

Typography is the most important part of the interface.

The product should feel writing-first. Text should be beautiful, readable, and calm.

### Font Stack

Use a refined sans-serif for the main UI:

```css
font-family:
  Inter,
  ui-sans-serif,
  system-ui,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

For long-form writing, notes, and reading areas, use a softer text stack:

```css
font-family:
  ui-serif,
  Georgia,
  Cambria,
  "Times New Roman",
  serif;
```

For code, metadata, shortcuts, and technical labels:

```css
font-family:
  "SFMono-Regular",
  Consolas,
  "Liberation Mono",
  Menlo,
  monospace;
```

### Type Scale

| Role | Size | Weight | Line Height | Usage |
|---|---:|---:|---:|---|
| Display | 56px | 600 | 1.05 | Landing hero |
| H1 | 40px | 600 | 1.15 | Page titles |
| H2 | 30px | 600 | 1.25 | Section titles |
| H3 | 22px | 600 | 1.35 | Card titles |
| Body | 16px | 400 | 1.7 | Main UI text |
| Note body | 17px | 400 | 1.75 | Writing area |
| Small | 14px | 400 | 1.5 | Secondary text |
| Caption | 12px | 500 | 1.4 | Labels and metadata |

### Typography Rules

- Use generous line height.
- Avoid dense text blocks.
- Headings should feel elegant, not aggressive.
- Body text should be easy to read for long periods.
- Use muted text for metadata and timestamps.
- Use serif text only where it improves writing or reading comfort.
- Avoid all-caps headings except for very small labels.

---

## 6. Layout Principles

The layout should create a feeling of focus.

### Main Layout

Use a centered content area with generous breathing room.

```css
.app-shell {
  max-width: 1120px;
  margin: 0 auto;
  padding: 32px 24px;
}
```

### Note Editor Width

Writing areas should not be too wide.

```css
.note-editor {
  max-width: 720px;
  margin: 0 auto;
}
```

### Landing Page Width

```css
.hero {
  max-width: 860px;
  margin: 0 auto;
  text-align: center;
}
```

### Spacing Scale

Use a soft 8px spacing system.

| Token | Value |
|---|---:|
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `24px` |
| `--space-6` | `32px` |
| `--space-7` | `48px` |
| `--space-8` | `64px` |
| `--space-9` | `96px` |
| `--space-10` | `128px` |

### Layout Rules

- Prefer simple one-column layouts for writing.
- Use sidebars only when needed.
- Do not overload the interface with panels.
- Keep primary writing content centered.
- Let whitespace do most of the visual work.

---

## 7. Components

## Buttons

Buttons should be soft, rounded, and understated.

### Primary Button

```css
.button-primary {
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: 999px;
  padding: 11px 18px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 8px 24px rgba(124, 92, 255, 0.22);
}
```

Hover:

```css
.button-primary:hover {
  background: var(--color-primary-hover);
  transform: translateY(-1px);
}
```

### Secondary Button

```css
.button-secondary {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 999px;
  padding: 11px 18px;
  font-size: 14px;
  font-weight: 500;
}
```

Hover:

```css
.button-secondary:hover {
  background: var(--color-surface-soft);
}
```

### Ghost Button

```css
.button-ghost {
  background: transparent;
  color: var(--color-text-muted);
  border-radius: 999px;
  padding: 9px 14px;
}
```

Hover:

```css
.button-ghost:hover {
  color: var(--color-text);
  background: var(--color-surface-soft);
}
```

---

## Cards

Cards should feel like soft pieces of paper.

```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border-soft);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 16px 40px rgba(30, 28, 24, 0.06);
}
```

### Card Rules

- Use subtle borders.
- Use very soft shadows.
- Avoid heavy glassmorphism.
- Avoid neon glows.
- Cards should feel calm and readable.
- Cards should not compete with the writing area.

---

## Inputs

Inputs should feel like natural writing surfaces.

```css
.input {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: 14px;
  padding: 12px 14px;
  font-size: 15px;
}
```

Focus:

```css
.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 4px var(--color-primary-soft);
}
```

Placeholder:

```css
.input::placeholder {
  color: var(--color-text-soft);
}
```

---

## Note Editor

The note editor is the heart of the product.

```css
.note-editor {
  background: transparent;
  color: var(--color-text);
  font-size: 17px;
  line-height: 1.75;
  border: none;
  outline: none;
}
```

### Note Editor Rules

- No heavy borders around the writing area.
- Keep the writing surface clean.
- Use subtle placeholder text.
- Markdown should feel natural.
- Backlinks should be visible but not distracting.
- Slash commands or AI commands should appear in soft floating menus.

### Backlinks

Backlinks should feel like connected thoughts.

```css
.backlink {
  color: var(--color-link);
  background: var(--color-primary-soft);
  border-radius: 6px;
  padding: 1px 4px;
  text-decoration: none;
}
```

Hover:

```css
.backlink:hover {
  text-decoration: underline;
}
```

---

## Sidebar

The sidebar should be quiet and useful.

```css
.sidebar {
  background: var(--color-surface-soft);
  border-right: 1px solid var(--color-border-soft);
  width: 280px;
  padding: 20px 16px;
}
```

### Sidebar Rules

- Keep labels short.
- Use muted colors.
- Active items should use soft purple backgrounds.
- Avoid complex nested navigation.
- Search should be easy to access.
- Daily notes should be visually prominent.

### Sidebar Item

```css
.sidebar-item {
  color: var(--color-text-muted);
  border-radius: 10px;
  padding: 8px 10px;
  font-size: 14px;
}
```

Active:

```css
.sidebar-item[data-active="true"] {
  color: var(--color-text);
  background: var(--color-primary-soft);
}
```

---

## Search / Command Menu

Search and command menus should feel fast and intelligent.

```css
.command-menu {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  box-shadow: 0 24px 80px rgba(30, 28, 24, 0.16);
  padding: 10px;
  max-width: 620px;
}
```

### Command Menu Rules

- Open centered or slightly above center.
- Use keyboard-first interactions.
- Show recent notes first.
- Show AI actions only when relevant.
- Use subtle dividers.
- Do not use loud modal overlays.

---

## AI Elements

AI should feel integrated, not flashy.

Use AI for:

- Summarizing notes
- Rewriting text
- Extracting action items
- Asking questions about notes
- Finding hidden connections
- Creating structured notes

### AI Badge

```css
.ai-badge {
  background: var(--color-primary-soft);
  color: var(--color-primary);
  border-radius: 999px;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: 600;
}
```

### AI Panel

```css
.ai-panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border-soft);
  border-radius: 20px;
  padding: 18px;
}
```

### AI Rules

- Do not make AI visually overwhelming.
- Avoid robot icons everywhere.
- Use calm copy like “Ask your notes” or “Summarize this.”
- AI suggestions should be dismissible.
- AI output should look like normal writing, not a separate gimmick.

---

## Graph / Connected Notes View

A graph view may be used, but it should remain elegant.

### Graph Style

```css
.graph-view {
  background: var(--color-bg);
  border: 1px solid var(--color-border-soft);
  border-radius: 24px;
}
```

### Node Style

```css
.graph-node {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
}
```

### Edge Style

```css
.graph-edge {
  stroke: var(--color-border);
  opacity: 0.6;
}
```

### Graph Rules

- Keep nodes soft and minimal.
- Avoid complex rainbow graphs.
- Highlight selected connections with purple.
- Do not make the graph the main interface unless the user chooses it.
- The graph should support thinking, not become decoration.

---

## 8. Navigation

Navigation should be minimal and calm.

### Top Navigation

```css
.navbar {
  height: 72px;
  background: rgba(250, 248, 243, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--color-border-soft);
}
```

### Navigation Rules

- Logo on the left.
- Main links should be few.
- Primary CTA on the right.
- Avoid dropdown-heavy navigation.
- Use simple text links.
- Keep nav height spacious.

---

## 9. Motion

Motion should be soft and nearly invisible.

### Transition Token

```css
:root {
  --transition-fast: 120ms ease;
  --transition-base: 180ms ease;
  --transition-slow: 260ms ease;
}
```

### Motion Rules

- Use small hover lifts.
- Use soft fades.
- Use subtle scale for menus.
- Avoid bouncing animations.
- Avoid spinning decorative elements unless specifically needed.
- Motion should make the app feel faster, not more playful.

Example:

```css
.interactive {
  transition:
    background var(--transition-base),
    border-color var(--transition-base),
    transform var(--transition-base),
    box-shadow var(--transition-base);
}
```

---

## 10. Responsive Behavior

### Breakpoints

| Breakpoint | Width | Behavior |
|---|---:|---|
| Mobile | `< 640px` | Single-column layout |
| Tablet | `640px - 1024px` | Compact two-column layout |
| Desktop | `> 1024px` | Full layout with optional sidebar |

### Mobile Rules

- Prioritize writing and reading.
- Hide or collapse the sidebar.
- Use bottom navigation only if necessary.
- Keep the note editor full width.
- Reduce hero headline size to `36px`.
- Buttons may stack vertically.
- Avoid dense card grids.

### Tablet Rules

- Sidebar may collapse into drawer.
- Use two-column grids carefully.
- Keep editor width comfortable.

### Desktop Rules

- Allow persistent sidebar.
- Keep editor centered.
- Avoid stretching note content too wide.
- Use optional right sidebar for backlinks or metadata.

---

## 11. Accessibility

The interface must be accessible and comfortable for long writing sessions.

### Rules

- Maintain strong text contrast.
- Minimum body text size: `16px`.
- Minimum tap target: `44px`.
- Support keyboard navigation.
- Visible focus states are required.
- Do not rely only on color to communicate status.
- Support reduced motion preferences.
- Dark mode and light mode should both be readable.

Reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

---

## 12. Do’s and Don’ts

## Do

- Make the interface feel calm and intelligent.
- Use warm neutral colors.
- Prioritize writing and reading.
- Keep note content centered.
- Use subtle borders and shadows.
- Make backlinks easy to notice.
- Make search feel fast.
- Make AI feel useful and integrated.
- Use generous whitespace.
- Keep the product visually quiet.

## Don’t

- Do not use harsh black-and-white contrast.
- Do not use loud neon effects.
- Do not overcrowd the interface.
- Do not make the sidebar too dominant.
- Do not make AI feel like a separate product.
- Do not use too many colors.
- Do not use heavy gradients.
- Do not make cards look like SaaS marketing blocks inside the actual app.
- Do not over-style the writing area.
- Do not sacrifice readability for visual flair.

---

## 13. Landing Page Style

The landing page should feel premium, simple, and thoughtful.

### Hero Section

The hero should include:

- Short headline
- Calm subheadline
- One primary CTA
- One secondary CTA
- Optional product preview
- Soft background visual

Example tone:

> Think better with connected notes.

### Landing Page Rules

- Use centered hero content.
- Use warm neutral background.
- Use large elegant typography.
- Product screenshots should have rounded corners.
- Avoid cluttered feature sections.
- Use testimonials sparingly.
- Keep pricing simple.

---

## 14. App Interface Style

The app interface should feel faster and quieter than the landing page.

### App Structure

```txt
┌─────────────────────────────────────┐
│ Top bar / search / command access   │
├──────────────┬──────────────────────┤
│ Sidebar      │ Note editor           │
│ Daily notes  │ Writing area          │
│ Search       │ Backlinks             │
│ Tags         │ AI actions            │
└──────────────┴──────────────────────┘
```

### App Rules

- Writing is always the main focus.
- Search should be one keyboard shortcut away.
- Daily notes should be quick to open.
- Backlinks should appear naturally.
- AI tools should be contextual.
- The app should feel fast even before it is actually fast.

---

## 15. Example CSS Tokens

```css
:root {
  --color-bg: #FAF8F3;
  --color-surface: #FFFFFF;
  --color-surface-soft: #F3F0E8;
  --color-surface-muted: #ECE7DC;

  --color-text: #1E1C18;
  --color-text-muted: #6F6A60;
  --color-text-soft: #9B9488;

  --color-border: #E2DCCD;
  --color-border-soft: #EEE8DC;

  --color-primary: #7C5CFF;
  --color-primary-hover: #6848F5;
  --color-primary-soft: #EEE9FF;

  --color-link: #5B4FD8;

  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-pill: 999px;

  --shadow-sm: 0 8px 24px rgba(30, 28, 24, 0.05);
  --shadow-md: 0 16px 40px rgba(30, 28, 24, 0.08);
  --shadow-lg: 0 24px 80px rgba(30, 28, 24, 0.14);

  --transition-fast: 120ms ease;
  --transition-base: 180ms ease;
  --transition-slow: 260ms ease;
}
```

---

## 16. AI Coding Agent Prompt

Use this prompt when asking an AI coding agent to build the UI:

```txt
Use DESIGN.md as the visual design system.

Build the interface in a calm, minimalist style inspired by Reflect.app. The product should feel like a premium note-taking and second-brain app. Use warm neutral colors, elegant typography, soft borders, rounded cards, subtle shadows, and generous whitespace.

The writing and reading experience should be the main focus. Avoid visual clutter, loud colors, excessive gradients, and heavy dashboard styling. AI features should feel integrated and quiet, not flashy.
```

---

## 17. Final Summary

This design system should produce interfaces that are:

- Minimal
- Calm
- Premium
- Writing-first
- Thoughtful
- Warm and neutral
- Softly rounded
- Easy to read
- Focused on connected notes
- Suitable for a second-brain, journaling, AI notes, or personal knowledge app
