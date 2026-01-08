
# sappy.com | Product Studio Showcase

A modern, Swiss-minimalist portfolio hub built with React, TypeScript, and Tailwind CSS. Hosted on GitHub Pages with custom domain support.

## 🚀 Key Features

- **Project Hub**: Advanced filtering by category and full-text search.
- **Service Pages**: Dedicated views for CAD/3D Printing and Automations.
- **Web Portfolio**: High-performance grid showcasing professional commercial sites.
- **Mobile First**: Responsive design that looks premium on all devices.
- **Dark Mode**: Persisted theme preferences with smooth transitions.

## 🛠 Tech Stack

- **React 18+** & **TypeScript**
- **Tailwind CSS** (Styling)
- **Lucide React** (Iconography)
- **Hash Routing** (Compatible with GitHub Pages without server config)

## 📦 Deployment to GitHub Pages

### 1. Repository Setup
1. Create a new repository on GitHub.
2. Push this codebase to the `main` branch.

### 2. Custom Domain (sappy.com)
1. The project includes a `public/CNAME` file containing `sappy.com`.
2. Ensure your DNS provider has an **A record** pointing to GitHub Pages IP addresses or a **CNAME record** pointing to `[username].github.io`.

### 3. GitHub Actions
A workflow is provided in `.github/workflows/deploy.yml` that automatically builds and deploys the site whenever you push to `main`.

## 📂 Project Structure

- `src/components`: UI primitives and composite layout parts.
- `src/pages`: Main view components.
- `src/constants`: Content store for projects and website data.
- `src/types`: Global TS interfaces and enums.

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📄 License
MIT © Sappy Studio
