import Section from "./Section";

const EXPERIENCE = [
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

export default function Experience() {
  return (
    <Section label="Experience">
      <div className="space-y-8">
        {EXPERIENCE.map((job, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-4 gap-y-1"
          >
            <div>
              <h3 className="font-semibold text-ink dark:text-ink-light">
                {job.role}
              </h3>
              <p className="text-sm text-ink/60 dark:text-ink-light/60">
                {job.org}
              </p>
            </div>
            <span className="font-mono text-xs text-ink/50 dark:text-ink-light/50 sm:text-right whitespace-nowrap">
              {job.period}
            </span>

            <ul className="sm:col-span-2 mt-2 space-y-1.5 list-disc list-outside pl-5 text-sm text-ink/80 dark:text-ink-light/80">
              {job.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
