import React from "react";

export default function Button({
  label,
  Icon,
  bgColor = "bg-black",
  textColor = "text-white",
  height = "h-auto",
  ...props
}) {
  return (
    <button
      className={`group ${bgColor} ${textColor} cursor-pointer w-full lg:w-[241px] h-[54px] hover:bg-gradient-to-r from-[#000000] to-[#613309] flex items-center justify-between gap-4 px-[22px] py-[18px] font-normal text-[18px] transition-colors duration-300`}
      {...props}
    >
      <span className="whitespace-nowrap">{label}</span>
      {Icon && (
        <span className="ml-auto pl-2">
          {React.cloneElement(Icon, {
            className:
              "text-[#F7861D] group-hover:text-white transition-colors duration-300",
          })}
        </span>
      )}
    </button>
  );
}
