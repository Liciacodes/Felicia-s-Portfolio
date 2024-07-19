import React, { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { Browser, BracketsCurly, At, List, X } from "phosphor-react";
import Logo from "./Logo";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is typically the breakpoint for md in Tailwind
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

  return (
    <>
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
            to="/"
            label="Home"
            icon={({ className }) => (
              <Browser
                size={22}
                weight="light"
                className={`${className} hover:text-black`}
              />
            )}
          />
          <NavLinks
            to="/projects"
            label="Work"
            icon={({ className }) => (
              <BracketsCurly
                size={22}
                weight="light"
                className={`${className} hover:text-black`}
              />
            )}
          />
          <NavLinks
            to="/contact"
            label="Contact"
            icon={({ className }) => (
              <At
                size={22}
                weight="light"
                className={`${className} hover:text-black`}
              />
            )}
          />
        </div>
      </nav>
      {isMobile && menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
