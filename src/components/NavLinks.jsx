import React, { useState } from "react";

function NavLinks({ to, label, icon: Icon, onClick }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center space-x-2 text-[#5C5F6A] hover:text-black "
    >
      <span>{label}</span>
      {Icon && (
        <Icon
          size={22}
          weight="light"
          className={`${
            isHovered ? "text-black" : "text-[#F7861D]"
          } transition-colors duration-300`}
        />
      )}
    </a>
  );
}

export default NavLinks;
