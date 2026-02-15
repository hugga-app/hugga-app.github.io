# Hugga Website

React + Vite website implementation for Hugga, deployed to GitHub Pages.

## Content source

- `hugga-website-copy.md` is the internal source document used as writing context.
- The app renders website pages/sections from that content direction in React and does not link to or expose the Markdown file in the UI.

## Project structure

- `index.html` — app shell for Vite/React.
- `src/main.jsx` — website page structure and copy implementation.
- `src/styles.css` — visual system (layout, typography, colors, components).
- `.github/workflows/ci.yml` — CI validation and build checks (also manual trigger).
- `.github/workflows/deploy-pages.yml` — build and deploy workflow for GitHub Pages (`main` + manual trigger).

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Deployment

GitHub Pages deployment runs from `.github/workflows/deploy-pages.yml` on pushes to `main` or manual dispatch.
