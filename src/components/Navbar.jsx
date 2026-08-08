import { useEffect, useState } from "react";
import { NAV_LINKS, PERSON } from "../data/cv";
import ThemeToggle from "./ThemeToggle";
import { DownloadIcon } from "./icons";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`
        print-hidden fixed inset-x-0 top-0 z-50 transition-all duration-300
        ${scrolled || open
          ? "bg-bg/90 dark:bg-bg-dark/90 backdrop-blur-md border-b border-line/70 dark:border-line-dark/70"
          : "bg-transparent border-b border-transparent"}
      `}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-display text-lg font-semibold text-ink dark:text-ink-light"
        >
          {PERSON.name.toLowerCase().split(" ")[0]}
          <span className="text-accent dark:text-accent-dark">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group font-mono text-[13px] text-ink/70 dark:text-ink-light/70 transition-colors hover:text-accent dark:hover:text-accent-dark"
                >
                  <span className="mr-1 text-ink/40 dark:text-ink-light/40">
                    {link.index}.
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => window.print()}
              className="
                inline-flex items-center gap-2 font-mono text-xs px-3.5 py-2 rounded-md
                bg-ink text-bg dark:bg-ink-light dark:text-bg-dark
                hover:opacity-80
                transition-opacity duration-200
                focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark
              "
            >
              <DownloadIcon size={14} />
              download CV
            </button>
          </div>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-line dark:border-line-dark text-ink dark:text-ink-light"
        >
          <span className="font-mono text-lg leading-none">
            {open ? "✕" : "≡"}
          </span>
        </button>
      </nav>

      {/* mobile menu */}
      <div
        className={`
          md:hidden overflow-hidden transition-[max-height] duration-300
          ${open ? "max-h-[420px] border-t border-line/70 dark:border-line-dark/70" : "max-h-0"}
        `}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 py-2 font-mono text-sm text-ink/80 dark:text-ink-light/80"
              >
                <span className="text-ink/40 dark:text-ink-light/40">
                  {link.index}.
                </span>
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-3 flex items-center gap-3">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={() => window.print()}
              className="flex-1 inline-flex items-center justify-center gap-2 font-mono text-xs px-3.5 py-2 rounded-md bg-ink text-bg dark:bg-ink-light dark:text-bg-dark"
            >
              <DownloadIcon size={14} />
              download CV
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
