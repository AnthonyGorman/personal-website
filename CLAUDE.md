# CLAUDE.md — Personal Site

## Project overview
Minimal personal website built with **Vite + React + TypeScript**.  
Single-page layout: sticky sidebar on the left, scrollable content on the right.  
Four sections: About, Blog, Research, Projects.

## Stack
- **Vite** (dev server + bundler)
- **React 18** with TypeScript (`strict: true`)
- **No CSS framework** — one plain CSS file is the single source of truth for all styles
- **IBM Plex Mono** (headings/mono labels) + **IBM Plex Sans** (body text) via Google Fonts

## File structure
```
personal-site/
├── index.html                  # HTML entry — loads fonts, mounts #root
├── vite.config.ts
├── tsconfig.json
├── package.json
└── src/
    ├── main.tsx                # React entry point
    ├── App.tsx                 # Root component: theme state, scroll-spy, layout
    ├── styles.css              # ← SINGLE SOURCE OF TRUTH for all styles
    └── components/
        ├── Sidebar.tsx         # Photo, name, nav links, theme switcher
        └── Sections.tsx        # About, Blog, Research, Projects sections
```

## Styling rules — IMPORTANT
- **`src/styles.css` is the only stylesheet.** Do not create additional CSS files or use inline styles.
- All CSS custom properties (variables) are declared at the top of `styles.css`.
- Theme colors are controlled via the `data-theme` attribute on `<html>` (set in `App.tsx`).
- Class naming convention: BEM-lite (`.sidebar`, `.sidebar__name`, `.card`, `.card__title`, etc.)

## Color themes
Themes are applied by setting `data-theme` on `<html>`:

| Theme     | `data-theme` value | `--accent` color |
|-----------|--------------------|------------------|
| Default   | `""` (empty)       | `#ffffff`        |
| Green     | `"green"`          | `#39ff14`        |
| Orange    | `"orange"`         | `#ff6b1a`        |
| Pink      | `"pink"`           | `#ff2d78`        |

Only `--accent`, `--accent-dim`, and `--accent-subtle` change between themes.  
Background is always `#000`. Text is always `#fff` (with opacity variants for secondary text).

## How to add content
All placeholder content lives in `src/components/Sections.tsx`.  
Edit the `POSTS`, `PAPERS`, and `PROJECTS` arrays at the top of that file.

## How to add your photo
1. Drop your image into `public/` (e.g. `public/photo.jpg`)
2. In `Sidebar.tsx`, replace the `<div className="sidebar__photo-placeholder">` with:
   ```tsx
   <img src="/photo.jpg" alt="Your Name" className="sidebar__photo" />
   ```

## Nav + scroll-spy
- Nav links are `#anchor` hrefs that smooth-scroll to section IDs.
- `IntersectionObserver` in `App.tsx` tracks which section is in view and passes `activeSection` to `Sidebar`, which applies the `active` class to the matching nav link.

## Running locally
```bash
npm install
npm run dev
```

## Building
```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Conventions
- Keep components small and focused. `Sections.tsx` can be split into individual files if it grows large.
- Do not add a CSS framework (Tailwind, etc.) without updating this file.
- Do not add a router unless the site genuinely needs multiple pages.
- TypeScript strict mode is on — no `any`, no `ts-ignore`.
