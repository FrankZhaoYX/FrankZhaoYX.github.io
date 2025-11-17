# Personal Portfolio Template

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS.

## Features

- Modern and clean design
- Fully responsive (mobile, tablet, desktop)
- Dark mode support
- Smooth scrolling navigation
- Interactive components
- Sections included:
  - Hero/Landing page
  - About section
  - Projects showcase
  - Skills with progress bars
  - Contact form
  - Footer with social links

## Technologies Used

- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/FrankZhaoYX/FrankZhaoYX.github.io.git
cd FrankZhaoYX.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Customization

### Personal Information

Update the following files with your information:

- **[components/Hero.tsx](components/Hero.tsx)** - Your name and tagline
- **[components/About.tsx](components/About.tsx)** - Your bio and experience stats
- **[components/Projects.tsx](components/Projects.tsx)** - Your projects with links
- **[components/Skills.tsx](components/Skills.tsx)** - Your skills and proficiency levels
- **[components/Contact.tsx](components/Contact.tsx)** - Your contact information
- **[app/layout.tsx](app/layout.tsx)** - Page metadata and title

### Styling

The color scheme can be customized in:
- **[tailwind.config.ts](tailwind.config.ts)** - Tailwind configuration
- **[app/globals.css](app/globals.css)** - Global styles and CSS variables

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a static export in the `out` directory, ready for deployment.

## Deployment

### GitHub Pages (Automated Deployment)

This project includes a GitHub Actions workflow for automatic deployment to GitHub Pages.

**Setup Instructions:**

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** > **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push your code to GitHub:**
```bash
git add .
git commit -m "Initial commit: Portfolio template"
git push origin main
```

3. **Automatic Deployment:**
   - The workflow will automatically run on every push to the `main` branch
   - Your site will be available at `https://frankzhaoyx.github.io/` after deployment
   - Check the **Actions** tab in your repository to monitor the deployment progress

**Manual Deployment (Alternative):**

If you prefer to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The static files will be in the `out` directory
3. Upload the `out` directory contents to your hosting service

### Other Platforms

You can also deploy to:
- Vercel (recommended for Next.js)
- Netlify
- AWS S3
- Any static hosting service

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── Navigation.tsx   # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Projects.tsx     # Projects section
│   ├── Skills.tsx       # Skills section
│   ├── Contact.tsx      # Contact section
│   └── Footer.tsx       # Footer
├── public/              # Static assets
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── tsconfig.json        # TypeScript configuration
```

## License

Feel free to use this template for your personal portfolio!

## Support

If you have any questions or need help customizing the template, feel free to open an issue.