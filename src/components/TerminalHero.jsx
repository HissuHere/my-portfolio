import { useEffect, useState } from "react";

const LINES = [
  { command: "whoami", output: "Hasnain Amir" },
  { command: "cat role.txt", output: "Software Development Intern" },
  { command: "cat location.txt", output: "Lahore, Pakistan" },
];

/**
 * TerminalHero
 * Types out a few "commands" line by line, like a terminal session.
 * Runs once on mount. Respects prefers-reduced-motion by skipping
 * straight to the final state.
 *
 * State shape:
 *  - finishedLines: commands that have fully finished typing (with their output shown)
 *  - typedSoFar: the in-progress text of the line currently being typed
 *  - activeIndex: which line in LINES is currently being typed (or LINES.length when all done)
 */
export default function TerminalHero() {
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [finishedLines, setFinishedLines] = useState(
    prefersReducedMotion ? LINES : [],
  );
  const [typedSoFar, setTypedSoFar] = useState("");
  const [activeIndex, setActiveIndex] = useState(
    prefersReducedMotion ? LINES.length : 0,
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Guards against React Strict Mode's dev-only double-invoke of effects,
    // which would otherwise start two typing loops at once and duplicate characters.
    let cancelled = false;
    let charIndex = 0;

    function typeChar(lineIndex) {
      if (cancelled || lineIndex >= LINES.length) return;

      const command = LINES[lineIndex].command;
      charIndex++;
      setTypedSoFar(command.slice(0, charIndex));

      if (charIndex < command.length) {
        setTimeout(() => typeChar(lineIndex), 35 + Math.random() * 35);
      } else {
        // line finished: move it into finishedLines, reset for the next one
        setFinishedLines((prev) => [...prev, LINES[lineIndex]]);
        setTypedSoFar("");
        charIndex = 0;
        setActiveIndex(lineIndex + 1);
        if (lineIndex + 1 < LINES.length) {
          setTimeout(() => typeChar(lineIndex + 1), 350); // pause before next command
        }
      }
    }

    const startTimeout = setTimeout(() => typeChar(0), 300);

    return () => {
      cancelled = true;
      clearTimeout(startTimeout);
    };
  }, [prefersReducedMotion]);

  const isTyping = activeIndex < LINES.length;

  return (
    <div
      className="
        rounded-lg border border-line dark:border-line-dark
        bg-surface dark:bg-surface-dark
        shadow-sm dark:shadow-none
        font-mono text-sm sm:text-base
        p-5 sm:p-6
        max-w-xl
        print-break-avoid
      "
      role="img"
      aria-label="Terminal introduction: whoami returns Your Name, role is Software Development Intern Candidate, location is Karachi, Pakistan"
    >
      {/* fake terminal chrome */}
      <div className="flex items-center gap-1.5 mb-4 no-print">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
        <span className="ml-2 text-xs text-ink/40 dark:text-ink-light/40">
          guest@portfolio
        </span>
      </div>

      {/* Terminal body */}
      <div className="space-y-2">
        {finishedLines.map((line, i) => (
          <div key={i}>
            <div className="flex text-ink dark:text-ink-light">
              <span className="text-accent dark:text-accent-dark mr-2 select-none">
                $
              </span>
              {line.command}
            </div>
            <div className="pl-4 text-ink/70 dark:text-ink-light/70 mt-0.5">
              {line.output}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex text-ink dark:text-ink-light">
            <span className="text-accent dark:text-accent-dark mr-2 select-none">
              $
            </span>
            {typedSoFar}
            <span className="inline-block w-2 h-4 bg-ink/70 dark:bg-ink-light/70 ml-0.5 animate-blink align-middle" />
          </div>
        )}
      </div>
    </div>
  );
}
