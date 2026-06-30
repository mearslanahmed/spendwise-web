<div align="center">
  <img src="public/icon.png" alt="SpendWise Logo" width="120" />
  
  # SpendWise Web & API
  **The official marketing website and AI backend for SpendWise.**
  
  [![Website](https://img.shields.io/badge/Official_Website-spendwiseapp.tech-a3e635?style=for-the-badge)](https://spendwiseapp.tech)
  [![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

  <p align="center">
    This repository contains the Next.js marketing landing page, legal compliance documents, and the high-performance Next.js API routes that power the SpendWise mobile application's Artificial Intelligence features.
  </p>
</div>

---

## ✨ Features

- 🌐 **Modern Landing Page:** A stunning, highly-animated dark-mode landing page designed to convert visitors into mobile app users.
- 🤖 **AI Receipt Processing API:** Exposes an endpoint (`/api/ai-receipt`) that securely processes Cloudinary image URLs using Google Gemini and Groq, feeding structured financial data directly back to the mobile app.
- 📜 **Legal & Compliance:** Hosts the official, web-accessible Privacy Policy, Terms of Service, and Contact pages required by the Apple App Store and Google Play Store.
- 🔎 **Technical SEO:** Fully optimized with automatic XML Sitemaps, Robots.txt, and OpenGraph metadata for flawless indexing on Google Search Console and social media previews.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (v4) with Framer Motion for buttery-smooth scroll animations.
- **AI Integration:** `@google/genai` SDK and Groq API.
- **Icons:** Lucide React
- **Hosting:** Deployed instantly on Vercel at [spendwiseapp.tech](https://spendwiseapp.tech)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/mearslanahmed/spendwise-web.git
cd spendwise-web
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure Environment Variables:**
Create a `.env.local` file in the root directory:
```env
# AI Models
GEMINI_API_KEY=your_gemini_key
GROQ_API_KEY=your_groq_key
```

4. **Run the Development Server:**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📱 Mobile App Repository
This repository powers the backend API for the SpendWise mobile application. 
To view the React Native mobile codebase, please visit the main app repository.

## 👨‍💻 Developer

**Arslan Ahmed**
- Business & Freelance Inquiries: [arslanahmednaseem@gmail.com](mailto:arslanahmednaseem@gmail.com)
- App Support: [spendwiseoffical@gmail.com](mailto:spendwiseoffical@gmail.com)
- GitHub: [@mearslanahmed](https://github.com/mearslanahmed)

## 📄 License
This project is proprietary. Please refer to our [Privacy Policy](https://spendwiseapp.tech/privacy) and [Terms of Service](https://spendwiseapp.tech/terms) for usage constraints.
