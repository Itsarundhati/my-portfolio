# newfolio — QA Automation Engineer Portfolio

A responsive React + TypeScript + Vite portfolio starter for Arundhati Devi R.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Before publishing
1. Verify the experience dates and role wording.
2. Add your real resume PDF at `public/Arundhati-Devi-R-Resume.pdf`.
3. Replace the example contact email in `src/data.ts` with the address you want employers to use.
4. Add real project screenshots in `public/images/` if you have them.
5. Update project details to match what you can confidently discuss in an interview.

## Contact form
The contact form uses a `mailto:` action and opens the visitor's email application. It does not store submissions. For a production form that submits without an email app, connect a form service or backend.

## GitHub Pages
For a repository named `newfolio`, set `base: '/newfolio/'` in `vite.config.ts`, then configure GitHub Pages to deploy the `dist` folder using your preferred GitHub Actions workflow. For a custom domain or root deployment, use `base: '/'`.

## Motion design
The UI includes a scroll progress indicator, animated hero composition, floating labels, continuous editorial marquee, hover micro-interactions and reduced-motion support. Motion is intentionally subtle and should not block reading or navigation.
