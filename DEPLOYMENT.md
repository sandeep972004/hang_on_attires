# Deployment Checklist & Step-by-step Guide

This project is a frontend-only React + Vite app located in the `client/` folder. Follow these steps to prepare and deploy to Vercel.

Prerequisites (have these ready):

- **Git** installed locally (https://git-scm.com/)
- **GitHub** account
- **Vercel** account (https://vercel.com/)
- Node.js and npm installed locally (Node 16+ recommended)

Checklist before deploy:

- Project tested locally: `npm run dev` inside `client/` and site works
- `client/package.json` contains `build` script (`vite build`)
- No backend files remain in the repo (project is frontend-only)

1) Initialize Git, commit, and push to GitHub

Open a terminal at the project root (`Hang_On_Attires`) and run the following commands.

Replace `<your-repo-name>` and `<your-github-username>` where applicable.

```bash
# initialize git
git init

# add all files
git add .

# create initial commit
git commit -m "Initial frontend-only HangOn Attires site"

# create a new repository on GitHub (two options below)
```

Option A — Use GitHub website
- Go to https://github.com/new, create a new repository named `<your-repo-name>` (leave it public or private), then follow the instructions shown to push your existing repo. Example commands GitHub shows (replace values):

```bash
git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git
git branch -M main
git push -u origin main
```

Option B — Use GitHub CLI (if installed)

```bash
gh repo create <your-github-username>/<your-repo-name> --public --source=. --remote=origin --push
```

2) Deploy to Vercel (web UI)

- Go to https://vercel.com/dashboard and log in.
- Click **New Project** → **Import Git Repository** → choose the GitHub repository you pushed.
- When prompted for framework preset, choose **Vite** (or **Other** and set build command to `npm run build` and output directory to `client/dist`).
- Vercel should detect the project. If it asks for the root directory, set it to `/` and make sure it uses `client/package.json` for the build (the `vercel.json` included points the build to `client/dist`).
- Set Environment Variables (none required for this frontend-only site).
- Click **Deploy**.

After deployment, Vercel will provide a live URL (shown in the deployment details). This URL remains the same for the project unless you change settings.

3) Redeploy after updates

- Make changes locally, then commit and push to GitHub:

```bash
git add .
git commit -m "Describe changes"
git push
```

- Vercel will auto-deploy the pushed commits to the production URL automatically (unless you configured preview branches differently).
- If you need to trigger a manual redeploy, open the Vercel dashboard, go to the Deployment, and click **Re-deploy**.

Notes about Vercel configuration in this repo

- This repo includes `vercel.json` which instructs Vercel to build from `client/package.json` and use `client/dist` as the output directory. If you prefer, you can omit `vercel.json` and simply set the build command to `npm run build` and output to `dist` from the UI, pointing at the `client` folder.

Troubleshooting

- If the build fails on Vercel, open the “Build Logs” to see errors. Common issues:
  - Missing build script → ensure `client/package.json` has `build` = `vite build`.
  - Invalid paths for assets → ensure `vite.config.js` has `base` set to `/` or your `BASE_URL` env var.
