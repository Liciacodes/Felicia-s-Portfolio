import React, { useState } from "react";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

function Projects() {
  const Separator = () => (
    <span className="text-[#B9A390]  py-1 h-[22px] text-sm align-middle">
      |
    </span>
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
            <div className="flex flex-col w-full md:w-[448px] md:h-[291px]">
              <div className="border border-[#F7861D] flex flex-col h-full">
                <div className="flex-grow h-48 md:h-auto">
                  <img
                    src={project.image}
                    alt={`${project.title} project screenshot`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full py-[18px] px-[20px] text-sm text-white bg-black hover:bg-gradient-to-r from-[#000000] to-[#613309]">
                    View Live Link*
                  </button>
                </a>
              </div>
              <p className="text-[#B9A390] font-normal text-sm mt-2">
                *You'll be redirected to the live preview link
              </p>
            </div>

            <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
              <div className="relative h-full  md:w-[466px]">
                {/* Added relative positioning and padding-bottom */}
                <h3 className="text-[26px] text-black font-medium mb-4 leading-auto ">
                  {project.title}
                </h3>
                <div className="text-black">
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
                <div className="absolute left-0 right-0 mt-[26px]">
                  {/* Positioned absolutely */}
                  <p className="text-[#B9A390] text-[12px] font-normal leading-[15.49px] hidden md:block mb-2">
                    Dev Stack
                  </p>
                  <div className="text-black font-medium text-[18px] hidden md:flex gap-x-3">
                    {project.technologies.map((tech, techIndex) => (
                      <React.Fragment key={techIndex}>
                        {techIndex > 0 && <Separator />}
                        <span>{tech}</span>
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
