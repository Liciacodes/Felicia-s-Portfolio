import React from "react";
import SectionTitle from "./SectionTitle";

function Skills() {
  const Separator = () => (
    <span className="text-sandDark mx-2 h-[22px] text-sm align-middle inline-flex items-center font-normal leading-[1]">
      |
    </span>
  );

  return (
    <section
      id="skills"
      className="mt-0 md:mt-[68px] px-4 sm:px-6 lg:px-0 w-full flex flex-col sm:max-w-[750px] md:max-w-[950px]"
    >
      <div className="block w-full max-w-4xl mx-auto">
        <SectionTitle title={"Skills"} />
        <div className="text-[#592C03]">
          <div className="mb-5">
            <h3 className="font-normal text-[12px] md:text-[14px] lg:text-[16px] text-sandDark">
              Frontend Tools
            </h3>
            <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] my-1 flex flex-wrap ">
              <span>HTML</span>
              <Separator />
              <span>CSS</span>
              <Separator />
              <span>JavaScript</span>
              <Separator />
              <span>React</span>
              <Separator />
              <span>Next JS</span>
              <Separator />
              <span>Tailwind CSS</span>
              <Separator />
              <span>Redux</span>
              <Separator />
              <span>Styled Components</span>
            </div>
          </div>
          <div className="mb-1">
            <h3 className="font-normal text-[12px] md:text-[14px] lg:text-[16px] text-sandDark">
              Other Skills
            </h3>
            <div className="text-[14px] md:text-[16px] lg:text-[18px] flex flex-wrap">
              <span>Agile</span>
              <Separator />
              <span>Teamwork</span>
              <Separator />
              <span>Problem-Solving</span>
              <Separator />
              <span>Git/GitHub</span>
              <Separator />
              <span>RESTful APIs</span>
            </div>
          </div>
          <p className="text-[12px] md:text-[13px] text-sandDark italic mt-4">
            I also have basic backend experience — Node.js, Express, and REST APIs —
            from building full features end-to-end on projects like SquadMap and
            IntelliDoc.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
