import React from "react";
import { LinkedinLogo, InstagramLogo } from "phosphor-react";

function Contact() {
  return (
    <section id="contact" className="mt-40 px-72 pb-20 w-full text-black">
      <h2 className="text-xl border-l border-3 border-[#F7861D] pl-2 text-[18px] font-normal mb-4 text-black leading-[22.79px]">
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
          {" "}
          <LinkedinLogo size={22} weight="light" />
          Felicia Udosen
        </span>

        {/* <span className="text-black">
          <XLogo size={32} weight="light" /> size={22} weight="light" />
          @liciacodes
        </span> */}
        <span className="text-black flex">
          <InstagramLogo size={22} weight="light" />
          @Liciacodes_
        </span>
      </div>
    </section>
  );
}

export default Contact;
