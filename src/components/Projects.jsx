import Section from "./Section";

const PROJECTS = [
  {
    name: "Rating Page",
    description:
      "A simple interactive rating component built with React. Focused on understanding state management, user input handling, and conditional UI rendering.",
    stack: ["React", "useState", "Tailwind CSS"],
    link: "#",
    highlight: "First React UI Logic Project",
  },

  {
    name: "Portfolio Website",
    description:
      "This portfolio itself, built using React and Tailwind CSS. Designed to practice layout design, component structuring, and responsive UI development.",
    stack: ["React", "Vite", "Tailwind CSS"],
    link: "#",
    highlight: "UI Layout + Responsive Design",
  },
];

export default function Projects() {
  return (
    <Section label="Projects">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {PROJECTS.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group block rounded-lg border border-line dark:border-line-dark
              bg-surface dark:bg-surface-dark
              p-5
              transition-all duration-200
              hover:border-accent dark:hover:border-accent-dark
              hover:-translate-y-0.5
              hover:shadow-md dark:hover:shadow-none
              print-break-avoid
            "
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-ink dark:text-ink-light">
                {project.name}
              </h3>
              <span
                aria-hidden="true"
                className="
                  no-print font-mono text-accent dark:text-accent-dark
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                "
              >
                →
              </span>
            </div>
            <p className="text-sm text-ink/70 dark:text-ink-light/70 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, j) => (
                <span
                  key={j}
                  className="
                    font-mono text-[11px] tracking-wide
                    px-2 py-0.5 rounded
                    bg-slateAccent/10 text-slateAccent
                    dark:bg-slateAccent/20 dark:text-ink-light/80
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}
