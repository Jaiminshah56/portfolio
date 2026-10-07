<a name="readme-top"></a>

<div align="center">

# 🌐 Jaimin Shah — 3D Portfolio

### A Modern, Interactive 3D Portfolio built with React, Three.js & TypeScript

[![GitHub](https://img.shields.io/badge/GitHub-Jaiminshah56-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Jaiminshah56)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Jaimin_Shah-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com)
[![Portfolio](https://img.shields.io/badge/Portfolio-Live-3b82f6?style=for-the-badge&logo=vercel&logoColor=white)](https://github.com/Jaiminshah56/3d-portfolio)

</div>

---

## ✨ About

A high-performance, visually stunning **3D portfolio website** for **Jaimin Shah** — Full Stack Developer. Built with cutting-edge technologies including **React 19**, **Three.js**, **Framer Motion**, and **Tailwind CSS**.

Features a fully immersive blue-themed dark UI with:
- 🖥️ Interactive **3D desktop model** in the hero section
- 🌍 Rotating **3D Earth** in the contact section
- ⚡ Floating **3D tech ball** animations
- 🌟 Animated star particle background
- 🎨 Smooth scroll animations powered by Framer Motion
- 📱 Fully **responsive** across all devices

---

## 📁 Folder Structure

```bash
3d-portfolio/
  |- public/
  |   |- desktop_pc/          # 3D GLTF model assets
  |- src/
  |   |- assets/              # Images, icons, SVGs
  |   |- components/
  |   |   |- canvas/
  |   |   |   |- ball.tsx     # Floating 3D tech balls
  |   |   |   |- computers.tsx # 3D desktop model
  |   |   |   |- earth.tsx    # 3D earth model
  |   |   |   |- stars.tsx    # Animated star background
  |   |   |- about.tsx        # About / Skills section
  |   |   |- banner.tsx       # Top announcement banner
  |   |   |- contact.tsx      # Contact form with EmailJS
  |   |   |- experience.tsx   # Work experience timeline
  |   |   |- feedbacks.tsx    # Testimonials section
  |   |   |- footer.tsx       # Footer with social links
  |   |   |- hero.tsx         # Hero landing section
  |   |   |- navbar.tsx       # Navigation bar
  |   |   |- tech.tsx         # Tech stack section
  |   |   |- works.tsx        # Projects showcase
  |   |- constants/
  |   |   |- index.ts         # All data (experiences, projects, etc.)
  |   |- hoc/
  |   |   |- section-wrapper.tsx
  |   |- utils/
  |   |   |- lib.ts
  |   |   |- motion.ts
  |   |- app.tsx
  |   |- index.css
  |   |- main.tsx
  |   |- styles.ts
  |- .env.example
  |- index.html
  |- package.json
  |- tailwind.config.ts
  |- vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** v18+ installed
- **Git** installed
- An **EmailJS** account (for contact form)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/Jaiminshah56/3d-portfolio.git
cd 3d-portfolio
```

**2. Install dependencies**
```bash
npm install --legacy-peer-deps
```

**3. Set up environment variables**

Create a `.env` file in the root directory:
```env
# EmailJS Configuration
VITE_APP_SERVICE_ID=your_service_id
VITE_APP_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_KEY=your_public_key
VITE_APP_EMAILJS_RECIEVER=your@email.com
```

> **How to get EmailJS keys:**
> 1. Go to [emailjs.com](https://emailjs.com) and sign up
> 2. Create an **Email Service** → copy the **Service ID**
> 3. Create an **Email Template** → copy the **Template ID**
> 4. Dashboard → **Account** → copy the **Public Key**

**4. Run the development server**
```bash
npm run dev
```

**5. Open your browser**

Visit → **[http://localhost:5173](http://localhost:5173)**

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| ![React](https://img.shields.io/badge/React_19-61DAFB?style=flat&logo=react&logoColor=black) | UI Framework |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | Type Safety |
| ![Three.js](https://img.shields.io/badge/Three.js-000000?style=flat&logo=threedotjs&logoColor=white) | 3D Rendering |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) | Build Tool |
| ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white) | Styling |
| ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white) | Animations |
| ![EmailJS](https://img.shields.io/badge/EmailJS-F6A800?style=flat&logo=gmail&logoColor=white) | Contact Form |

---

## 📦 Key Dependencies

- `react` `^19.2.5` — Core UI library
- `three` `^0.184.0` — 3D graphics engine
- `@react-three/fiber` `^9.6.0` — React renderer for Three.js
- `@react-three/drei` `^10.7.7` — Three.js helpers & abstractions
- `framer-motion` `^12.38.0` — Smooth animations
- `@emailjs/browser` `^4.4.1` — Contact form email service
- `react-vertical-timeline-component` — Experience timeline
- `react-tilt` — Card tilt hover effect
- `tailwindcss` `^3.4.17` — Utility-first CSS
- `vite` `^8.0.9` — Lightning-fast dev server

---

## 🌍 Deployment

### Deploy on Netlify (Recommended)

1. Go to [netlify.com](https://netlify.com) and log in
2. Click **"Add new site"** → **"Import an existing project"**
3. Connect your **GitHub** account → select this repo
4. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Add your `.env` variables under **Site Settings → Environment variables**
6. Click **Deploy** 🚀

### Deploy on Vercel

```bash
npm install -g vercel
vercel --prod
```

---

## 📬 Contact

**Jaimin Shah**

- 🐙 GitHub: [@Jaiminshah56](https://github.com/Jaiminshah56)
- 💼 LinkedIn: [Jaimin Shah](https://www.linkedin.com)
- 🐦 Twitter/X: [@JaiminShah](https://x.com)

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use and modify it for your own portfolio!

---

<div align="center">

⭐ **If you found this helpful, give it a star!** ⭐

Made with ❤️ by **Jaimin Shah**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

</div>
