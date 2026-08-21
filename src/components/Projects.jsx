import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowSquareOut } from "phosphor-react";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import MagneticButton from "./MagneticButton";
import { DURATION, EASE_SIGNATURE } from "../lib/motion";

const TEASER_LENGTH = 100;

const truncate = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSentenceEnd = truncated.lastIndexOf(".");
  if (lastSentenceEnd > maxLength * 0.4) {
    return text.slice(0, lastSentenceEnd + 1);
  }
  return text.substr(0, text.lastIndexOf(" ", maxLength)) + "...";
};

function TechPill({ children }) {
  return (
    <span className="text-[12px] lg:text-[13px] font-medium text-ink border border-sand/50 bg-sand/10 rounded-full px-3 py-1 whitespace-nowrap">
      {children}
    </span>
  );
}

function ProjectCard({ project }) {
  const hasCaseStudyLink = Boolean(project.caseStudyUrl);
  const mediaRef = useRef(null);
  const mediaInView = useInView(mediaRef, { once: true, margin: "200px" });

  return (
    <motion.div
      layout
      className="flex flex-col md:flex-row items-stretch gap-4 mb-14 md:gap-x-5 w-full rounded-lg border border-transparent hover:border-accent/30 p-3 -m-3 transition-colors duration-base ease-signature"
    >
      <div className="flex flex-col w-full md:w-[45%]">
        <div className="flex flex-col h-full border border-accent overflow-hidden rounded-md">
          <div ref={mediaRef} className="h-48 flex-grow overflow-hidden">
            {project.media.type === "video" ? (
              mediaInView ? (
                <motion.video
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: DURATION.base, ease: EASE_SIGNATURE }}
                  src={project.media.src}
                  poster={project.media.poster}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={project.media.poster}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )
            ) : (
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: DURATION.base, ease: EASE_SIGNATURE }}
                src={project.media.src}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>
          <MagneticButton strength={0.15} className="block">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="w-full py-4 px-5 text-sm text-white bg-charcoal hover:bg-gradient-to-r from-charcoal to-[#613309] cursor-pointer transition-colors duration-base ease-signature">
                View Live Link*
              </button>
            </a>
          </MagneticButton>
        </div>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#613309] text-sm mt-2 block w-full py-1 px-1 hover:text-accent font-medium transition-colors duration-fast ease-signature"
        >
          View on Github
        </a>
      </div>

      <div className="flex flex-col w-full md:w-[50%] md:mt-0">
        <h3 className="text-[26px] text-ink font-medium">{project.title}</h3>

        <p className="text-ink mt-2">
          {hasCaseStudyLink
            ? truncate(project.description, TEASER_LENGTH)
            : project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech) => (
            <TechPill key={tech}>{tech}</TechPill>
          ))}
        </div>

        {hasCaseStudyLink && (
          <a
            href={project.caseStudyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-accentText text-sm font-medium mt-4 self-start hover:text-ink transition-colors duration-fast ease-signature"
          >
            Read full case study
            <ArrowSquareOut size={16} weight="bold" />
          </a>
        )}
      </div>
    </motion.div>
  );
}

function Projects() {
  return (
    <section className="mt-20 md:mt-[148px] flex flex-col items-center px-4 sm:px-6 lg:px-0 w-full">
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle title={"Projects "} projectNumber={projects.length} />

        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
