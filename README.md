<p align="center">
   <img src="https://github.com/QuantSoc/website/blob/main/src/assets/logo_circle.png" width="70" height="70" align="center">
   <img width="70">
   <img src="https://www.unsw.edu.au/sites/all/themes/mobileunswcorporate/logo.png" width="165" height="70" align="center">
</p>

<h1 align="center"> Frontend of QuantSoc Website</h1>

[![Production test](https://github.com/QuantSoc/website/actions/workflows/production_check.yml/badge.svg)](https://github.com/QuantSoc/website/actions/workflows/production_check.yml)

This repo contains the source code for the main website of the 📈 UNSW Quantitative Finance and Trading Society (QuantSoc), live at **[quantsoc.org](https://quantsoc.org)**.

It is a single-page [React](https://reactjs.org/) app built with [Vite](https://vitejs.dev/). Articles and job listings are read from a [Firebase Firestore](https://firebase.google.com/docs/firestore) database; everything else is static.

**Deploying:** Read [DEPLOYMENT.md](DEPLOYMENT.md) first. The live site is built from the `dev` branch.

## Quick start

You need [Node.js](https://nodejs.org/) 20 or newer (the dev container uses Node 20) and `npm`.

```bash
npm ci            # install the exact dependency versions from package-lock.json
npm run prepare   # install the git hooks (husky) - only needed once per clone
npm run start     # start the dev server at http://localhost:5173
```

The dev server reloads automatically when you save a file. Nothing you do locally affects the live website.

**Note:** the site reads articles and job listings from the **real** Firestore database, even locally. The site only ever *reads* data, so this is safe, but anything you see in those sections is live data.

## Scripts

| Command           | What it does                                                                          |
| ----------------- | ------------------------------------------------------------------------------------- |
| `npm run start`   | Dev server at http://localhost:5173                                                   |
| `npm run build`   | Production build into `dist/`                                                         |
| `npm run preview` | Serves the `dist/` build at http://localhost:4173 - use this to check a build locally |
| `npm run lint`    | Runs ESLint                                                                           |
| `npm run prepare` | Installs the husky git hooks                                                          |

There is currently **no automated test suite** (there is no `npm run test`). Testing is done by building and checking the site by hand - see [DEPLOYMENT.md](DEPLOYMENT.md#testing-a-change-safely).

## Project structure

```
src/
├── App.jsx               # Routes: /, /articles, /resources, /contact, /mathsprint
├── firebase.config.js    # Firebase/Firestore client setup (see below)
├── assets/               # Images; sponsor logos live in assets/sponsor-logos/
├── components/           # Components shared by more than one page (NavBar, Footer, ...)
├── routes/               # One folder per page. Components used by only one page live in that page's folder
├── hooks/
└── styles/               # Global .less styles and colour constants (styles/constants.less)
legacy/                   # Old Python backend - not used by the current site
```

Import aliases (`components/...`, `routes/...`, `assets/...`, `styles/...`, `hooks/...`) are defined in `vite.config.js`.

## Common tasks

### Updating sponsors

Sponsors are hard-coded in `src/routes/LandingPage/SponsorshipSection/SponsorshipSection.jsx`.

1. Put the logo in `src/assets/sponsor-logos/`. Prefer an SVG, otherwise a PNG with a transparent background. The site has a **white background**, so use a dark/coloured version of the logo, not a white one.
2. Import the logo at the top of `SponsorshipSection.jsx`.
3. Add a `<Sponsor logoSrc={...} sponsorLink="https://..." />` line under the right tier (`principal` or `major`). Logos appear in the order they are listed.
4. Run `npm run start` and check the Sponsors section on both desktop and a narrow (mobile) window.

### Workshop materials

Workshop slides and code are published in the [QuantSoc/workshop-materials](https://github.com/QuantSoc/workshop-materials) repo.

### Updating Jobs Listings & Articles

All the Job Listings are stored in the [Firebase Firestore](https://firebase.google.com/docs/firestore) database. Simply log into Firebase Hosting using quantsoc email OAuth, and then end it manually from there.

## Firebase

`src/firebase.config.js` connects the site to the `quantsoc-website-admin` Firebase project. It is only used to **read** the `articles` and `jobs` Firestore collections. The site is **not** hosted on Firebase (see [DEPLOYMENT.md](DEPLOYMENT.md)).

The API key in that file is a public client identifier, not a secret (every visitor's browser downloads it). What actually protects the data is the project's Firestore security rules, which are managed in the Firebase console. They should allow public reads of `articles` and `jobs` only, and no public writes.

