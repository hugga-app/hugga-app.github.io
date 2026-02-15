# Hugga Website

React + Vite website implementation for Hugga, deployed to GitHub Pages.

## Purpose

This repository contains the production website implementation for Hugga.

- `hugga-website-copy.md` is an internal content reference document.
- The live site is rendered from React components in `src/main.jsx`.
- The Markdown file is **not** linked or exposed in the website UI.

## Tech stack

- React 18
- Vite 5
- GitHub Actions (CI + GitHub Pages deploy)

## Project structure

- `index.html` — Vite app shell.
- `src/main.jsx` — page sections and website copy implementation.
- `src/styles.css` — layout and visual styling.
- `hugga-website-copy.md` — internal content/copy source.
- `.github/workflows/ci.yml` — build validation workflow (PR, push to `main`, manual trigger).
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment workflow (push to `main`, manual trigger).

## Scripts

```bash
npm install
npm run dev      # local development
npm run build    # production build -> dist/
npm run preview  # preview production build
```

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start local server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown by Vite.

## Build and deploy

### CI (`.github/workflows/ci.yml`)

Runs on:
- Pull requests
- Pushes to `main`
- Manual run via **workflow_dispatch**

Checks performed:
- Installs dependencies
- Builds the React app
- Verifies required files/artifacts exist
- Lints workflow files with `actionlint`

### Pages deployment (`.github/workflows/deploy-pages.yml`)

Runs on:
- Pushes to `main`
- Manual run via **workflow_dispatch**

Flow:
1. Build app with Vite
2. Upload `dist/` as Pages artifact
3. Deploy artifact to GitHub Pages environment

## Notes

- If dependency installation fails in restricted environments, run CI in GitHub-hosted runners where registry access is available.
- Keep content updates in sync between `hugga-website-copy.md` and the React-rendered sections.
