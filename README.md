# Nurhak Bakıcı — Portfolio

Personal portfolio website built with React, TypeScript, and Vite. Deployed automatically to GitHub Pages.

**Live site:** https://nurhakbakici.github.io

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

The site is published at **https://nurhakbakici.github.io** via the `gh-pages` branch.

To redeploy after changes:

```bash
npm run deploy
```

This builds the site and pushes the `dist` folder to the `gh-pages` branch.

> **Note:** A GitHub Actions workflow (`.github/workflows/deploy.yml`) is included for automatic deployment on push to `main`, but requires the `workflow` OAuth scope to push. You can enable it later via `gh auth refresh -s workflow`.
