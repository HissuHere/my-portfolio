# hasnain.is-a.dev — Personal Portfolio

My personal portfolio, live at **[hasnain.is-a.dev](https://hasnain.is-a.dev)**.

A minimal, theme-adaptive portfolio built with **React + Vite + Tailwind CSS**, featuring an interactive photo card, real project previews, and a clean print-to-PDF resume.

## Features

- **Interactive hero** — profile photo card with 3D mouse tilt, cursor-following glow, and a theme-adaptive accent (amber in light mode, blue in dark mode)
- **Project cards** — full-image previews with a slide-up details panel on hover (desktop) and always-visible details on mobile
- **Experience timeline** — featured Visor Dynamics internship card with an accent-colored border and "first internship" badge
- **Light / dark mode** — toggle in the navbar, persisted to `localStorage`, respects system preference on first visit
- **Print resume** — the site hides itself when printing and renders a clean single-page resume instead (Ctrl/Cmd+P or the print button)

## Tech stack

| Layer | Tools |
|---|---|
| Frontend | React 19, Vite, Tailwind CSS |
| Fonts | Sora (display/body) + JetBrains Mono (code/labels) via Google Fonts |
| Hosting | Vercel, custom domain via [is-a.dev](https://www.is-a.dev) |

## Project structure

```
src/
  components/
    Hero.jsx          -> name, intro, social links, interactive photo card
    About.jsx         -> short bio + current focus + stats
    Experience.jsx    -> work experience timeline (edit src/data/cv.js)
    Projects.jsx      -> full-image project cards with hover details
    Skills.jsx        -> skill groups
    Contact.jsx       -> contact section
    PrintResume.jsx   -> the print-only resume layout
    Section.jsx       -> shared section wrapper (scroll-reveal)
    Navbar.jsx        -> nav + theme toggle + print button
    ThemeToggle.jsx   -> light/dark switch
  data/
    cv.js             -> ALL content lives here: personal info, experience,
                         projects, skills. Edit this file to change the site.
  hooks/
    useTheme.js       -> dark/light mode logic
    useReveal.js      -> scroll-triggered animation logic
  index.css           -> fonts, animations, print stylesheet
```

## Run it locally

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # serve the dist/ folder locally
```

## Editing content

Everything on the site is driven by **`src/data/cv.js`** — your name, links,
experience entries, projects (with preview images in `public/projects/`),
and skill groups. Colors and fonts live in `tailwind.config.js`.

## Deploy

The site auto-deploys to Vercel on every push to `main`.

To deploy your own copy: push to GitHub, import the repo at
[vercel.com](https://vercel.com), and accept the default Vite settings.
