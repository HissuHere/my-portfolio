export const PERSON = {
  name: "Hasnain Amir",
  title: "Full Stack Developer",
  location: "Lahore, Pakistan",
  email: "hasnainamironly@gmail.com",
  phone: "03236888456",
  phoneTel: "+923236888456",
  instagram: "https://instagram.com/hissuhere",
  instagramHandle: "hissuhere",
  x: "https://x.com/Hasnain28833841",
  xHandle: "@Hasnain28833841",
  github: "https://github.com/HissuHere",
  githubHandle: "HissuHere",
  summary:
    "Self-driven full stack developer building with React, Tailwind and the modern frontend stack — with the backend side in active learning. I turn ideas into complete experiences, from responsive UI to live API integrations, and I'm growing into servers, databases and everything in between.",
  funFacts: [
    "Still learning JavaScript and the backend — Node.js, Express and databases",
    "Always trying different things — new tools, ideas and side projects",
    "Learning to work with a team — collaboration, code reviews and shipping together",
  ],
};

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    org: "Self-Directed Projects",
    period: "2026",
    points: [
      "Built React-based frontends to practice components, props, state management and live API integration.",
      "Learning the backend with Node.js, Express and databases — working toward complete full stack projects.",
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
    accent: "accent",
  },
  {
    name: "Weatherly — Live Weather App",
    description:
      "A live weather app that searches any city and shows current conditions plus a 7-day forecast. Fetches real data from the free Open-Meteo API with debounced search, autocomplete suggestions, and clean loading/error states.",
    stack: ["React", "Open-Meteo API", "fetch / async", "CSS"],
    highlight: "API Integration",
    accent: "accent",
    link: "https://weather-app-hissu.vercel.app",
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
    category: "Backend · Learning",
    items: [
      {
        name: "Node.js",
        desc: "Servers, modules and npm-powered tooling — the backend side of my full stack track.",
      },
      {
        name: "Express & REST APIs",
        desc: "Building API routes and serving JSON — learning by making backends for my frontends.",
      },
      {
        name: "Databases",
        desc: "Modeling and querying data with SQL and MongoDB — the persistence layer of full stack apps.",
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
