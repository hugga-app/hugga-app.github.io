# Hugga Website

React + Vite website implementation for Hugga, deployed to GitHub Pages.

## Purpose

This repository contains the production website implementation for Hugga.

- `hugga-website-copy.md` is the internal source of truth for messaging and page structure.
- The React app implements that content as rendered webpage sections (not as a public markdown document).
- The Markdown file is not linked in the UI.

## What's implemented from the copy file

The React site currently includes:

- Home hero and trust bar
- One-paragraph pitch and 30-second script section
- Full “How It Works” structure
- Dedicated Host and Provider sections
- “Reputation & Trust” section
- “Why not generic delivery platforms?” objection handling
- Hero options section
- Taglines section
- FAQ section
- Legal clarity section
- Final CTA/contact section

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
- Keep content updates in sync between `hugga-website-copy.md` and React-rendered sections in `src/main.jsx`.
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

