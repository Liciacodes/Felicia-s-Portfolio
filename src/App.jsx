import React from "react";
import { MotionConfig } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex flex-col min-h-screen bg-white w-full">
        <NavBar scrollToSection={scrollToSection} />
        <main className="flex flex-col flex-grow items-center w-full">
          <Hero scrollToSection={scrollToSection} />
          <Projects />
          <Writing />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

export default App;
