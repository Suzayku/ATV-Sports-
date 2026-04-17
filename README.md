# ATV Sports - Landing Website

A modern, professional landing website for the ATV Sports app built with React, TypeScript, Tailwind CSS, and Vite.

## Features

✨ **Modern Design**
- Dark theme with gradient accents
- Fully responsive (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional UI components

📱 **Sections**
- Hero section with download buttons
- Features showcase (6 key features)
- Gallery/Screenshots section
- User testimonials
- FAQ section
- Legal disclaimer
- Footer with links

🚀 **Tech Stack**
- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React Icons

## Getting Started

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```

The site will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section with download
│   ├── Features.tsx    # Features showcase
│   ├── Screenshots.tsx # Gallery section
│   ├── Testimonials.tsx # User reviews
│   ├── FAQ.tsx         # FAQ section
│   ├── Disclaimer.tsx  # Legal disclaimer
│   └── Footer.tsx      # Footer
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles

```

## Customization

### Colors
Edit `tailwind.config.js` to change primary colors:
```js
theme: {
  extend: {
    colors: {
      primary: '#1e40af',     // Change primary color
      secondary: '#f59e0b',   // Change secondary color
    },
  },
},
```

### Content
Edit individual component files in `src/components/` to update:
- Text content
- Links and URLs
- App features
- Testimonials
- FAQ items

### Logo
Replace `icon.png` in the root folder with your custom logo.

## Download Links

- **Android APK:** https://github.com/chinkulj/t/releases/download/v10.1.0/app-release.apk
- **iOS:** Coming Soon

## Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Deploy to Netlify
1. Run `npm run build`
2. Upload `dist/` folder to Netlify

### Deploy to GitHub Pages
Add to `vite.config.ts`:
```ts
export default {
  base: '/your-repo-name/',
  // ... other config
}
```

## License

© 2024 ATV Sports. All rights reserved.

## Support

For issues or questions, please contact support or open an issue on GitHub.
