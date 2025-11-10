# MyAbilities Website

A modern, accessible website for MyAbilities built with React, TypeScript, Vite, and Tailwind CSS.

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The website will be available at `http://localhost:5173`

### Build

```bash
# Build for production
npm run build
```

## 📦 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Update the base path** (if your repository name is different)
   - Open `vite.config.ts`
   - Update the base path to match your repository name:
     ```typescript
     base: process.env.GITHUB_PAGES === 'true' ? '/YOUR_REPO_NAME/' : '/',
     ```
   - Replace `YOUR_REPO_NAME` with your actual repository name (use hyphens, not spaces)

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

4. **Deploy**
   - The GitHub Actions workflow will automatically run when you push to `main` or `master` branch
   - You can also manually trigger it from the **Actions** tab → **Deploy to GitHub Pages** → **Run workflow**

### Your website will be available at:
`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 📝 Notes

- The `.nojekyll` file ensures GitHub Pages doesn't process the site with Jekyll
- The GitHub Actions workflow automatically builds and deploys your site on every push
- Make sure your repository name matches the base path in `vite.config.ts`

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS v4** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Radix UI** - Accessible components

