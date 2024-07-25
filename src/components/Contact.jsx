import React from "react";
import { LinkedinLogo, InstagramLogo } from "phosphor-react";
import XLogo from "../assets/XLogo.png";
import { Link } from "react-router-dom";

function Contact() {
  const Separator = () => (
    <span className="text-[#B9A390] mx-1  h-[22px] text-sm align-middle hidden md:block">
      |
    </span>
  );
  return (
    <section
      id="contact"
      className="flex flex-col mt-10 px-6 md:px-0 w-full md:w-[950px] mb-20 text-black"
    >
      <div className="block w-full max-w-4xl mx-auto">
        <h2 className="text-xl border-l-4 border-[#F7861D] pl-2 text-[18px] font-normal mb-6 text-black leading-[22.79px]">
          Contact
        </h2>
        <p className="mb-2">
          <a
            href="mailto:udosenfelicia@gmail.com"
            className="text-black font-normal md:text-[26px] text-lg "
          >
            udosenfelicia@gmail.com
          </a>
        </p>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 text-black gap-x-3 mb-3">
          <a
            href="https://www.linkedin.com/in/felicia-udosen-74828923a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="text-black flex gap-x-1 items-center">
              <LinkedinLogo size={22} weight="light" />
              Felicia Udosen
            </span>
          </a>
          <Separator />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/Liciacodes"
          >
            <span className="text-black flex gap-x-1 items-center">
              <img src={XLogo} alt="xlogo" srcset="" />
              @liciacodes
            </span>
          </a>
          <Separator />

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://instagram.com/Liciacodes_"
          >
            <span className="text-black font-normal  gap-x-1 flex items-center">
              <InstagramLogo size={22} weight="light" />
              @liciacodes_
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
