# ShiftZen Logistics

ShiftZen Logistics is a premium single-page frontend for a Packers and Movers business directory built to showcase verified relocation partners across India. The interface is designed around trust, clarity, and conversion, combining a polished visual identity with responsive layouts, animated interactions, and fast Vite-powered development.

**View live:** [https://krrish41.github.io/Shiftzen/](https://krrish41.github.io/Shiftzen/)

## Project Overview

This project presents a modern landing page for a logistics and relocation brand with a strong focus on:

- premium visual design with a clean, trustworthy layout
- high-conversion CTA placement for lead generation
- responsive mobile-first UX across phones, tablets, and desktops
- reusable React components for maintainable frontend structure
- smooth motion and hover interactions for a more refined user experience

The landing page includes a sticky navigation bar, split hero section with a lead form, services grid, popular pricing routes, city showcase cards, an auto-scrolling testimonials section, and a dark footer with business contact details.

## Tech Stack And Versions

The project is built with the following technologies and package versions:

| Technology | Version | Purpose |
| --- | --- | --- |
| React | `^18.3.1` | Component-based frontend architecture |
| React DOM | `^18.3.1` | Browser rendering for the React app |
| Vite | `^5.4.10` | Fast local development server and production bundler |
| Tailwind CSS | `^3.4.14` | Utility-first styling and responsive design system |
| Framer Motion | `^11.14.4` | Scroll reveals, hover effects, and animated transitions |
| Lucide React | `^0.468.0` | Clean modern icon set for UI sections |
| PostCSS | `^8.4.49` | CSS processing pipeline for Tailwind |
| Autoprefixer | `^10.4.20` | Automatic vendor prefixing for broader browser support |
| @vitejs/plugin-react | `^4.3.3` | React integration for Vite |

## Features

### UI And UX Highlights

- Sticky glassmorphism navigation bar with a primary call CTA
- Bold split hero section with a floating "Get a Free Quote" form
- Rounded premium card design with layered shadows and soft gradients
- Mobile-first responsive layout built with Tailwind CSS utility classes
- Visual hierarchy optimized for lead capture and trust building

### Motion And Interactions

- Framer Motion powered fade-ins and scroll-triggered section reveals
- Hover lift effects on service cards, route cards, and city cards
- Animated pulsing call button in the navigation bar
- Auto-scrolling marquee-style testimonials slider
- Smooth anchor-based section navigation

### Content And Business Sections

- Service cards for home shifting, office relocation, vehicle transport, and international moves
- Popular route pricing cards for frequently searched intercity moves
- Top cities grid for Delhi NCR, Bangalore, Mumbai, and Hyderabad
- Customer testimonial slider using real review content
- Conversion-oriented footer with contact information and "Advertise With Us" CTA

### Frontend Engineering Notes

- Reusable React functional components organized by section
- Centralized content arrays in the main app component for easier updates
- Tailwind custom theme extensions for brand colors, shadows, and animations
- Vite-based project structure for simple local setup and fast builds

## Project Structure

```text
Shiftzen Logistics/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── components/
        ├── CitiesSection.jsx
        ├── Footer.jsx
        ├── HeroSection.jsx
        ├── Navbar.jsx
        ├── Reveal.jsx
        ├── RoutesSection.jsx
        ├── SectionHeading.jsx
        ├── ServicesSection.jsx
        └── TestimonialsSection.jsx
```

## Available Scripts

The following npm scripts are configured in the project:

- `npm run dev` - starts the Vite development server
- `npm run build` - creates an optimized production build in the `dist/` folder
- `npm run preview` - serves the production build locally for review
- `npm run deploy` - builds the project and publishes `dist/` to GitHub Pages

## Prerequisites

Before running this project locally, make sure the following are installed on your machine:

1. Node.js `18.18+` or `20+`
2. npm `9+` or later
3. Git, if you plan to clone the project or push changes to GitHub

You can verify your environment with:

```bash
node -v
npm -v
git --version
```

## Local Setup And Installation

Follow these steps to install and run the project locally.

### 1. Clone the repository

```bash
git clone https://github.com/Krrish41/Shiftzen.git
```

### 2. Move into the project directory

```bash
cd Shiftzen
```

If you are already working from the existing local folder on Windows, you can move into it with:

```powershell
Set-Location "C:\Users\Krrish\Desktop\Shiftzen Logistics"
```

### 3. Install dependencies

```bash
npm install
```

This installs React, Vite, Tailwind CSS, Framer Motion, Lucide React, and all required build tooling.

### 4. Start the development server

```bash
npm run dev
```

Vite will print a local URL in the terminal, usually:

```text
http://localhost:5173
```

Open that URL in your browser to view the landing page.

### 5. Edit and iterate

You can now update any component inside `src/`, and Vite will hot reload the page as you work.

Key frontend files:

- `src/App.jsx` - page composition and content configuration
- `src/index.css` - Tailwind imports and shared utility classes
- `src/components/` - reusable landing page sections

## Build For Production

To generate the optimized production-ready output:

```bash
npm run build
```

This command creates a `dist/` folder containing the static assets that can be deployed to a hosting platform such as Vercel, Netlify, GitHub Pages, or any static web server.

To preview the production build locally before deployment:

```bash
npm run preview
```

## GitHub Pages Deployment

This project is configured to work with GitHub Pages project hosting for:

```text
https://github.com/Krrish41/Shiftzen.git
```

### Why this works

- The Vite production `base` path is set to `/Shiftzen/` so built assets resolve correctly from the repository subpath
- The `gh-pages` package is added to publish the `dist/` folder to the GitHub Pages branch
- A `.nojekyll` file is included through the `public/` folder for static hosting compatibility

### Deploy to GitHub Pages

After your repository is pushed to GitHub, run:

```bash
npm run deploy
```

This will:

1. run the production build
2. publish the `dist/` folder to the `gh-pages` branch
3. make the site ready for GitHub Pages hosting

### GitHub repository settings

In your GitHub repository:

1. open `Settings`
2. go to `Pages`
3. under `Build and deployment`, choose `Deploy from a branch`
4. select the `gh-pages` branch
5. set the folder to `/ (root)`
6. save the settings

Once GitHub Pages finishes publishing, your site will be available at:

```text
https://krrish41.github.io/Shiftzen/
```

## Deployment Notes

- Make sure environment-specific settings are configured before deployment if you add APIs later
- The current project is a static frontend and can be deployed directly after running `npm run build`
- Commit both source files and `package-lock.json` to keep dependency installation consistent across environments
- For GitHub Pages, keep the repository name aligned with the configured Vite base path

## Contact Information

For business inquiries, listings, or directory partnerships:

- Email: `contact@shiftzen.net`
- Phone: `8121951331`
- Address: `Plot NO 2, 2nd Floor, Kapil Vihar, Delhi - 110034`

## License

This project is currently intended for private/business use unless a separate license is added to the repository.
