import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import MagneticButton from "./MagneticButton";
import {
  Barcode,
  ClipboardText,
  DownloadSimple,
  EnvelopeSimple,
} from "phosphor-react";
import CheckedIcon from "./CheckedIcon";
import { EMAIL, RESUME_URL } from "../data";
import { fadeIn, fadeInUp, staggerContainer } from "../lib/motion";

const NAME = "Felicia Udosen";

export default function Hero({ scrollToSection }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email: ", err);
      });
  };

  return (
    <section
      id="hero"
      className="relative flex flex-col mt-16 md:mt-[120px] w-full px-4 sm:px-4 md:px-8 lg:px-0 sm:max-w-[750px] md:max-w-[950px]"
    >
      <motion.div
        className="w-full max-w-4xl mx-auto"
        variants={staggerContainer(0.1)}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeInUp}
          className="inline-flex items-center gap-2 text-[13px] md:text-[14px] text-ink border border-sand/50 bg-sand/10 rounded-full px-3 py-1"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#138533] opacity-60 animate-ping motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#138533]" />
          </span>
          Open to remote roles
        </motion.p>

        <motion.h1
          aria-label={NAME}
          className="text-[36px] sm:text-[52px] md:text-[68px] font-medium text-ink leading-[1.05] tracking-tight mt-5"
          variants={staggerContainer(0.04)}
        >
          {NAME.split(" ").map((word) => (
            <span
              key={word}
              aria-hidden="true"
              className="inline-block whitespace-nowrap mr-[0.3em]"
            >
              {word.split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={fadeInUp}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-[18px] md:text-[22px] font-normal text-ink leading-8 md:leading-9 mt-5 md:w-[673px]"
        >
          👋🏽 I&apos;m a frontend developer who ships full-stack, and a part-time
          pro swimmer. For 3+ years I&apos;ve been building web apps with React,
          TypeScript and Node.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row mt-8 md:items-center gap-3 md:gap-x-4"
        >
          <MagneticButton className="w-full lg:w-[241px]">
            <Button
              label="View Projects"
              Icon={<Barcode size={36} weight="light" />}
              onClick={() => scrollToSection("projects")}
            />
          </MagneticButton>

          <MagneticButton className="w-full lg:w-[241px]">
            <Button
              label="Download Resume"
              variant="outline"
              Icon={<DownloadSimple size={22} weight="light" />}
              iconHover="group-hover:translate-y-0.5"
              href={RESUME_URL}
              download
            />
          </MagneticButton>

          <button
            className="flex items-center justify-between md:justify-start w-full md:w-auto px-0 md:px-4 py-1 md:gap-x-2 text-ink text-[18px] font-medium"
            onClick={copyToClipboard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isCopied ? "copied" : "copy"}
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex items-center justify-between md:justify-start w-full md:gap-x-2 whitespace-nowrap"
              >
                <span aria-live="polite">
                  {isCopied ? "Copied!" : "Copy Email"}
                </span>
                {isCopied ? (
                  <CheckedIcon />
                ) : isHovered ? (
                  <ClipboardText
                    size={22}
                    weight="light"
                    className="text-accent"
                  />
                ) : (
                  <EnvelopeSimple
                    size={22}
                    weight="light"
                    className="text-accent"
                  />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
