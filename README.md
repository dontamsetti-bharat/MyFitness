# Personal Fitness Companion PWA

A personal, offline-first workout planner and tracker for Android. It is a Progressive Web App, not a native APK. No account, backend or cloud database is included.

## Included
- Create workout plans from a starter library
- Strength movements including tube resistance-band exercises
- Track completed sets, session notes and workout history
- Yoga and stretching reference routines
- Add custom exercises
- Export and import a JSON backup
- PWA service-worker caching and GitHub Pages deployment workflow

## Deploy to GitHub Pages
1. Create a GitHub repository named exactly `Personal-Fitness-Companion-PWA`.
2. Extract this ZIP and upload the **contents** of the folder to the repository's `main` branch. `package.json` must be at the repository root. Include the hidden `.github` folder.
3. In repository **Settings → Pages**, choose **GitHub Actions** as the deployment source.
4. Open **Actions** and wait for the Deploy PWA workflow to complete successfully.
5. Open `https://YOUR-GITHUB-USERNAME.github.io/Personal-Fitness-Companion-PWA/` in Chrome on Android.
6. From Chrome's menu choose **Install app** or **Add to Home screen**.

If the repository has a different name, change the `base` value in `vite.config.ts` to `'/YOUR-REPOSITORY-NAME/'`.

## Local development (optional)
Requires Node.js 20 or later: `npm install`, then `npm run dev`. Android Studio is not needed.

## Data and offline behaviour
All plans, exercises and history are stored in browser `localStorage` on this device. This app does not send them to a server. Clearing Chrome site data or changing browser profiles can erase them, so export a JSON backup regularly. The first hosted visit requires internet; after the app shell has been cached, it can reopen offline.

No Galaxy Watch/Samsung Health integration, cloud sync, account, automatic exercise detection or medical functionality is included. Routine content is guidance only; stop if you feel pain, dizziness or unusual symptoms. Secure the door anchor on a sturdy closed door and follow its manufacturer's instructions.
