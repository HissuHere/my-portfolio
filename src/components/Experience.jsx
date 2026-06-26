import Section from "./Section";

const EXPERIENCE = [
  {
    role: "Independent Game Developer",
    org: "Roblox Platform",
    period: "2023 — Present",
    points: [
      "Engineered functional interactive gameplay elements using Luau scripting, including event countdown systems and custom player welcome messages.",
      "Managed game design assets, icon aesthetics, and community engagement features to deliver a cohesive, user-friendly hangout experience.",
    ],
  },
  {
    role: "Server Systems & Infrastructure Coordinator",
    org: "Minecraft Java Edition Environments",
    period: "2026",
    points: [
      "Successfully migrated server network architectures and world database assets across premium game hosting infrastructures manually.",
      "Designed and optimized complex logistical game automation frameworks utilizing precise conditional logic and redstone mechanics.",
    ],
  },
  {
    role: "Frontend Software Learner",
    org: "Self-Directed Web Studies",
    period: "2026",
    points: [
      "Progressed from foundational HTML structural layouts and styling rules directly into core JavaScript automation principles.",
      "Acquired fundamental knowledge of React components, props, and Vite configuration tools to build modular web application cards.",
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
