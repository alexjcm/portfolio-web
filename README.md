# 🌌 alexjcm — Professional Portfolio

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A high-performance, multilingual personal portfolio built with **Astro**. This project follows a **Minimalist Functional** aesthetic, featuring **Soft Glassmorphism** and dynamic **Aurora** background effects.

---

## ✨ Features

- 🌍 **Multilingual support** (English and Spanish) with built-in routing.
- 🌓 **Dynamic Theme System** (Dark/Light mode) with system preference detection and zero-Flash-Of-Unstyled-Content (anti-FOUC).
- 💎 **Soft Glassmorphism** design system with fluid typography (`clamp()`).
- 📱 **Fully Responsive** for all device sizes (Mobile, Tablet, Desktop).

## 🚀 Performance Pass (My Proposals)

To ensure an enterprise-grade experience, the following optimizations have been implemented:

- **Self-hosted Fonts**: Switched from Google Fonts CDN to `@fontsource` for local font delivery, drastically improving FCP (First Contentful Paint).
- **Non-blocking Resources**: Transformed render-blocking Devicon CSS into an optimized asynchronous load.

## 🛠️ Tech Stack

### Core

- **Framework**: [Astro](https://astro.build/) (Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS with modern Custom Properties (Tokens)
- **Icons**: [Devicon](https://devicon.dev/)

---

## 🏗️ Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm run preview
```
