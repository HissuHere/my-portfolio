/**
 * ThemeToggle
 * Compact icon-only button to switch between light/dark mode.
 * Hidden in print view via the print-hidden class.
 */
export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="
        inline-flex h-9 w-9 items-center justify-center rounded-md
        border border-line dark:border-line-dark
        text-ink/70 dark:text-ink-light/70
        hover:text-ink dark:hover:text-ink-light
        hover:border-accent dark:hover:border-accent-dark
        hover:shadow-glow
        transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark
      "
    >
      <span aria-hidden="true" className="text-sm leading-none">
        {theme === "dark" ? "☼" : "☾"}
      </span>
    </button>
  );
}
