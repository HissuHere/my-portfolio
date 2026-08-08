import { SunIcon, MoonIcon } from "./icons";

export default function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark";
  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="
        inline-flex h-9 w-9 items-center justify-center rounded-md
        border border-line dark:border-line-dark
        text-ink/70 dark:text-ink-light/70
        hover:text-ink dark:hover:text-ink-light
        hover:border-accent dark:hover:border-accent-dark
        transition-colors duration-200
        focus:outline-none focus-visible:ring-2 focus-visible:ring-accent dark:focus-visible:ring-accent-dark
      "
    >
      {isDark ? <SunIcon size={16} /> : <MoonIcon size={16} />}
    </button>
  );
}
