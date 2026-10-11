import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import NavLinks from "./NavLinks";
import {
  BracketsCurly,
  At,
  List,
  X,
  NotePencil,
  Stack,
} from "phosphor-react";
import Logo from "./Logo";
import { fadeIn } from "../lib/motion";

const SECTIONS = [
  { id: "projects", label: "Work", icon: BracketsCurly },
  { id: "writing", label: "Writing", icon: NotePencil },
  { id: "skills", label: "Skills", icon: Stack },
  { id: "contact", label: "Contact", icon: At },
];

const TRACKED_IDS = ["hero", ...SECTIONS.map((section) => section.id)];

export default function NavBar({ scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 8);

    const atBottom =
      window.innerHeight + y >= document.documentElement.scrollHeight - 4;
    if (atBottom) {
      setActiveId(TRACKED_IDS[TRACKED_IDS.length - 1]);
      return;
    }

    const line = window.innerHeight * 0.45;
    let current = TRACKED_IDS[0];
    for (const id of TRACKED_IDS) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= line) current = id;
    }
    setActiveId(current);
  });

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const goTo = (id) => {
    scrollToSection(id);
    setMenuOpen(false);
  };

  const renderLinks = (underlineId) => (
    <>
      {SECTIONS.map(({ id, label, icon }) => (
        <NavLinks
          key={id}
          to={`#${id}`}
          label={label}
          icon={icon}
          active={activeId === id}
          underlineId={underlineId}
          onClick={() => goTo(id)}
        />
      ))}
    </>
  );

  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="fixed top-0 inset-x-0 h-[2px] bg-accent origin-left z-50"
      />
      <nav
        className={`sticky top-0 z-30 w-full bg-white border-b transition-colors duration-base ease-signature ${
          scrolled ? "border-sand/40" : "border-transparent"
        }`}
      >
        <div className="relative z-10 flex items-end justify-between h-[69px] py-4 px-4 sm:px-6 md:px-12 lg:px-16 bg-white">
          <a
            href="#hero"
            aria-label="Felicia Udosen, back to top"
            onClick={(e) => {
              e.preventDefault();
              goTo("hero");
            }}
          >
            <Logo />
          </a>

          <div className="hidden md:flex items-center space-x-10">
            {renderLinks("nav-underline")}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={32} weight="bold" className="text-accent" />
            ) : (
              <List size={32} weight="light" className="text-accent" />
            )}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                key="backdrop"
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="fixed inset-0 top-[69px] bg-black/50 md:hidden"
                onClick={() => setMenuOpen(false)}
              />
              <motion.div
                key="menu"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-full inset-x-0 flex flex-col items-center space-y-6 bg-white p-6 shadow-lg md:hidden"
              >
                {renderLinks()}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
