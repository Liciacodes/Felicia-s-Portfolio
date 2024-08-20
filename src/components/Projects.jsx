import React, { useState } from "react";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import HoverGif from "./HoverGif";

function Projects() {
  const Separator = () => (
    <span className="text-[#B9A390] h-[22px] text-sm align-middle">|</span>
  );

  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateDescription = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, text.lastIndexOf(" ", maxLength)) + "...";
  };

  return (
    <section className="mt-20 md:mt-[148px] flex flex-col items-center px-4 sm:px-6 lg:px-0 w-full">
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle title={"Projects "} projectNumber={projects.length} />

        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-stretch gap-4 mb-20 md:gap-y-0 md:gap-x-9 w-full"
          >
            <div className="flex flex-col w-full md:w-[448px]">
              <div className=" flex flex-col h-full border border-[#F7861D]">
                <div className="h-48 flex-grow">
                  <img
                    src={project.gifImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full py-4 px-5 text-sm text-white bg-black hover:bg-gradient-to-r from-[#000000] to-[#613309] cursor-pointer">
                    View Live Link*
                  </button>
                </a>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#613309] font-normal text-sm mt-2 text-center underline w-full py-1 px-5"
              >
                View on Github
              </a>
            </div>

            <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
              <div className="relative h-full w-full">
                <h3 className="text-[26px] text-[#592C03] font-medium w-full lg:w-[466px]">
                  {project.title}
                </h3>
                <div className="text-[#592C03]">
                  <p className="md:hidden text-lg">
                    {expandedDescriptions[index]
                      ? project.description
                      : truncateDescription(project.description, 100)}
                    {project.description.length > 100 && (
                      <button
                        onClick={() => toggleDescription(index)}
                        className="text-[#F7861D] ml-1"
                      >
                        {expandedDescriptions[index] ? "See less" : "See more"}
                      </button>
                    )}
                  </p>
                  <p className="hidden md:block">{project.description}</p>
                </div>
                <div className="hidden md:block absolute left-0 right-0 mt-[16px]">
                  <p className="text-[#B9A390] text-[12px] font-normal leading-[15.49px] mb-0 lg:mb-2">
                    Dev Stack
                  </p>
                  <div className="text-[#592C03] font-medium flex flex-wrap gap-x-3 gap-y-2 md:flex-nowrap md:gap-y-0">
                    {project.technologies.map((tech, techIndex) => (
                      <React.Fragment key={techIndex}>
                        {techIndex > 0 && <Separator />}
                        <span className="text-[14px] lg:text-[18px]">
                          {tech}
                        </span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
