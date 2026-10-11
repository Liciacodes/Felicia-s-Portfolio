import React from "react";
import SectionTitle from "./SectionTitle";
import Reveal from "./Reveal";
import TechPill from "./TechPill";
import { skillGroups } from "../data";

function Skills() {
  return (
    <section
      id="skills"
      className="mt-20 md:mt-[148px] scroll-mt-24 px-4 sm:px-6 lg:px-0 w-full flex flex-col sm:max-w-[750px] md:max-w-[950px]"
    >
      <div className="block w-full max-w-4xl mx-auto">
        <SectionTitle title={"Skills"} />

        {skillGroups.map((group) => (
          <Reveal key={group.title} className="mb-6 last:mb-0">
            <h3 className="font-normal text-[14px] lg:text-[16px] text-sandDark">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {group.skills.map((skill) => (
                <TechPill key={skill}>{skill}</TechPill>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
