import React from "react";
import Button from "./Button";
import { Barcode, EnvelopeSimple } from "phosphor-react";
import NavLinks from "./NavLinks";

export default function Hero() {
  return (
    <section className="flex flex-col mb-20 md:w-[950px]">
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

          <NavLinks
            to={"/"}
            label={"Copy Email"}
            icon={
              <EnvelopeSimple
                size={22}
                weight="light"
                color="#F7861D"
                className="hover:text-black"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
