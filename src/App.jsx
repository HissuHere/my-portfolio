import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div
      className="
        min-h-screen
        bg-bg dark:bg-bg-dark
        text-ink dark:text-ink-light
        transition-colors duration-300
      "
    >
      <main className="max-w-3xl mx-auto px-6 sm:px-8 py-12 sm:py-16">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Experience />
        <Projects />
        <Skills />
        <Education />

        <footer className="no-print mt-16 pt-8 border-t border-line dark:border-line-dark">
          <p className="font-mono text-xs text-ink/40 dark:text-ink-light/40">
            Built with React + Tailwind · Deployed on Vercel
          </p>
        </footer>
      </main>
    </div>
  );
}
