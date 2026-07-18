# Portfolio_Website
Personal portfolio website showcasing my projects, skills, and experience.

## 🚀 Tech Stack
- **Framework**: React.js (via Vite)
- **Styling**: Tailwind CSS v3
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Tooling**: ESLint, Prettier

## 📂 Directory Structure
The core React application is located in the `portfolio/` directory. 
Inside `portfolio/src/`, the codebase is organized as follows:

```text
src/
├── App.jsx          # Main application layout and section wiring
├── index.css        # Global styles and Tailwind directives
├── main.jsx         # React application entry point
├── assets/          # Static files (images, fonts, etc.)
├── components/      # Reusable UI components (buttons, cards, etc.)
├── sections/        # Major page sections (Hero, About, Projects, etc.)
├── hooks/           # Custom React hooks
├── utils/           # Helper functions and utilities
├── data/            # Static data files (JSON, constants)
└── styles/          # Additional styling configurations
```

## 🛠️ Getting Started

### Prerequisites
Make sure you have Node.js installed on your system.

### Installation

1. Navigate to the frontend directory:
   ```bash
   cd portfolio
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 📜 Available Scripts
In the `portfolio/` directory, you can run:

- `npm run dev` - Starts the local development server with hot-module replacement.
- `npm run build` - Bundles the app into static files for production.
- `npm run lint` - Runs ESLint to identify code quality and formatting issues.
- `npm run preview` - Previews the built production app locally.
