export const PERSON = {
  name: "Hasnain Amir",
  title: "Software Development Intern",
  location: "Lahore, Pakistan",
  email: "hasnainamironly@gmail.com",
  phone: "03236888456",
  phoneTel: "+923236888456",
  instagram: "https://instagram.com/hissuhere",
  instagramHandle: "hissuhere",
  x: "https://x.com/Hasnain28833841",
  xHandle: "@Hasnain28833841",
  summary:
    "Self-driven developer building with React, Tailwind and the modern frontend stack. I turn ideas into responsive, interactive experiences — from gameplay systems to production-style UI.",
  funFacts: [
    "Self-taught — learned by building, breaking and rebuilding",
    "Designs game systems in Luau and command-block automation in Minecraft",
    "Exploring open-source: I dig into projects like QGroundControl to see how big apps work",
  ],
};

export const EXPERIENCE = [
  {
    role: "Independent Game Developer",
    org: "Roblox Platform",
    period: "2023 — Present",
    points: [
      "Built interactive gameplay systems using Luau scripting, including event triggers, timers, and basic player interaction logic.",
      "Worked on simple game UI elements and customization features to improve player experience in small-scale projects.",
    ],
  },
  {
    role: "Minecraft Server & Gameplay Systems",
    org: "Java Edition (Private/Public Servers)",
    period: "2025 — Present",
    points: [
      "Configured and managed private Minecraft servers with custom worlds and gameplay rules.",
      "Experimented with redstone systems and command-based automation for gameplay mechanics and events.",
    ],
  },
  {
    role: "Frontend Developer",
    org: "Self-Directed Projects",
    period: "2026",
    points: [
      "Built small React-based UI projects to practice components, props, and state management.",
      "Improved understanding of responsive layouts using Tailwind CSS and modern frontend workflows.",
    ],
  },
  {
    role: "UI Modification Contributor",
    org: "QGroundControl (Open-Source App)",
    period: "2026",
    points: [
      "Explored and modified UI layout components in QGroundControl, a cross-platform ground control application.",
      "Adjusted interface elements to better understand Qt/QML structure and cross-platform UI behavior.",
    ],
  },
];

export const PROJECTS = [
  {
    name: "Rating Page",
    description:
      "A simple interactive rating component built with React. Focused on understanding state management, user input handling, and conditional UI rendering.",
    stack: ["React", "useState", "Tailwind CSS"],
    highlight: "First React UI Logic Project",
    accent: "accent",
  },
  {
    name: "Portfolio Website",
    description:
      "This portfolio itself, built using React and Tailwind CSS. Designed to practice layout design, component structuring, and responsive UI development.",
    stack: ["React", "Vite", "Tailwind CSS"],
    highlight: "UI Layout + Responsive Design",
    accent: "accent2",
  },
  {
    name: "Terminal Hero",
    description:
      "An animated terminal-style introduction that types out commands on load — built to practice effects, timing and accessibility with reduced-motion support.",
    stack: ["React", "CSS Keyframes"],
    highlight: "Micro-interaction",
    accent: "magenta",
  },
];

export const SKILL_GROUPS = [
  {
    category: "Core Frontend",
    items: [
      {
        name: "HTML5",
        desc: "Semantic, accessible markup — structure that makes sense to browsers, screen readers and maintainers.",
      },
      {
        name: "CSS3",
        desc: "Flexbox, Grid, custom properties and responsive layouts that adapt from phone to desktop.",
      },
      {
        name: "JavaScript (ES6+)",
        desc: "Modern syntax, closures, promises, async/await and DOM manipulation for interactive UIs.",
      },
      {
        name: "React",
        desc: "Components, props, hooks and state — building reusable, composable UI with the component model.",
      },
    ],
  },
  {
    category: "Styling & UI",
    items: [
      {
        name: "Tailwind CSS",
        desc: "Utility-first styling for fast, consistent and responsive design systems.",
      },
      {
        name: "Responsive design",
        desc: "Mobile-first layouts that reflow cleanly across every breakpoint.",
      },
      {
        name: "UI/UX layout",
        desc: "Thinking about spacing, hierarchy and user flow before writing code.",
      },
    ],
  },
  {
    category: "Tools & Workflow",
    items: [
      {
        name: "Git & GitHub",
        desc: "Commits, branches and pull requests — version control for solo and collaborative work.",
      },
      {
        name: "VS Code",
        desc: "Daily driver editor — shortcuts, extensions and a clean setup.",
      },
      {
        name: "Vite",
        desc: "Fast dev server and build tooling for modern React projects.",
      },
      {
        name: "Vercel",
        desc: "Zero-config deployments and previews straight from the repo.",
      },
    ],
  },
  {
    category: "Learning Focus",
    items: [
      {
        name: "React patterns",
        desc: "Composition, custom hooks and cleaner ways to manage state.",
      },
      {
        name: "Node.js basics",
        desc: "The backend side — servers, modules and npm-powered tooling.",
      },
      {
        name: "API integration",
        desc: "Fetching and wiring real data into frontend apps.",
      },
    ],
  },
];

export const EDUCATION = [
  {
    school: "American Lycetuff School",
    degree: "High/Secondary School",
    period: "2026",
    detail: "Just got promoted in class 10th — last year of school.",
  },
];

export const NAV_LINKS = [
  { label: "about", href: "#about", index: "01" },
  { label: "experience", href: "#experience", index: "02" },
  { label: "projects", href: "#projects", index: "03" },
  { label: "skills", href: "#skills", index: "04" },
  { label: "education", href: "#education", index: "05" },
  { label: "contact", href: "#contact", index: "06" },
];
