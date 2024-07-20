import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import {
  Browser,
  BracketsCurly,
  GraduationCap,
  At,
  List,
  X,
} from "phosphor-react";
import Logo from "./Logo";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  useEffect(() => {
    if (!isMobile && menuOpen) {
      setMenuOpen(false);
    }
  }, [isMobile]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 md:py-12 md:px-16 sticky top-0 z-20 bg-white">
      <div className="flex items-center justify-between w-full md:w-auto">
        <Logo />
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl md:hidden"
          >
            {menuOpen ? (
              <X size={32} weight="light" color="red" />
            ) : (
              <List size={32} weight="light" color="red" />
            )}
          </button>
        )}
      </div>
      <div
        className={`${
          isMobile ? (menuOpen ? "flex" : "hidden") : "flex"
        } flex-col md:flex-row md:flex items-center md:space-x-6 absolute md:static top-full left-0 right-0 bg-white md:bg-transparent p-4 md:p-0`}
      >
        <NavLinks
          to="#hero"
          label="Home"
          icon={Browser}
          onClick={() => scrollToSection("hero")}
        />
        <NavLinks
          to="#projects"
          label="Work"
          icon={BracketsCurly}
          onClick={() => scrollToSection("projects")}
        />

        <NavLinks
          to="#contact"
          label="Contact"
          icon={At}
          onClick={() => scrollToSection("contact")}
        />
      </div>
    </nav>
  );
}
