# Abhraneel Khan — Angular Portfolio

A single-page portfolio built with **Angular 20** (standalone components, signals, new control flow), **Angular CDK** and **SCSS**. No backend needed.

## Highlights

- Hero with a typewriter effect, dark/light theme toggle (saved in localStorage)
- About, Skills (filter tabs), Experience timeline (custom `duration` pipe), Projects (tabbed ShipCarte case study), Education, Contact
- **Live demo**: a mini ShipCarte-style configurable table. It has drag-and-drop column reorder (CDK), show/hide columns, sorting, search with RxJS `debounceTime`, status filter, skeleton loaders and infinite scroll over a mock "server" (`MockOrderService`)
- Contact form built with **Reactive Forms** and a custom validator. It opens the visitor's email app (`mailto:`), so no backend is needed
- Custom `appReveal` directive (IntersectionObserver) for scroll animations
- Fully responsive

## Run locally

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm start            # http://localhost:4200
npm run build        # output: dist/abhraneel-portfolio/browser
```

## Edit content

All text lives in **`src/app/data/portfolio.data.ts`**. Update it there; no component changes needed.
Replace `public/Abhraneel_Khan_Front_End_Resume.pdf` to update the downloadable CV, and set your GitHub URL in `PROFILE.github`.

## Deploy for free

### Option 1: Vercel (easiest)
1. Push this folder to a GitHub repo.
2. Go to vercel.com, sign in with GitHub, choose **Add New → Project**, and import the repo.
3. Vercel reads `vercel.json` automatically. Click **Deploy**.
4. Your site goes live at `https://<project>.vercel.app`, and every `git push` redeploys it.

### Option 2: Netlify
1. Push to GitHub, then go to app.netlify.com and choose **Add new site → Import from Git**.
2. `netlify.toml` already sets the build command and publish folder. Click **Deploy**.

### Option 3: GitHub Pages (via GitHub Actions; workflow included)
1. Create a repo named **`abhraneel-portfolio`** (if you use another name, change `--base-href` in the `build:gh` script in `package.json`).
2. Push to the `main` branch.
3. In the repo, open **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The workflow `.github/workflows/deploy.yml` builds and publishes to `https://<username>.github.io/abhraneel-portfolio/`.

> If you name the repo `<username>.github.io`, change `--base-href` to `/`.

### Option 4: Firebase Hosting
```bash
npm i -g firebase-tools
firebase login
firebase init hosting     # public dir: dist/abhraneel-portfolio/browser, SPA: Yes
npm run build && firebase deploy
```

All of these are free for a personal portfolio and include HTTPS. Vercel and Netlify also let you attach a custom domain for free.
