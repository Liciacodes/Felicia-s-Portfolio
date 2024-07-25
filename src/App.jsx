import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <NavBar />
      <div
        id="hero"
        className="flex-grow flex flex-col items-center justify-center "
      >
        <Hero />
      </div>
      <div
        id="projects"
        className="flex-grow flex flex-col items-center justify-center "
      >
        <Projects />
      </div>
      s
      <div
        id="skills"
        className="flex-grow flex flex-col items-center justify-center "
      >
        <Skills />
      </div>
      <div
        id="contact"
        className="flex-grow flex flex-col items-center justify-center "
      >
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
