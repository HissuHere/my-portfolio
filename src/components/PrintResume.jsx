import { PERSON, EXPERIENCE, PROJECTS, SKILL_GROUPS } from "../data/cv";

/**
 * PrintResume
 * Rendered ONLY in print output (hidden on screen, site hidden when printing).
 * A clean, compact, classic single-page resume for the "download CV" PDF.
 */
export default function PrintResume() {
  return (
    <div className="print-surface hidden print:block bg-white text-[#0B1220]">
      <div className="space-y-5 text-[10.5px] leading-[1.45]">
        {/* header */}
        <header className="flex items-end justify-between gap-4 border-b border-[#0B1220] pb-3">
          <div>
            <h1 className="text-[24px] font-bold tracking-tight leading-none">
              {PERSON.name}
            </h1>
            <p className="mt-1 text-[12px] font-medium">{PERSON.title}</p>
          </div>
          <div className="text-right font-mono text-[8.5px] leading-relaxed">
            <p>{PERSON.location}</p>
            <p>{PERSON.email}</p>
            <p>{PERSON.phone}</p>
            <p>{PERSON.xHandle} · @{PERSON.instagramHandle}</p>
            <p>github.com/{PERSON.githubHandle}</p>
          </div>
        </header>

        {/* summary */}
        <section>
          <h2 className="mb-1 border-b border-[#0B1220] pb-0.5 text-[10px] font-bold uppercase tracking-widest">
            Summary
          </h2>
          <p className="text-justify">{PERSON.summary}</p>
        </section>

        {/* experience */}
        <section>
          <h2 className="mb-1.5 border-b border-[#0B1220] pb-0.5 text-[10px] font-bold uppercase tracking-widest">
            Experience
          </h2>
          <div className="space-y-2">
            {EXPERIENCE.map((job, i) => (
              <div key={i}>
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[11px] font-semibold">
                    {job.role} at <span className="font-normal">{job.org}</span>
                  </p>
                  <span className="shrink-0 font-mono text-[8.5px]">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-0.5 space-y-0.5 pl-4">
                  {job.points.map((point, j) => (
                    <li key={j} className="list-disc marker:text-[#0B1220]">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* projects */}
        <section>
          <h2 className="mb-1.5 border-b border-[#0B1220] pb-0.5 text-[10px] font-bold uppercase tracking-widest">
            Projects
          </h2>
          <div className="space-y-1.5">
            {PROJECTS.map((project, i) => (
              <div key={i}>
                <p className="text-[11px] font-semibold">
                  {project.name}{" "}
                  <span className="font-mono text-[8.5px] font-normal text-[#333]">
                    · {project.stack.join(" · ")}
                  </span>
                </p>
                <p className="text-justify">{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* skills */}
        <section>
          <h2 className="mb-1.5 border-b border-[#0B1220] pb-0.5 text-[10px] font-bold uppercase tracking-widest">
            Skills
          </h2>
          <div className="space-y-1">
            {SKILL_GROUPS.map((group, i) => (
              <p key={i}>
                <span className="font-semibold">{group.category}:</span>{" "}
                {group.items.map((skill) => skill.name).join(", ")}
              </p>
            ))}
          </div>
        </section>

        <footer className="pt-1 text-center font-mono text-[8px] text-[#555]">
          {PERSON.email} · {PERSON.location}
        </footer>
      </div>
    </div>
  );
}
