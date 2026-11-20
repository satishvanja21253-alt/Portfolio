# Satish Kumar Vanja — Portfolio

React + Vite + Tailwind CSS (JavaScript).

## Run

```bash
npm install
npm run dev      # local development
npm run build    # production build in dist/
npm run preview  # preview the production build
```

## Edit content

All text, stats, projects and links are in `src/data/content.js`.
The portrait is `src/assets/satish.webp`.

## Contact form (Sheet Monkey)

The form posts to the Sheet Monkey URL set as `SHEET_MONKEY_URL` in `src/data/content.js`.
Row 1 of the connected Google Sheet must have these column headers, spelled exactly:

`Name` | `Email` | `Message` | `Created`

## Deploy

Run `npm run build` and upload the `dist/` folder, or connect the project to Vercel or Netlify
(build command `npm run build`, output directory `dist`).
