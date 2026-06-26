import TerminalHero from "./TerminalHero";
import ThemeToggle from "./ThemeToggle";

const CONTACT_LINKS = [
  { label: "Email", href: "mailto:hasnainamironly@gmail.com" },
  { label: "Instagram", href: "https://instagram.com/hissuhere" },
  { label: "X", href: "https://x.com/Hasnain28833841" },
];

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="mb-16">
      <div className="flex items-start justify-between mb-10 no-print">
        <span className="font-mono text-xs text-ink/40 dark:text-ink-light/40">
          portfolio.cv
        </span>
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => window.print()}
            className="
              font-mono text-xs px-3 py-2 rounded-md
              bg-accent dark:bg-accent-dark
              text-white dark:text-ink
              hover:opacity-90
              transition-opacity duration-200
              focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark
            "
          >
            ↓ download PDF
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-5">
          <img
            src="/img.png"
            alt="hasnain"
            className="
            w-32 h-32 sm:w-44 sm:h-44
                    rounded-lg object-cover
                    border border-line dark:border-line-dark
                    shadow-sm dark:shadow-none
                  "
          />
          <div>
            <h1 className="text-4xl sm:text-5xl font-mono font-bold text-ink dark:text-ink-light tracking-tight">
              Hasnain Amir
            </h1>
            <p className="mt-2 text-lg text-ink/60 dark:text-ink-light/60">
              Software Development Intern Candidate
            </p>
          </div>
        </div>

        <TerminalHero />

        <nav className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="
                text-slateAccent dark:text-accent-dark
                hover:underline underline-offset-4
              "
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
