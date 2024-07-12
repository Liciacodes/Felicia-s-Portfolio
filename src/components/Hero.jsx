import React, { useState } from "react";
import Button from "./Button";
import {
  Barcode,
  EnvelopeSimple,
  CheckCircle,
  ClipboardText,
} from "phosphor-react";
import NavLinks from "./NavLinks";

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
    <section className="flex flex-col my-20 md:w-[950px]">
      <div className="">
        <h1 className="text-[16px] md:text-[26px] font-normal text-black leading-9 md:w-[673px]  md:h-[114px] ">
          👋🏽 I am Felicia, full-time Software Engineer, and part-time Olympic
          swimmer. Currently seeking for roles...
        </h1>

        <div className="flex mt-6 items-center gap-x-6">
          <Button
            label={" View Projects"}
            bgColor={"bg-black"}
            textColor={"text-white"}
            width={"w-[241px]"}
            height={"h-[54px]"}
            icon={<Barcode size={22} weight="light" color="#F7861D" />}
          />
          <button
            className="flex items-center px-4 py-1 gap-x-2 text-[#5C5F6A] font-medium"
            onClick={copyToClipboard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span>Copy Email</span>
            <span>
              {isCopied ? (
                <CheckCircle size={22} weight="light" color="green" />
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
