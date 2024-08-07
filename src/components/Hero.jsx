import React, { useState } from "react";
import Button from "./Button";
import checked from "../assets/checkedCircle.png";
import { Barcode, EnvelopeSimple, ClipboardText } from "phosphor-react";

export default function Hero() {
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
    <section className="flex flex-col mt-[148px] w-full px-6 md:px-0  md:w-[950px]">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-[22px] md:text-[26px] w-full h-full font-normal  text-black leading-9 md:w-[673px] md:h-[114px] ">
          👋🏽 I am Felicia, full-time Software Engineer, and part-time Olympic
          swimmer. Currently seeking for roles...
        </h1>

        <div className="flex flex-col md:flex-row mt-8 md:items-center gap-x-8">
          <Button
            label="View Projects"
            bgColor={"bg-black"}
            Icon={<Barcode size={36} weight="light" />}
            height="h-[54px]"
          />
          {/* <Button
            label="View Projects"
            bgColor="bg-black"
            Icon={<Barcode size={36} weight="light" />}
            width="w-full md:w-[241px]"
            height="h-[54px]"
            className="pl-0 pr-4" // Add this line to remove left padding and adjust right padding
          /> */}
          <button
            className="flex items-center justify-between md:justify-start mt-3 md:mt-0 w-full px-0 md:px-4 py-1 md:gap-x-2 text-black text-[18px] font-medium"
            onClick={copyToClipboard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>Copy Email</span>
            <span>
              {isCopied ? (
                <img src={checked} alt="email" />
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
