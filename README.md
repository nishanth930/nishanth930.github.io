# Nishanth Parthiban — portfolio (React)

React 19 + TypeScript, built with Vite 8 on Node 26 LTS. The output is a static site for GitHub Pages.

## Edit content
Everything shown on the page lives in [`src/content.ts`](src/content.ts): profile, experience, projects, skills, certifications and education.
Text fields typed `Rich` accept `**bold**` and `[label](https://url)`.

Images and the résumé PDF are in `public/assets/`. Keep the filenames, or update `profile.resume` in `content.ts`.

## Run
```bash
npm install
npm run dev       # http://localhost:5173
npm run lint      # oxlint
npm run build     # type-check + build into dist/
npm run preview   # serve dist/ locally
```

## Structure
- `src/components/` — one component per page section; `Section` adds the heading and scroll-reveal
- `src/hooks/` — `useTheme` (light/dark toggle, remembered per visitor), `useActiveSection` (nav highlight), `useReveal`
- `src/styles/global.css` — design tokens (light + dark) and all styles

## Deploy
Push to `main`: `.github/workflows/deploy.yml` lints, builds and publishes `dist/` to GitHub Pages (Pages source: **GitHub Actions**). Live at https://nishanth930.github.io.
