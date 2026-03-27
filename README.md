# Awwal Olaniyi - Portfolio Website

A modern, animated portfolio website built with React.js, TailwindCSS, and Vite. Features smooth animations, responsive design, and a premium user experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with premium animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Animated**: Smooth entrance animations and micro-interactions using Framer Motion
- **Fast**: Built with Vite for lightning-fast development and build times
- **Dynamic Routing**: Project and blog pages with React Router
- **Theme Switching**: Multiple color palettes — switch with one variable

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## 🎨 Theme System

Switch themes by changing `ACTIVE_THEME` in `src/themes.js`:

```js
// Options: 'teal' | 'lavender' | 'coral' | 'forest'
export const ACTIVE_THEME = 'teal'
```

| Theme | Light | Accent | Dark |
|-------|-------|--------|------|
| `teal` | `#F0F4F8` | `#4ECDC4` | `#1A1A2E` |
| `lavender` | `#F4F2F3` | `#C0A9BD` | `#64766A` |
| `coral` | `#CDCBD6` | `#D96846` | `#2F3020` |
| `forest` | `#E3DCD2` | `#CC8B65` | `#013328` |

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.jsx
│   ├── SkillsSection.jsx
│   ├── SelectedWorksSection.jsx
│   ├── MobileProjectsSection.jsx
│   ├── WorkExperienceSection.jsx
│   ├── BlogSection.jsx
│   ├── ContactSection.jsx
│   └── ThemeProvider.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ProjectPage.jsx
│   ├── MobileProjectPage.jsx
│   └── BlogPage.jsx
├── data/
│   └── portfolioData.js
├── themes.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

## 📞 Contact

- **Name**: Awwal Olaniyi Oluwatobi
- **Role**: Mobile Application Developer (Flutter)
- **Email**: awwalfvrst@gmail.com
- **GitHub**: [github.com/Fvrst](https://github.com/Fvrst)
- **LinkedIn**: [awwal-olaniyi](https://ng.linkedin.com/in/awwal-olaniyi-b1a375344)

---

Built with ❤️ using React, TailwindCSS, and Framer Motion
