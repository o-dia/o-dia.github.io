# o-dia.github.io

Personal website for Omar Dia: a place for writing, projects, contact links, and
future newsletter updates.

The site is built as a static Vite + React + TypeScript app and deployed to
GitHub Pages at `https://o-dia.github.io/`.

## Stack

- Vite
- React
- TypeScript
- React Router
- Tailwind CSS
- MDX for writing
- React Three Fiber, Drei, and Three.js for the WebGL background
- Framer Motion for restrained transitions

## Local development

Install dependencies once:

```bash
npm install
```

Start the local development server:

```bash
npm run dev -- --host 127.0.0.1
```

Then open the local URL printed by Vite, usually:

```text
http://127.0.0.1:5173/
```

This is the safest way to review changes before pushing anything to GitHub.

To preview the production build locally:

```bash
npm run build
npm run preview -- --host 127.0.0.1
```

Then open the preview URL printed by Vite.

## Project map

```text
src/components/       Reusable UI components
src/pages/            Route-level pages
src/content/writing/  MDX essays and notes
src/content/projects/ Project card data
src/data/site.ts      Global site settings and links
public/images/        Static images such as portrait.jpg
legacy/               Original preserved static site
```

Start with these files for common edits:

- `src/data/site.ts`: name, email, social links, newsletter settings, navigation.
- `src/pages/Home.tsx`: homepage headline, intro copy, and homepage sections.
- `src/pages/About.tsx`: bio, interests, operating style, and portrait.
- `src/content/writing/*.mdx`: essays and notes.
- `src/content/projects/projects.ts`: project cards.

## Useful scripts

```bash
npm run dev
npm test
npm run typecheck
npm run build
npm run preview
```

`npm test` currently runs TypeScript type checking. `npm run build` type-checks,
builds the Vite app, and copies `dist/index.html` to `dist/404.html` for GitHub
Pages route fallback support.

## Content workflow

Writing lives in `src/content/writing` as MDX files. Each file exports metadata:

```mdx
export const metadata = {
  title: "Essay title",
  description: "Short summary for listing pages.",
  date: "2026-05-16",
  theme: "Systems",
  draft: false,
  slug: "essay-title",
};
```

Then write the essay body below the metadata export. Drafts should use
`draft: true`; production-facing lists hide drafts.

Projects currently live as structured cards in `src/content/projects/projects.ts`.
They can be migrated to MDX case studies later if they need fuller pages.

Shared site settings live in `src/data/site.ts`, including navigation, social
links, email, and newsletter configuration.

## Publishing workflow

Local changes do not affect the public website until they are committed and
pushed to GitHub.

Typical publish flow:

```bash
npm test
npm run build
git status
git add .
git commit -m "Update personal site"
git push origin main
```

After a push to `main`, the GitHub Actions workflow should build and deploy the
site to GitHub Pages. If the live site does not update, check:

1. The Actions tab for a failed deploy workflow.
2. Repository settings under **Settings -> Pages**.
3. That Pages is configured to deploy from **GitHub Actions**.

The live site is:

```text
https://o-dia.github.io/
```

If that URL shows GitHub's default 404 page, GitHub Pages is either not enabled,
not configured for this repository, or the deploy workflow has not successfully
published yet.

## Privacy and indexing

This is a static GitHub Pages site. If the repository is public and GitHub Pages
is enabled, the website is publicly accessible.

Ways to keep work private before launch:

- Keep changes local and do not push yet.
- Push to a separate branch and do not merge to `main`.
- Disable GitHub Pages in repository settings until ready.
- Make the repository private if your GitHub plan supports private Pages.

To discourage search indexing before launch, add this to `index.html`:

```html
<meta name="robots" content="noindex, nofollow" />
```

This is only a request to search engines. It does not make the site private.

## Newsletter setup

The subscription component is static-site friendly and defaults to a Buttondown
style embed form. Update `site.newsletter.action` in `src/data/site.ts` with the
real provider endpoint when the newsletter account is ready.

The component is intentionally provider-shaped so it can later be swapped to
Substack or Beehiiv without redesigning the surrounding UI.

## Legacy site

The original single-file static website is preserved at `legacy/index.html`.

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` installs
dependencies with `npm ci`, runs `npm test`, builds the app, uploads `dist`, and
deploys it to GitHub Pages.

Because this is a GitHub Pages user site, Vite `base` is configured as `/`.

## Certificate or network warnings

The real GitHub Pages certificate for this domain should be issued to
`*.github.io`. A certificate for a router, school, workplace, hotel, or Wi-Fi
vendor is not expected for `https://o-dia.github.io/`.

If the browser shows a certificate such as `Ruckus Wireless Inc.` or another
network device, it usually means the local network is intercepting HTTPS traffic,
serving a captive portal, or applying a managed security filter. Try:

- Opening the site from another network, such as a phone hotspot.
- Disabling VPN, proxy, or managed network filtering temporarily.
- Checking whether the browser is being redirected to a Wi-Fi login page.
- Running `curl -I https://o-dia.github.io/` from a normal network.

From a healthy connection, the response should come from `GitHub.com`. If the
site has not been deployed yet, a GitHub-hosted 404 is normal.
