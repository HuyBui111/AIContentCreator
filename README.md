# 🚀 AI Content Creator

> A powerful web application that generates creative content using AI, built with Next.js 14 and OpenRouter API. Automatically deployed to GitHub Pages.

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-blue?style=for-the-badge)](https://huybui111.github.io/AIContentCreator/)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📸 Screenshots

<div align="center">
  <img src="https://github.com/user-attachments/assets/4af6864a-1647-4356-b189-7269c048c412" alt="AI Content Creator Main Interface" width="800" />
  <br />
  <em>Main Interface - Clean and Intuitive Design</em>
</div>

<br />

<div align="center">
  <img src="https://github.com/user-attachments/assets/af344d10-33a9-4487-90fc-a88575c038ba" alt="Generated Content Results" width="800" />
  <br />
  <em>Generated Content Results - Multiple Variations</em>
</div>

---

## ✨ Features

<table>
  <tr>
    <td>🎯 <strong>3 Content Types</strong></td>
    <td>Social Caption, Blog Intro, SEO Title</td>
  </tr>
  <tr>
    <td>🤖 <strong>Smart AI</strong></td>
    <td>Powered by GPT-3.5-turbo via OpenRouter</td>
  </tr>
  <tr>
    <td>📱 <strong>Responsive Design</strong></td>
    <td>Beautiful UI on all devices</td>
  </tr>
  <tr>
    <td>⚡ <strong>Lightning Fast</strong></td>
    <td>Generates 3 versions of content instantly</td>
  </tr>
  <tr>
    <td>📋 <strong>Easy Copy</strong></td>
    <td>Copy results with a single click</td>
  </tr>
  <tr>
    <td>✨ <strong>Smooth Animations</strong></td>
    <td>Fade-in effects for results</td>
  </tr>
  <tr>
    <td>🚀 <strong>Static Deployment</strong></td>
    <td>Fully runs on GitHub Pages</td>
  </tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">
  <img src="https://skillicons.dev/icons?i=nextjs,react,typescript,tailwind,github" alt="Tech Stack" />
</div>

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **TailwindCSS** | Utility-first CSS framework |
| **OpenRouter API** | AI model integration |
| **GitHub Pages** | Static hosting and deployment |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- OpenRouter API account

### 1️⃣ Clone & Install
```bash
git clone https://github.com/huybui111/AIContentCreator.git
cd AIContentCreator
npm install
```

### 2️⃣ Configure Environment
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_OPENROUTER_API_KEY=your_actual_api_key_here
```

> 💡 **Get your API key**: Sign up at [OpenRouter](https://openrouter.ai/) and create a new API key

### 3️⃣ Run Development Server
```bash
npm run dev
```

🎉 **Open your browser**: http://localhost:3000

---

## 🌍 Deployment

### GitHub Pages (Recommended)

#### Step 1: Configure GitHub Secrets
1. Go to your repository **Settings** → **Secrets and variables** → **Actions**
2. Add a new secret:
   - **Name**: `OPENROUTER_API_KEY`
   - **Value**: Your OpenRouter API key

#### Step 2: Deploy
```bash
git add .
git commit -m "🚀 Deploy to GitHub Pages"
git push origin main
```

✅ **GitHub Actions** will automatically build and deploy your app!

Your app will be live at: `https://yourusername.github.io/AIContentCreator`

### Alternative Deployments
- **Vercel**: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/huybui111/AIContentCreator)
- **Netlify**: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/huybui111/AIContentCreator)

---

## 📖 How to Use

1. **Enter your topic** 📝 - Type in a keyword or topic in the input field
2. **Select content type** 🎯 - Choose from Social Caption, Blog Intro, or SEO Title
3. **Generate content** ⚡ - Click "Generate Content" button
4. **Copy your favorite** 📋 - View 3 AI-generated versions and copy the one you like

---

## 📁 Project Structure

```
AIContentCreator/
├── 📁 app/
│   ├── 📄 api/generate/route.ts    # API endpoint for content generation
│   ├── 🎨 globals.css              # Global styles and Tailwind imports
│   ├── 📄 layout.tsx               # Root layout component
│   └── 🏠 page.tsx                 # Main application page
├── ⚙️ .env.local                   # Environment variables (create this)
├── 📦 package.json                 # Dependencies and scripts
├── 🎨 tailwind.config.js           # Tailwind configuration
└── 📚 README.md                    # This documentation
```

---

## 🔮 Future Roadmap

<table>
  <tr>
    <th>Feature</th>
    <th>Status</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>🔄 More Content Types</td>
    <td>🟡 Planned</td>
    <td>Product Descriptions, Ad Copies, Email Templates</td>
  </tr>
  <tr>
    <td>🌐 Multi-language Support</td>
    <td>🟡 Planned</td>
    <td>Expand beyond Vietnamese and English</td>
  </tr>
  <tr>
    <td>🧠 Multiple AI Models</td>
    <td>🟡 Planned</td>
    <td>Switch between GPT-4, Claude, Gemma, etc.</td>
  </tr>
  <tr>
    <td>💾 Export Options</td>
    <td>🟡 Planned</td>
    <td>Export content to PDF or Markdown</td>
  </tr>
  <tr>
    <td>🎨 Dark Mode</td>
    <td>🟡 Planned</td>
    <td>Customizable themes and dark mode</td>
  </tr>
  <tr>
    <td>📊 Content History</td>
    <td>🟡 Planned</td>
    <td>Save and reuse prompts</td>
  </tr>
</table>

---

## 🤝 Contributing

We love contributions! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **OpenRouter** for providing amazing AI API access
- **Next.js** team for the incredible framework
- **TailwindCSS** for making styling a breeze
- **GitHub** for free hosting and CI/CD

---

<div align="center">
  
### 💖 Show your support

Give a ⭐ if this project helped you!

**Made with ❤️ by [HuyBui111](https://github.com/huybui111)**

[⬆ Back to top](#-ai-content-creator)

</div>
