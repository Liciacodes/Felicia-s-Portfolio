import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <HomePage />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/skills" element={<Skills />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
