/** @jsxRuntime classic */
import React from "react";

const VARIANTS = {
  solid:
    "bg-black text-white hover:bg-gradient-to-r from-[#000000] to-[#613309]",
  outline: "border border-ink text-ink hover:bg-ink hover:text-white",
};

export default function Button({
  label,
  Icon,
  variant = "solid",
  iconHover = "group-hover:translate-x-1",
  href,
  ...props
}) {
  const Tag = href ? "a" : "button";

  return (
    <Tag
      href={href}
      className={`group ${VARIANTS[variant]} cursor-pointer w-full lg:w-[241px] h-[54px] flex items-center justify-between gap-4 px-[22px] py-[18px] font-normal text-[18px] transition-colors duration-base ease-signature`}
      {...props}
    >
      <span className="whitespace-nowrap">{label}</span>
      {Icon && (
        <span
          className={`ml-auto pl-2 transition-transform duration-base ease-signature ${iconHover}`}
        >
          {React.cloneElement(Icon, {
            className:
              "text-accent group-hover:text-white transition-colors duration-base ease-signature",
          })}
        </span>
      )}
    </Tag>
  );
}
