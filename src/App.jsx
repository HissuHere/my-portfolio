import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrintResume from "./components/PrintResume";

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
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main className="relative z-10">
          <Hero />

          <div className="mx-auto max-w-6xl px-6">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>

      <PrintResume />
    </div>
  );
}
