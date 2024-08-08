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
    <>
      <nav className="flex items-end h-[69px]  justify-between px-6 py-4 md:pt-4 md:px-16 sticky top-0 z-30 bg-white">
        <div className="flex items-end justify-between w-full md:w-auto">
          <Logo />
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl md:hidden z-50"
            >
              {menuOpen ? (
                <X size={32} weight="light" color="#F7861D" />
              ) : (
                <List size={32} weight="light" color="#F7861D" />
              )}
            </button>
          )}
        </div>
        {isMobile && menuOpen && (
          <div
            className="fixed inset-0  bg-black bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
        <div
          className={`${
            isMobile
              ? menuOpen
                ? "flex fixed top-0 right-0 h-1/2 w-full space-y-6 md:space-y-0 bg-white p-6 shadow-lg transform transition-transform duration-300 ease-in-out"
                : "hidden"
              : "flex"
          } flex-col md:flex-row md:flex items-center justify-center md:space-x-6 md:static md:bg-transparent md:p-0 z-40`}
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
    </>
  );
}
