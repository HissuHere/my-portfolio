/**
 * ThemeToggle
 * Small button to switch between light/dark mode.
 * Hidden in print view via the no-print class.
 */
export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="
        no-print
        inline-flex items-center gap-2
        font-mono text-xs
        px-3 py-2 rounded-md
        border border-line dark:border-line-dark
        text-ink/70 dark:text-ink-light/70
        hover:text-ink dark:hover:text-ink-light
        hover:border-accent dark:hover:border-accent-dark
        transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark
      "
    >
      <span aria-hidden="true">{theme === "dark" ? "☼" : "☾"}</span>
      {theme === "dark" ? "light mode" : "dark mode"}
    </button>
  );
}
