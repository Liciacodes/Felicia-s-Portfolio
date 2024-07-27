import React, { useState } from "react";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";

function Projects() {
  const Separator = () => (
    <span className="text-[#B9A390] mx-2 h-[22px] text-sm align-middle">|</span>
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
    <section className="mt-10 flex flex-col items-center px-4 sm:px-6 lg:px-0 w-full">
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle title={"Projects "} projectNumber={projects.length} />
        {/* <h2 className="border-l-4 border-[#F7861D] pl-2 text-2xl font-normal mb-4 text-black leading-[22.79px] inline-block">
          Projects ({projects.length})
        </h2> */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-stretch gap-4 md:gap-12 mb-16 w-full"
          >
            <div className="flex flex-col w-full md:w-1/2">
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
                  <button className="w-full py-[18px] px-[20px] text-sm text-white bg-gradient-to-r from-[#000000] to-[#613309]">
                    View Live Link*
                  </button>
                </a>
              </div>
              <p className="text-[#B9A390] font-normal text-sm mt-2">
                *You'll be redirected to the live preview link
              </p>
            </div>

            <div className="flex flex-col w-full md:w-1/2 mt-4 md:mt-0">
              <div className="relative h-full pb-0 md:pb-8">
                {/* Added relative positioning and padding-bottom */}
                <h3 className="text-[28px] text-black font-medium mb-1 leading-[32.92px]">
                  {project.title}
                </h3>
                <div className="text-black mb-2">
                  <p className="md:hidden">
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
                <div className="absolute bottom-6 left-0 right-0">
                  {/* Positioned absolutely */}
                  <p className="text-[#B9A390] text-[12px] font-normal leading-[15.49px] mt-5 hidden md:block">
                    Dev Stack
                  </p>
                  <p className="text-black font-medium text-[18px] hidden md:block">
                    {project.technologies.map((tech, techIndex) => (
                      <React.Fragment key={techIndex}>
                        {techIndex > 0 && <Separator />}
                        <span>{tech}</span>
                      </React.Fragment>
                    ))}
                  </p>
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
