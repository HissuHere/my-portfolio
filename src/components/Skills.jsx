import Section from "./Section";

const SKILL_GROUPS = [
  {
    category: "Core Frontend",
    items: [
      "HTML5 (semantic structure)",
      "CSS3 (flexbox, grid, responsive design)",
      "JavaScript (ES6+ fundamentals)",
      "React (components, hooks, state)",
    ],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "Responsive design", "Basic UI/UX layout thinking"],
  },
  {
    category: "Tools & Workflow",
    items: [
      "Git & GitHub (basic version control)",
      "VS Code",
      "Vite (project setup)",
      "Vercel (deployment)",
    ],
  },
  {
    category: "Learning Focus",
    items: [
      "Improving React patterns",
      "Backend fundamentals (Node.js basics)",
      "API integration practice",
    ],
  },
];

export default function Skills() {
  return (
    <Section label="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {SKILL_GROUPS.map((group, i) => (
          <div key={i}>
            <h3 className="font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-ink-light/50 mb-2">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, j) => (
                <span
                  key={j}
                  className="
                    text-sm px-2.5 py-1 rounded-md
                    border border-line dark:border-line-dark
                    text-ink/80 dark:text-ink-light/80
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
