import React from "react";
import { LinkedinLogo, InstagramLogo } from "phosphor-react";

function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col mt-10 md:mt-40 px-6 md:px-0 w-full md:w-[950px] mb-20 text-black"
    >
      <div className="block w-full max-w-4xl mx-auto">
        <h2 className="text-xl border-l-4  border-[#F7861D] pl-2 text-[18px] font-normal mb-4 text-black leading-[22.79px]">
          Say Hello
        </h2>
        <p>
          <a
            href="mailto:felicialoudons@gmail.com"
            className="text-black font-normal text-[26px]"
          >
            udosenfelicia@gmail.com
          </a>
        </p>
        <div className="flex text-black gap-x-3 mb-3">
          <span className="text-black flex gap-x-2">
            <LinkedinLogo size={22} weight="light" />
            Felicia Udosen
          </span>

          {/* <span className="text-black">
          <XLogo size={32} weight="light" /> size={22} weight="light" />
          @liciacodes
        </span> */}
          <span className="text-black font-normal text-xl flex gap-x-2">
            <InstagramLogo size={22} weight="light" />
            @Liciacodes_
          </span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
