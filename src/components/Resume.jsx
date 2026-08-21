import React from "react";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import MagneticButton from "./MagneticButton";
import { DownloadSimple } from "phosphor-react";

export default function Resume() {
  return (
    <section
      id="resume"
      className="mt-20 md:mt-[148px] px-4 sm:px-6 lg:px-0 w-full flex flex-col sm:max-w-[750px] md:max-w-[950px]"
    >
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle title={"Resume"} />
        <p className="text-[#592C03] text-[15px] md:text-[16px] mb-6 max-w-xl">
          Want the short version? Grab a PDF copy of my resume covering my
          experience, skills, and projects.
        </p>
        <MagneticButton className="inline-block w-full sm:w-auto">
          <a
            href="/Felicia_Udosen_Frontend_Developer.pdf"
            download
            className="block w-full sm:w-auto"
          >
            <Button
              label="Download Resume"
              bgColor={"bg-black"}
              Icon={<DownloadSimple size={22} weight="light" />}
              height="h-[54px]"
            />
          </a>
        </MagneticButton>
      </div>
    </section>
  );
}
