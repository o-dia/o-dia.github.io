# AGENTS.md

## Project purpose

This repository powers Omar Dia's personal website at `https://o-dia.github.io/`.
It is a design-forward static site for writing, project notes, contact links, and
future newsletter updates.

## Working agreements

- Ask for confirmation before adding new production dependencies.
- Prefer focused changes that preserve the editorial systems design direction.
- Do not run destructive commands such as `rm`, migrations, or history rewrites
  without explicit confirmation.
- After JavaScript or TypeScript changes, run `npm test`.
- Before shipping frontend changes, also run `npm run build`.

## Stack

- Vite
- React
- TypeScript
- React Router
- Tailwind CSS
- MDX for writing
- React Three Fiber, Drei, and Three.js for the background visual system
- Framer Motion for restrained route and component transitions

## Design principles

- The site should feel editorial, systems-oriented, warm, and technical.
- Keep the WebGL background atmospheric and restrained; content readability wins.
- Use warm dark surfaces, thin borders, refined spacing, and clear hierarchy.
- Avoid generic portfolio tropes, neon cyberpunk styling, and ornamental clutter.
- Respect `prefers-reduced-motion` and keep the site usable without shader motion.

## Content workflow

- Add writing as MDX files in `src/content/writing`.
- Each writing file must export `metadata` with `title`, `description`, `date`,
  `theme`, `draft`, and `slug`.
- Draft writing should use `draft: true`; production lists hide drafts.
- Project cards live in `src/content/projects/projects.ts`.
- Shared links, email, and newsletter settings live in `src/data/site.ts`.

## Deployment

- This is a GitHub Pages user site, so Vite `base` must remain `/`.
- The GitHub Actions workflow builds the app and deploys `dist`.
- The build copies `dist/index.html` to `dist/404.html` so direct route refreshes
  work on GitHub Pages.
