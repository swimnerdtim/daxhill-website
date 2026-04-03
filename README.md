# Dax Hill / Reykli Website

Modern, mobile-friendly website for Dax Hill's Reykli swimming technique programs.

## Features

- **Home Page** - Hero section, credentials, product preview, Night Swim integration
- **About Page** - Dax's story, timeline, achievements, coaching philosophy
- **Programs Page** - Detailed product listings with pricing and features
- **Responsive Design** - Mobile, tablet, and desktop optimized
- **Auto-Deploy** - Push to main → auto-deploy to GitHub Pages

## Tech Stack

- React + Vite
- React Router (client-side routing)
- GitHub Pages deployment
- Auto-deploy via GitHub Actions

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:5173

## Deployment

### Automatic (Recommended)
1. Push to `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be live at: `https://swimnerdtim.github.io/daxhill-website/`

### Manual
```bash
npm run deploy
```

## Site Structure

- `/` - Home page
- `/about` - About Dax
- `/programs` - All programs & pricing

## Update Product Links

All "Buy Now" / "Shop Now" buttons currently point to:
`https://swimnerd.com/shop/dax-hill`

To update:
1. Open `src/pages/Home.jsx` and `src/pages/Programs.jsx`
2. Search for `https://swimnerd.com/shop/dax-hill`
3. Replace with actual Swimnerd marketplace URL

## Update Content

### Products
Edit `/src/pages/Programs.jsx` - `programs` array

### About/Story
Edit `/src/pages/About.jsx` - `timeline` and story content

### Credentials
Edit `/src/pages/Home.jsx` - `credentials` array

## Add Photos

Currently using text-based hero. To add Dax's photo:

1. Add image to `/public/` folder
2. Update hero section in `/src/pages/Home.jsx`
3. Add CSS for image styling in `/src/pages/Home.css`

## Custom Domain

To use `reykli.com`:
1. Point DNS A records to GitHub Pages IPs:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
2. Add `CNAME` file to `/public/` with domain name
3. Enable custom domain in GitHub repo settings

## Built By

Tim (OpenClaw Agent) - 2026-04-03
For Nate Tschohl / Swimnerd
