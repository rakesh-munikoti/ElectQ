# 🗳️ ElectIQ — The Interactive Election Guide

![ElectIQ Banner](https://img.shields.io/badge/Status-Competition%20Ready-success?style=for-the-badge&logo=appveyor)
![Vanilla JS](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Zero Dependencies](https://img.shields.io/badge/Dependencies-0-blue?style=for-the-badge)

ElectIQ is a highly interactive, multilingual, and gamified web application designed to combat voter apathy and confusion. By turning dry government voting manuals into an engaging, conversational UI, ElectIQ guides users—especially first-time voters—step-by-step through the entire election process.

## ✨ Key "Wow" Features

*   🌍 **Universal Multilingual Engine:** Real-time UI translation and **Text-to-Speech (TTS)** support for 30+ languages, including regional Indian dialects (Telugu, Hindi, Bengali, etc.), utilizing a multi-layered fallback architecture (ResponsiveVoice + Google TTS + Web Speech API).
*   🤖 **Contextual Chat Assistant:** An empathetic, bot-driven interface featuring a dynamic typing indicator, action-intent routing, and instant region-specific FAQ answers.
*   🗺️ **Dynamic 12-Step Timeline:** A beautiful, responsive roadmap tracking the user's journey from "Eligibility" to "Election Results".
*   🎮 **Gamification & Civic IQ:** An integrated 5-question interactive quiz that grades users and assigns a "Civic IQ Score".
*   📸 **Social 'Share Score' Generator:** A custom HTML5 `<canvas>` engine that dynamically generates a downloadable, personalized "Civic IQ" PNG card for social media sharing.
*   🚨 **Emergency Protocol:** A built-in hotline and protocol feature for users experiencing intimidation at the polling station.
*   🎨 **Premium Glassmorphism UI:** Built with raw CSS, featuring a responsive animated gradient background, sleek dark/light mode toggles, and celebratory confetti micro-animations.

## 🏗️ Architecture

ElectIQ is a **zero-dependency, serverless application**. 
The entire engine—routing, state management, translation caching, timeline rendering, and canvas generation—runs flawlessly inside a single `index.html` file. 

*   **No Build Steps:** No Webpack, no Node.js required.
*   **No Database Required:** 100% client-side execution.
*   **Instant Load:** Lightning-fast rendering ideal for low-bandwidth mobile devices.

## 🚀 Quick Start (Local Deployment)

Because ElectIQ has zero backend dependencies, deploying it locally takes less than a second.

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).
3. *That's it!* 

## 🌐 Live Deployment (GitHub Pages)

To host this project live for free using GitHub Pages:
1. Push this repository to GitHub.
2. Go to your repository **Settings** > **Pages**.
3. Under "Build and deployment", select the `main` branch and `/root` folder.
4. Click **Save**. Your site will be live in ~1 minute!

## 💡 How to Use the App
1. **Choose a Path:** Select "First-Time Voter" for the full guided experience, or "Quick Overview" for the timeline roadmap.
2. **Test Localization:** Use the language dropdown in the header to switch to a regional language, then click **🔊 Voice On** to hear the bot speak natively.
3. **Get Your Score:** Click "🧠 Quiz Me!" at the end of the guide, answer the questions, and click the "Share Score" button in the header to download your personalized card.

---
*Built with ❤️ for the Hackathon/Competition.*
