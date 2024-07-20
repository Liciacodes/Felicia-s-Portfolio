import React from "react";

function NavLinks({ to, label, icon: Icon, onClick }) {
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="flex items-center space-x-2 text-[#5C5F6A] hover:text-black"
    >
      {Icon && <Icon size={22} weight="light" className="text-[#F7861D]" />}
      <span>{label}</span>
    </a>
  );
}

export default NavLinks;
