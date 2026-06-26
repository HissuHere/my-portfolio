import Section from "./Section";

const EDUCATION = [
  {
    school: "American Lycetuff School",
    degree: "High/Secondary School",
    period: "2026",
    detail: "Just got promoted in class 10th, Last year of school.",
  },
];

export default function Education() {
  return (
    <Section label="Education">
      <div className="space-y-6">
        {EDUCATION.map((edu, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-4 gap-y-1"
          >
            <div>
              <h3 className="font-semibold text-ink dark:text-ink-light">
                {edu.school}
              </h3>
              <p className="text-sm text-ink/60 dark:text-ink-light/60">
                {edu.degree}
              </p>
            </div>
            <span className="font-mono text-xs text-ink/50 dark:text-ink-light/50 sm:text-right whitespace-nowrap">
              {edu.period}
            </span>
            <p className="sm:col-span-2 mt-1 text-sm text-ink/70 dark:text-ink-light/70">
              {edu.detail}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
