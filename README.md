## My Portfolio Website
My personal [website](https://cbuff.dev) serves as a digital showcase for my work, skills, and accomplishments. The core features of the site are the blog and project directory. Built with [Astro](https://astro.dev), [shadcn](https://ui.shadcn.com), and [TailwindCSS](https://tailwindcss.com). Deployed on [Railway](https://railway.com).

## Run Locally
Requires Node.js 24 and Bun 1.4.3. Bun installs dependencies and runs scripts;
Astro uses Node.js through its CLI entry point.

```bash
git clone https://github.com/C41M50N/portfolio.git
cd portfolio/
bun install
bun run dev
```

Build and check the site with `bun run build`. Use `bun run build:timings` to also
report time spent in build phases, Vite plugins, Markdown processing, and page rendering.

Project document Markdown lives in `src/content/project-documents/`. Reference a
document in a project's JSON using its collection entry ID, for example
`"entry": "everysub/readme"` (a lowercase path without the `.md` extension).

## Railway

Railpack detects this static Astro site, runs the build script, and serves
`dist/` with its default Caddy configuration. There is no custom start command
or web-server configuration.

The whole project's infrastructure is defined in [.railway/railway.ts](.railway/railway.ts),
including imgproxy and the existing image bucket. See [.railway/README.md](.railway/README.md)
for the plan and apply workflow. IaC changes require an explicit CLI apply;
GitHub deployments do not apply them automatically.
