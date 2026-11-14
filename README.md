# Personal Fitness Companion PWA

A personal, offline-first workout planner and tracker for Android. It is a Progressive Web App, not a native APK. No account, backend or cloud database is included.

## Included
- Create workout plans from a starter library
- Strength movements including tube resistance-band exercises
- Track completed sets, session notes and workout history
- Yoga and stretching reference routines
- Exercise library with category, muscle-group, equipment and difficulty filters
- Exercise detail screens with setup instructions, targeted muscles and safety tips
- Edit built-in exercises and add/edit/delete custom exercises
- Attach an image or animated GIF to an exercise; uploaded media is stored locally for offline use
- Export and import a JSON backup
- PWA service-worker caching and GitHub Pages deployment workflow

## Deploy to GitHub Pages
1. Upload the project contents to your existing GitHub repository. `package.json` must be at the repository root. Include the hidden `.github` folder.
2. In repository **Settings → Pages**, choose **GitHub Actions** as the deployment source.
3. Open **Actions** and wait for the Deploy PWA workflow to complete successfully.
4. Open `https://YOUR-GITHUB-USERNAME.github.io/MyFitness/` in Chrome on Android.
5. From Chrome's menu choose **Install app** or **Add to Home screen**.

This project is configured for the repository name `MyFitness`. If you rename the repository, update the `base` value in `vite.config.ts`.

## Local development (optional)
Requires Node.js 20 or later: `npm install`, then `npm run dev`. Android Studio is not needed.

## Data and offline behaviour
All plans, exercises (including attached image/GIF data) and history are stored in browser `localStorage` on this device. Image/GIF uploads are limited to 3 MB per file; browser storage limits still apply, so use a modest number of optimized media files and export a JSON backup regularly. This app does not send them to a server. Clearing Chrome site data or changing browser profiles can erase them, so export a JSON backup regularly. The first hosted visit requires internet; after the app shell has been cached, it can reopen offline.

No Galaxy Watch/Samsung Health integration, cloud sync, account, automatic exercise detection or medical functionality is included. Routine content is guidance only; stop if you feel pain, dizziness or unusual symptoms. Secure the door anchor on a sturdy closed door and follow its manufacturer's instructions.
