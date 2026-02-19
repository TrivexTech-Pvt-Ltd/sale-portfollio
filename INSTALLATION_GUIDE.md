# Installation & Setup Guide

This guide will help you get your **Sales Portfolio Website** up and running in minutes.

**Estimated Setup Time:** 15–20 minutes.

---

## 📋 Prerequisites
- **Node.js:** (v18.x or higher) installed on your machine.
- **Code Editor:** We recommend [VS Code](https://code.visualstudio.com/).
- **Package Manager:** npm (comes with Node.js).

## 🛠️ Local Setup Instructions
1. **Download & Extract:** Download the ZIP file from your purchase and extract it to your preferred folder.
2. **Open the Folder:** Open your terminal and navigate to the project folder, or open the folder in VS Code.
3. **Install Dependencies:**
   ```bash
   npm install
   ```
4. **Run the Development Server:**
   ```bash
   npm run dev
   ```
5. **View the Site:** Open your browser and go to `http://localhost:3000` (or the port shown in your terminal).

## ✍️ Editing Content Step-by-Step
- **Update Your Bio:** Navigate to `src/app/page.tsx` (or the main landing page file) to edit the hero section and personal details.
- **Change Social Links:** Search for "social" in the `src/components` folder to find the Footer or Header components.
- **Form Configuration:** The contact form is built for easy integration. Use services like [Formspree](https://formspree.io) by simply updating the `action` attribute in the form component.

## 🚀 Deploying to Netlify (Recommended)

### Method: Git Integration (Easiest for Updates)
1. Push your code to a private or public GitHub repository.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add New Site** > **Import an existing project**.
4. Connect your GitHub account and select the repository.
5. **Build Settings:**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `.next` (Netlify usually detects this automatically for Next.js).
6. Click **Deploy Site**.

## ⚡ Deploying to Vercel
1. Go to [Vercel](https://vercel.com) and click **New Project**.
2. Import your GitHub repository.
3. Vercel will automatically detect the Next.js project settings.
4. Click **Deploy**.

## ⚠️ Common Errors & Fixes
- **npm install fails:** Try deleting the `node_modules` folder and `package-lock.json`, then run `npm install --legacy-peer-deps`.
- **Port already in use:** If port 3000 is busy, Next.js will automatically try 3001. Check the terminal output for the correct URL.
- **Hydration Errors:** Ensure you haven't nested `<div>` tags inside `<p>` tags or other invalid HTML structures when editing.

## ❓ FAQ
**Q: Do I need to know React to use this?**  
A: A basic understanding of React/JSX is helpful for customization, but you can change most text by just swapping strings in the code.

**Q: Can I use this for multiple clients?**  
A: Yes, the commercial license allows you to use this for multiple client projects.

**Q: Is it SEO friendly?**  
A: Yes! Next.js provides excellent SEO capabilities out of the box, and we've included a dedicated SEO component for metadata management.
