# Railway infrastructure

[railway.ts](railway.ts) describes the entire existing **Portfolio** project
(`dea6b3d3-ea9a-49c5-82c7-0739830e2667`) in its production environment. It retains
these Railway resource names so an eventual apply can adopt them:

- `portfolio`: static Astro site from `C41M50N/portfolio`, branch `master`.
  Railpack selects Bun from `package.json`, installs the frozen lockfile, runs
  `bun run build`, and serves `dist/` with its default Caddy configuration.
  Astro runs on Node.js 24. The existing domains target port 8080.
- `public imgproxy`: `ghcr.io/imgproxy/imgproxy:v3`, with its existing private
  endpoint, `/health` check, and generated Railway domain retained by Railway.
- `raw images`: the existing object-storage bucket in `iad`, grouped with
  imgproxy under `Public Bucket Image Proxy`.

Both services retain their existing US East placement. The portfolio's resource
limits and three retries on failure are retained. Bun uses its default dependency
trust list, with no minimum package release age configured.

## Preview configuration

Install dependencies with `bun install` and authenticate the Railway CLI. Link
explicitly to the existing project and environment before planning:

```bash
railway link --project dea6b3d3-ea9a-49c5-82c7-0739830e2667 --environment afac0296-d1c3-4d00-8972-c601f7db963c
railway config plan
```

`plan` reads Railway state without applying changes. The definition rejects a
different project or environment. Review the plan before applying, especially
if changing resource names: renamed or omitted resources can be treated as
creations and deletions. The file manages the whole environment, without a
named partial.

## Apply only after approval

This migration has not been applied. There is no automatic IaC apply workflow.
GitHub pushes to `master` deploy the application; Railway does not evaluate
`.railway/railway.ts` during those deployments.

Once the desired names and configuration have been approved, inspect a fresh
`railway config plan`, then run `railway config apply`. Do not use
`--confirm-destructive` for the migration unless intentional replacements have
been reviewed. If Railway reports that the service is still managed by Config
as Code, clear its legacy Railway Config File setting after approval and plan
again; do not restore `railway.json`.

## Variables and image storage

The definition owns service variables by default. Imgproxy
variables use `preserve()` to keep their existing Railway values, including S3
credentials, without storing secret values in this repository. Declare new
variables in the file before a future apply; undeclared variables can be removed.
Do not use `railway config pull --include-variables` to import secrets into code.

The site's image URLs still point to Vercel Blob. Keeping the existing Railway
bucket and imgproxy in IaC does not copy those assets or change their URLs. A
future storage migration can copy the files and update the site's URLs after
the bucket and proxy configuration have been verified.
