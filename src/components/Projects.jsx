import React, { useEffect, useRef } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { ArrowSquareOut, ArrowUpRight } from "phosphor-react";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";
import TechPill from "./TechPill";

// Projects with a case study show only their opening sentence as a teaser.
const firstSentence = (text) => {
  const end = text.indexOf(". ");
  return end === -1 ? text : text.slice(0, end + 1);
};

const mediaClass =
  "w-full h-full object-cover transition-transform duration-base ease-signature group-hover/media:scale-105";

function ProjectVideo({ project }) {
  const videoRef = useRef(null);
  const inView = useInView(videoRef, { amount: 0.3 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduceMotion) return;
    if (inView) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [inView, reduceMotion]);

  return (
    <video
      ref={videoRef}
      src={project.media.src}
      poster={project.media.poster}
      aria-label={`${project.title} demo`}
      className={mediaClass}
      preload="none"
      controls={reduceMotion}
      loop
      muted
      playsInline
    />
  );
}

function ProjectCard({ project }) {
  const hasCaseStudyLink = Boolean(project.caseStudyUrl);

  return (
    <Reveal
      as="article"
      className="flex flex-col md:flex-row items-stretch gap-4 mb-14 md:gap-x-5 w-full rounded-lg border border-transparent hover:border-accent/30 p-3 -m-3 transition-colors duration-base ease-signature"
    >
      <div className="flex flex-col w-full md:w-[45%]">
        <div className="flex flex-col h-full border border-accent overflow-hidden rounded-md">
          <div className="group/media h-48 flex-grow overflow-hidden">
            {project.media.type === "video" ? (
              <ProjectVideo project={project} />
            ) : (
              <img
                src={project.media.src}
                alt={`${project.title} preview`}
                className={mediaClass}
                loading="lazy"
              />
            )}
          </div>
          <MagneticButton strength={0.15} className="block">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 w-full py-4 px-5 text-sm text-white bg-charcoal hover:bg-gradient-to-r from-charcoal to-[#613309] transition-colors duration-base ease-signature"
            >
              View live
              <ArrowUpRight
                size={16}
                weight="bold"
                className="text-accent transition-transform duration-base ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </MagneticButton>
        </div>
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#613309] text-sm mt-2 block w-full py-1 px-1 hover:text-accentText font-medium transition-colors duration-fast ease-signature"
          >
            View on Github
          </a>
        )}
      </div>

      <div className="flex flex-col w-full md:w-[50%] md:mt-0">
        <h3 className="text-[26px] text-ink font-medium">{project.title}</h3>

        <p className="text-ink mt-2">
          {hasCaseStudyLink
            ? firstSentence(project.description)
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
    </Reveal>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="mt-20 md:mt-[148px] scroll-mt-24 flex flex-col items-center px-4 sm:px-6 lg:px-0 w-full"
    >
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle title={"Projects "} projectNumber={projects.length} />

        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
