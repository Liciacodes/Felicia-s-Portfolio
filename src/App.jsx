import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Writing from "./components/Writing";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

function App() {
  // Function to scroll to a specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <NavBar scrollToSection={scrollToSection} />{" "}
      {/* Pass scrollToSection to NavBar */}
      <main className="flex flex-col flex-grow w-full">
      <Reveal
        id="hero"
        className="flex-grow flex flex-col items-center justify-center"
      >
        <Hero scrollToSection={scrollToSection} />{" "}
        {/* Pass scrollToSection to Hero */}
      </Reveal>
      <Reveal
        id="resume"
        className="flex-grow flex flex-col items-center justify-center"
      >
        <Resume />
      </Reveal>
      <Reveal
        id="projects"
        className="flex-grow flex flex-col items-center justify-center"
      >
        <Projects />
      </Reveal>
      <Reveal
        id="writing"
        className="flex-grow flex flex-col items-center justify-center"
      >
        <Writing />
      </Reveal>
      <Reveal
        id="skills"
        className="flex-grow flex flex-col items-center justify-center"
      >
        <Skills />
      </Reveal>
      <Reveal
        id="contact"
        className="flex-grow flex flex-col items-center justify-center"
      >
        <Contact />
      </Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
