import Section from "./Section";
import { EDUCATION } from "../data/cv";

export default function Education() {
  return (
    <Section
      id="education"
      index="05"
      title="Education"
      subtitle="Where I'm learning and what I'm studying."
    >
      <div className="card card-hover rounded-xl p-6">
        {EDUCATION.map((edu, i) => (
          <div key={i} className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-lg font-semibold text-ink dark:text-ink-light">
                {edu.school}
              </h3>
              <p className="mt-1 font-mono text-sm text-accent dark:text-accent-dark">
                {edu.degree}
              </p>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/70 dark:text-ink-light/70">
                {edu.detail}
              </p>
            </div>
            <span className="font-mono text-xs text-ink/50 dark:text-ink-light/50">
              {edu.period}
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
