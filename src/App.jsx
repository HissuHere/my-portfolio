import { lazy, Suspense } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrintResume from "./components/PrintResume";

const Scene3D = lazy(() => import("./components/three/Scene"));

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div
      className="
        site-bg min-h-screen
        text-ink dark:text-ink-light
        transition-colors duration-300
      "
    >
      <div className="print-hidden">
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="relative z-10">
          <Hero />

          <div className="mx-auto max-w-6xl px-6">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>

      <PrintResume />
    </div>
  );
}
