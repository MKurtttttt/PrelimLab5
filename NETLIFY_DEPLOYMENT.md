# Netlify Deployment Guide

This guide will help you deploy your SuperGPU Store Angular application to Netlify.

## Prerequisites

1. A GitHub account (or GitLab/Bitbucket)
2. A Netlify account (free tier works fine)
3. Your project pushed to a Git repository

## Step-by-Step Deployment

### Option 1: Deploy via Netlify Dashboard (Recommended for First Time)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Go to Netlify**
   - Visit [https://app.netlify.com](https://app.netlify.com)
   - Sign up or log in (you can use your GitHub account)

3. **Add a New Site**
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider (GitHub, GitLab, or Bitbucket)
   - Authorize Netlify to access your repositories
   - Select your `prelim-project-supergpu` repository

4. **Configure Build Settings**
   Netlify should automatically detect the settings from `netlify.toml`, but verify:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/prelim-project-supergpu/browser`
   - **Node version:** 18 (or latest LTS)

5. **Deploy**
   - Click "Deploy site"
   - Wait for the build to complete (usually 2-5 minutes)
   - Your site will be live at a URL like: `https://random-name-12345.netlify.app`

6. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain if you have one

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

   Follow the prompts:
   - Create & configure a new site
   - Build command: `npm run build`
   - Publish directory: `dist/prelim-project-supergpu/browser`

## Configuration Files

The project includes:

- **`netlify.toml`** - Netlify configuration with build settings and redirects
- **`public/_redirects`** - SPA routing redirects (handles Angular routes)

## Important Notes

- The `_redirects` file ensures all routes redirect to `index.html` for Angular's client-side routing
- The build output is in `dist/prelim-project-supergpu/browser`
- Make sure to commit and push the `netlify.toml` and `public/_redirects` files

## Troubleshooting

### Build Fails
- Check the build logs in Netlify dashboard
- Ensure Node version is 18 or higher
- Verify all dependencies are in `package.json`

### Routes Not Working
- Ensure `_redirects` file is in the `public` folder
- Check that `netlify.toml` has the redirects configuration

### Assets Not Loading
- Verify the build output directory is correct
- Check that Bootstrap CSS is being included in the build

## Continuous Deployment

Once connected to Git, Netlify will automatically:
- Deploy when you push to the main branch
- Create preview deployments for pull requests
- Show build status in your Git repository

## Your Site is Ready!

After deployment, your SuperGPU Store will be live and accessible to anyone with the URL.

