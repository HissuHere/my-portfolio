import Section from "./Section";
import { SKILL_GROUPS } from "../data/cv";

export default function Skills() {
  return (
    <Section
      id="skills"
      index="04"
      title="Skills"
      subtitle="Hover any skill to see what it means in practice."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {SKILL_GROUPS.map((group, i) => (
          <div key={i} className="card card-hover rounded-xl p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-mono text-xs uppercase tracking-widest text-ink/50 dark:text-ink-light/50">
                {group.category}
              </h3>
              <span className="font-mono text-xs text-ink/30 dark:text-ink-light/30">
                0{i + 1}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, j) => (
                <div key={j} className="group/chip relative">
                  <span
                    className="
                      inline-block rounded-md px-3 py-1.5 font-mono text-[13px]
                      border border-line dark:border-line-dark
                      text-ink/80 dark:text-ink-light/80
                      transition-colors
                      hover:border-ink/40 dark:hover:border-ink-light/40
                    "
                  >
                    {skill.name}
                  </span>

                  <span
                    role="tooltip"
                    className="
                      pointer-events-none absolute bottom-full left-1/2 z-20 mb-2
                      w-60 max-w-[80vw] -translate-x-1/2
                      rounded-lg border border-line dark:border-line-dark
                      bg-surface dark:bg-surface-dark
                      px-3 py-2 text-left text-xs font-sans font-normal
                      text-ink/80 dark:text-ink-light/80
                      shadow-card
                      opacity-0 translate-y-1
                      transition-all duration-200
                      group-hover/chip:opacity-100 group-hover/chip:translate-y-0
                    "
                  >
                    {skill.desc}
                  </span>
                  <span
                    aria-hidden="true"
                    className="
                      pointer-events-none absolute bottom-full left-1/2 z-20 mb-1
                      h-2 w-2 -translate-x-1/2 rotate-45
                      border-b border-r border-line dark:border-line-dark
                      bg-surface dark:bg-surface-dark
                      opacity-0 transition-opacity duration-200
                      group-hover/chip:opacity-100
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
