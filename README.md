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

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: CSS with modern features
- **Fonts**: [Geist](https://vercel.com/font) by Vercel
- **Deployment**: Vercel

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
│   └── SkillsSection.tsx
├── data/
│   └── websiteData.ts # Website content and configuration
├── globals.css        # Global styles
├── layout.tsx         # Root layout
└── page.tsx           # Main page component
```

## Customization

You can modify the content and styling of the website by updating the data in `app/data/websiteData.ts`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Contact

Feel free to reach out to me at [taipv.swe@gmail.com](mailto:taipv.swe@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/taiphanvan/).
