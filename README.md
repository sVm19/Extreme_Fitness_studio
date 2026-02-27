# 💪 Extreme Fitness Achiever's Studio

A premium, modern personal fitness brand website built for **Sugandh**, a health coach and fitness trainer. Designed to showcase fitness programs, client transformations, and coaching philosophy — with bilingual content in **English** and **Hindi (हिंदी)**.

> 🏋️ Premium personal fitness brand website for Extreme Fitness Achiever's Studio — built with React 19, Vite, and Framer Motion. Features bilingual (English + Hindi) content, transformation gallery, embedded YouTube videos, social links, and scroll-driven animations with a sleek dark glassmorphism design.

## ✨ Features

- **🎨 Premium Dark Glassmorphism Design** — Sleek dark UI with glowing orbs, gradient overlays, cursor-glow tracking, and glass-panel aesthetics
- **🏠 Hero Banner** — Bold headline with animated Hindi motivational lines and a subtle light-sweep effect
- **📸 Transformation Gallery** — Auto-loads images from a local folder; opens in a modal with fullscreen preview support
- **🎬 Embedded YouTube Videos** — Showcase reels with titles like *"Meet Sugandh: Your Health Coach"* and *"3 Fat Loss Mistakes You're Making"*
- **📋 Programs Section** — Three structured coaching programs (Strength Foundation, Body Transformation, Lifestyle Coaching) with staggered card animations
- **🙋 About Section** — Coach portrait with parallax background blobs and a personal bio
- **📱 CTA Integration** — All call-to-action buttons link to a Google Form for lead capture
- **🌐 Social Links** — Connect with the coach across platforms
- **🔤 Bilingual Content** — Hindi and English text throughout, powered by `Noto Sans Devanagari` and `Playfair Display` / `Manrope` fonts
- **🎞️ Scroll-Driven Animations** — Powered by Framer Motion (`useScroll`, `useTransform`, `useInView`, `AnimatePresence`) for a fluid, premium feel

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI framework |
| **Vite 6** | Lightning-fast dev server & bundler |
| **Framer Motion** | Scroll, parallax, & entrance animations |
| **Vanilla CSS** | Custom styling with glassmorphism & gradients |
| **Google Fonts** | Playfair Display, Manrope, Noto Sans Devanagari |

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── App.jsx                         # Main layout with cursor-glow effect
├── components/
│   ├── HeroBanner/                 # Hero section with animated text
│   ├── CtaBanner/                  # Call-to-action lead form button
│   ├── TransformationGallery/      # Photo gallery modal with auto-import
│   │   └── photos/                 # Drop images here to show in gallery
│   ├── VideoSection/               # Embedded YouTube shorts
│   ├── AboutSection/               # Coach bio with parallax
│   ├── ProgramsSection/            # Coaching program cards
│   ├── SocialLinks/                # Social media connections
│   ├── ProfileImage/               # Coach profile image component
│   ├── SocialCard/                 # Social media card UI
│   └── WaveDivider/                # Decorative section divider
```

## 📄 License

All rights reserved © Extreme Fitness Achiever's Studio
