# Hugga Website

React + Vite project for publishing Hugga website content to GitHub Pages.

## Contents

- `hugga-website-copy.md` — complete site structure and conversion copy.
- `src/main.jsx` — React entry component for the landing page.
- `src/styles.css` — landing page styles.
- `.github/workflows/ci.yml` — CI checks and build validation.
- `.github/workflows/deploy-pages.yml` — build and deploy to GitHub Pages from `main`.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages deployment

Deployment runs automatically on pushes to `main` via `.github/workflows/deploy-pages.yml`.

