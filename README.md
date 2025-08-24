# AI Content Creator

A web application that generates creative content using AI, built with Next.js 14 and OpenRouter API. Automatically deployed to GitHub Pages.  
🔗 **Demo**: [AI Content Creator](https://huybui111.github.io/AIContentCreator/)

<img width="1898" height="1079" alt="image" src="https://github.com/user-attachments/assets/4af6864a-1647-4356-b189-7269c048c412" />
<img width="1901" height="1072" alt="image" src="https://github.com/user-attachments/assets/af344d10-33a9-4187-90fc-a88575c038ba" />

## Features

- 🎯 **3 content types**: Social Caption, Blog Intro, SEO Title  
- 🤖 **Smart AI**: Powered by GPT-3.5-turbo via OpenRouter  
- 📱 **Responsive**: Beautiful UI on all devices  
- ⚡ **Fast**: Generates 3 versions of content instantly  
- 📋 **Easy copy**: Copy results with a single click  
- ✨ **Smooth animations**: Fade-in effects for results  
- 🚀 **Static deployment**: Fully runs on GitHub Pages  

## Development Setup

1. **Clone and install dependencies:**
   ```bash
   cd AIContentCreator
   npm install
Configure API Key:

Create an account at OpenRouter

Create a .env.local file and add your API key:

ini
Copy
Edit
NEXT_PUBLIC_OPENROUTER_API_KEY=your_actual_api_key_here
Run the app:

bash
Copy
Edit
npm run dev
Open in browser: http://localhost:3000

Deployment to GitHub Pages
Set up GitHub Secrets:

Go to Settings > Secrets and variables > Actions

Add a secret named OPENROUTER_API_KEY with your actual API key

Push code to GitHub:

bash
Copy
Edit
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
GitHub Actions will automatically:

Build the app with static export

Deploy it to GitHub Pages

Your app will be available at: https://yourusername.github.io/AIContentCreator

Usage
Enter a keyword or topic into the input field

Select a content type from the dropdown

Click "Generate Content"

View 3 generated versions and copy the one you like

Tech Stack
Frontend: Next.js 14 (App Router), React, TypeScript

Styling: TailwindCSS

AI API: OpenRouter (Google Gemma-2-9B)

Deployment: GitHub Pages (also supports Vercel, Netlify)

Project Structure
bash
Copy
Edit
AIContentCreator/
├── app/
│   ├── api/generate/route.ts    # API endpoint
│   ├── globals.css              # Styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
├── .env.local                   # Environment variables
├── package.json                 # Dependencies
├── tailwind.config.js           # Tailwind config
└── README.md                    # Documentation
Notes
A valid API key from OpenRouter is required

Default model: GPT-3.5-turbo

Full Vietnamese language support

Future Improvements
🔄 Support more content types (e.g., Product Descriptions, Ad Copies, Email Templates)

🌐 Multi-language support beyond Vietnamese and English

🧠 Allow switching between multiple AI models (Gemma, GPT-4, Claude, etc.)

💾 Export generated content to PDF or Markdown

🎨 Add customizable themes and dark mode

📊 Content history with the ability to save and reuse prompts
