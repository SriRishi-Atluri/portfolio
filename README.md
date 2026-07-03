# Personal Portfolio

A minimal, dark-themed personal portfolio built with Next.js 16, TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Customize your content

All personal info lives in one file:

**`src/lib/site.ts`** — name, bio, projects, skills, email, and social links.

## Deploy to Vercel

Your Vercel account is already set up (`sririshi-atluris-projects`).

> **Note:** `sririshi-atluri.vercel.app` currently hosts a different app (Gridline). Create a **new** project named `portfolio` so you don't overwrite it.

### Option A — CLI (fastest)

Run these in your terminal:

```bash
cd ~/personal_projects/portfolio
npx vercel login          # skip if already logged in
npx vercel                # preview deploy — follow prompts, name it "portfolio"
npx vercel --prod         # production deploy
```

When prompted:
- **Set up and deploy?** Yes
- **Which scope?** sririshi-atluris-projects
- **Link to existing project?** No (create new)
- **Project name?** `portfolio`
- **Directory?** `./` (default)

You'll get a URL like `https://portfolio-xxx.vercel.app`.

### Option B — GitHub + auto-deploy

1. Push this folder to a new GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo → Vercel auto-detects Next.js
4. Click **Deploy**

Every `git push` will redeploy automatically.


## Project structure

```
src/
├── app/           # Next.js App Router pages & layout
├── components/    # UI sections (Hero, About, Projects, etc.)
└── lib/
    └── site.ts    # ← Edit this to personalize the site
```
