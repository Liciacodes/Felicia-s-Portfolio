import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <NavBar />
      <div className="flex-grow flex flex-col items-center justify-center">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
