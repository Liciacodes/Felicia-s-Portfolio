import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
