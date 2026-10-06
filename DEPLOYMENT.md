# Deployment & Testing

## Where the site is hosted

| Domain                                         | Points to                     | What it serves                                           |
| ---------------------------------------------- | ----------------------------- | -------------------------------------------------------------- |
| [quantsoc.org](https://quantsoc.org)           | `dev.website-dk1.pages.dev`   | **The live site** - the latest build of the `dev` branch |
| [staging.quantsoc.org](https://staging.quantsoc.org) | `dev.website-dk1.pages.dev` | The same as quantsoc.org - **not** a separate staging site |
| [dev.quantsoc.org](https://dev.quantsoc.org)   | `website-dk1.pages.dev`       | An old, outdated build (Cloudflare's "production" deployment) |
| [mtg.quantsoc.org](https://mtg.quantsoc.org)   |                               | The Mock Trading Game - a separate app, not in this repo |

The live site at quantsoc.org is a build (`npm run build`) of the **`dev` branch**. The `main` branch is 100s of commits out of date and is not what's live.

> ⚠️ **Pushing or merging to `dev` deploys straight to the live site.**

**Firebase Hosting:** The repo uses Firebase only for the Firestore database. Do **not** run `firebase init` or `firebase deploy`, at best it does nothing, at worst it creates a second, copy of the site.

### Cloudflare Pages setup

Found in the Cloudflare dashboard -> Compute -> Workers & Pages -> the project -> Settings.

| Setting                | Value                                           |
| ---------------------- | ----------------------------------------------- |
| Project name           | `quantsoc-dev` (to confirm, see below)          |
| Pages address          | `website-dk1.pages.dev`                         |
| Automatic deployments  | Enabled (every push to GitHub triggers a build) |
| Production branch      | `main` (see below)                              |
| Build command          | `npm run build`                                 |
| Build output directory | `dist`                                          |
| Root directory         | (empty - the repo root)                         |
| Build comments         | Enabled (preview links are posted on PRs)       |

### How `dev` ends up live

Cloudflare treats `main` as the production branch, and every other branch gets its own preview deployment at `<branch>.website-dk1.pages.dev`. quantsoc.org is not attached to the production deployment. Instead, its DNS record points at the `dev` branch's preview address, `dev.website-dk1.pages.dev`, which always serves the newest build of `dev`. So:

- **Pushing to `dev`** updates `quantsoc.org` (and `staging.quantsoc.org`).
- **Pushing to `main`** only updates `website-dk1.pages.dev` and `dev.quantsoc.org`. It does not affect the live site.
- **Pushing any other branch** creates a preview at `<branch>.website-dk1.pages.dev`. Branch names are shortened and made lowercase in the address, and `/` becomes `-`.

## Testing a change safely

There is no automated test suite, so testing means building the site and looking at it.

1. **Work on a branch**, never directly on `dev`:
   ```bash
   git checkout dev && git pull
   git checkout -b feat/no-ref/short-description
   ```
2. **Develop** with `npm run start` (http://localhost:5173).
3. **Check the production build**, because this is what actually gets deployed:
   ```bash
   npm run build     # must finish with no errors
   npm run preview   # serves the build at http://localhost:4173
   ```
   Click through every page you touched, and also check:
   - a narrow window (or your browser's device toolbar) for mobile layout
   - every link and button you added
   - the browser console for errors
4. **Lint the files you changed**: `npx eslint path/to/File.jsx`.
5. **Push the branch and open a pull request into `dev`.** The GitHub Actions check (`.github/workflows/production_check.yml`) runs lint and a production build on every PR into `dev`. Cloudflare Pages will also build the branch and comment a **preview URL** on the PR (staging.quantsoc.org can't be used for this - it shows the live site). That URL is a real deployment that is *not* the live site - the best place for a final check, and to share with the exec.
6. **Merge into `dev`** once someone else has reviewed it. This is the step that goes live.

## Deploying

**Merging the PR into `dev` is the deployment** - Cloudflare builds and publishes it automatically. Watch the build in the Cloudflare dashboard (the project -> Deployments), then check https://quantsoc.org. You may need a hard refresh (Cmd/Ctrl + Shift + R) to see changes.

There is no need to build or upload anything by hand.

## Rolling back

Revert the bad commit on `dev` and push:

```bash
git checkout dev && git pull
git revert <sha>
git push
```

Cloudflare rebuilds the live site within a few minutes. You can find the `<sha>` of the bad commit with `git log`, or in the Cloudflare dashboard -> the project -> Deployments.
