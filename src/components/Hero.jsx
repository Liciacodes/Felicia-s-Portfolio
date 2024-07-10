import React from "react";
import Button from "./Button";
import { Barcode, EnvelopeSimple } from "phosphor-react";
import NavLinks from "./NavLinks";

export default function Hero() {
  return (
    <section className="flex flex-col w-full md:mx-72 py-20 md:w-[673px] md:h-[114px]">
      <h1 className=" text-[16px] md:text-[26px] font-normal text-black leading-9 md:w-[673px]">
        👋🏽 I am Felicia, full-time Software Engineer, and part-time Olympic
        swimmer. Currently seeking for roles...
      </h1>
      <div className="flex mt-6 gap-x-4">
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
        {/* <Button
          label={"Copy Email"}
          bgColor={"bg-white"}
          textColor={"text-black"}
          width={"w-[173px]"}
          height={"h-[54px]"}
          icon={<EnvelopeSimple size={32} weight="light" color="#F7861D" />}
        /> */}
      </div>
    </section>
  );
}
