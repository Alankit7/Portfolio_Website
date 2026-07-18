export const projectsData = [
  {
    id: 1,
    title: "Habit Tracker with AI Insights",
    description: "An AI-powered behavioral coaching app featuring streak tracking, heatmaps, and analytics. Implemented a 'RAG-lite' architecture that injects 30 days of PostgreSQL behavioral data into the Gemini API to generate personalized insights, actionable recommendations, and tailored motivation.",
    technologies: ["React", "FastAPI", "PostgreSQL", "Firebase", "LangChain", "Gemini 1.5"],
    category: "Full Stack & AI",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    liveDemo: "https://demo.com",
    featured: true
  },
  {
    id: 2,
    title: "ShopVault: SQL Injection Attack Lab",
    description: "Engineered a deliberately vulnerable e-commerce web app as an educational attack lab. Demonstrated manual exploitation of five SQL injection categories (OR-based, UNION-based, Auth Bypass, Boolean Blind, Error-based) and implemented secure counterparts using parameterized queries.",
    technologies: ["Python 3", "Flask", "SQLite3", "Jinja2", "Bootstrap 5", "JavaScript"],
    category: "Security",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    liveDemo: "",
    featured: false
  },
  {
    id: 3,
    title: "Pomodoro Cloud Webapp",
    description: "A full-stack Pomodoro productivity application deployed to the cloud. Utilized Terraform for Infrastructure as Code (IaC) to provision AWS resources and configured an Application Load Balancer (ALB) across EC2 instances for high availability and scalability.",
    technologies: ["React", "Vite", "Flask", "AWS (EC2, ALB)", "Terraform"],
    category: "Cloud & DevOps",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com",
    liveDemo: "https://demo.com",
    featured: false
  }
];
