## My Portfolio Website
My personal [website](https://cbuff.dev) serves as a digital showcase for my work, skills, and accomplishments. The core features of the site are the blog and project directory. Built with [Astro](https://astro.dev), [shadcn](https://ui.shadcn.com), and [TailwindCSS](https://tailwindcss.com). Deployed on [Vercel](https://vercel.com).

## Run Locally
Requires Node.js 22.22 or newer and pnpm 11.

```bash
git clone https://github.com/C41M50N/portfolio.git
cd portfolio/
pnpm install
pnpm dev
```

Build and check the site with `pnpm build`. Use `pnpm build:timings` to also
report time spent in build phases, Vite plugins, Markdown processing, and page rendering.

Project document Markdown lives in `src/content/project-documents/`. Reference a
document in a project's JSON using its collection entry ID, for example
`"entry": "everysub/readme"` (a lowercase path without the `.md` extension).
