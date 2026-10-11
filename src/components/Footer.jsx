import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black px-6 md:px-16 py-[26px] text-sand text-sm md:text-base">
      <p>© {new Date().getFullYear()} Felicia Udosen</p>
    </footer>
  );
}
