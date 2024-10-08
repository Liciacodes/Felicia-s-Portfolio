import React, { useState } from "react";
import Button from "./Button";
import { Barcode, EnvelopeSimple, ClipboardText } from "phosphor-react";
import CheckedIcon from "./CheckedIcon";

export default function Hero({ scrollToSection }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const email = "udosenfelicia@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <section className="flex flex-col mt-20 md:mt-[148px] w-full px-4 sm:px-4 md:px-8 lg:px-0 sm:max-w-[750px] md:max-w-[950px]">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-[22px] md:text-[26px] w-full h-full font-normal text-[#592C03] leading-9 md:w-[673px] md:h-[114px]">
          👋🏽 I am Felicia, full-time Frontend Engineer, and part-time Pro
          Swimmer. Currently seeking new challenges...
        </h1>

        <div className="flex flex-col md:flex-row mt-8 md:items-center md:gap-x-8 gap-x-0">
          <Button
            label="View Projects"
            bgColor={"bg-black"}
            Icon={<Barcode size={36} weight="light" />}
            height="h-[54px]"
            onClick={() => scrollToSection("projects")}
          />

          <button
            className="flex items-center justify-between md:justify-start mt-3 md:mt-0 w-full px-0 md:px-4 py-1 md:gap-x-2 text-[#592C03] text-[18px] font-medium"
            onClick={copyToClipboard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="text-[18px]">
              {isCopied ? "Copied!" : "Copy Email"}
            </span>
            <span>
              {isCopied ? (
                <CheckedIcon />
              ) : isHovered ? (
                <ClipboardText size={22} color="#F7861D" weight="light" />
              ) : (
                <EnvelopeSimple
                  size={22}
                  weight="light"
                  color="#F7861D"
                  className="hover:text-black"
                />
              )}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
