# Tai Phan Van - Personal Portfolio Website

A modern personal portfolio website built with [Next.js](https://nextjs.org) to showcase my work as a Mobile Engineer specializing in iOS and Flutter development.

## Features

- Responsive design for all devices
- Interactive sections: Hero, About, Skills, Portfolio, and Contact
- Dynamic skills visualization
- Portfolio project gallery with filtering
- Smooth scrolling and animations
- Back to top functionality
- SEO optimized
- Multi-language support (English and others)
- Dark/Light theme toggle
- Custom color themes

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org)
- **Language**: TypeScript
- **Styling**: CSS with custom variables for theming
- **Fonts**: Poppins from Google Fonts
- **Form Handling**: Formspree
- **Deployment**: GitHub Actions with GitHub Pages

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```js
app/
├── components/        # UI Components
│   ├── AboutSection.tsx
│   ├── BackToTop.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── PortfolioSection.tsx
│   ├── SkillsSection.tsx
│   ├── ThemeToggle.tsx
│   ├── ColorPicker.tsx
│   ├── LanguageSwitcher.tsx
│   └── LanguageAwareHtml.tsx
├── contexts/
│   ├── ThemeContext.tsx  # Dark/Light mode management
│   └── LanguageContext.tsx  # Multi-language support
├── data/
│   └── translations.ts # Website content and translations
├── globals.css        # Global styles
├── layout.tsx         # Root layout
└── page.tsx           # Main page component
```

## Customization

You can modify the content and styling of the website by updating the translations in `app/data/translations.ts`.

## Deployment

This website is deployed using GitHub Actions with GitHub Pages. The workflow automatically builds and deploys the website whenever changes are pushed to the main branch.

### GitHub Actions Workflow

The deployment is handled by a GitHub Actions workflow defined in `.github/workflows/deploy.yml`. The workflow:

1. Builds the Next.js application using Node.js 20
2. Exports static files to the `out` directory
3. Copies the CNAME file to preserve custom domain settings
4. Uploads and deploys to GitHub Pages

To view the complete workflow configuration, check the [deploy.yml](https://github.com/phanvantai/personal_web/blob/main/.github/workflows/deploy.yml) file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Contact

Feel free to reach out to me at [taipv.swe@gmail.com](mailto:taipv.swe@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/tai-phan-van/).
