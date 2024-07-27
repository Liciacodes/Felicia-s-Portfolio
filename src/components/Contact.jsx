import React from "react";
import { LinkedinLogo, InstagramLogo } from "phosphor-react";
import XLogo from "../assets/XLogo.png";
import SectionTitle from "./SectionTitle";

const ContactLink = ({ href, icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-black flex items-center gap-x-1"
  >
    {icon}
    {children}
  </a>
);

const Separator = () => (
  <span className="text-[#B9A390] mx-1 h-[22px] text-sm align-middle hidden md:block">
    |
  </span>
);

function Contact() {
  const contactLinks = [
    {
      href: "https://www.linkedin.com/in/felicia-udosen-74828923a/",
      icon: <LinkedinLogo size={22} weight="light" />,
      text: "Felicia Udosen",
    },
    {
      href: "https://twitter.com/Liciacodes",
      icon: <img src={XLogo} alt="X logo" />,
      text: "@liciacodes",
    },
    {
      href: "https://instagram.com/Liciacodes_",
      icon: <InstagramLogo size={22} weight="light" />,
      text: "@liciacodes_",
    },
  ];

  return (
    <section
      id="contact"
      className="flex flex-col mt-10 px-6 md:px-0 w-full md:w-[950px] mb-20 text-black"
    >
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle title={"Say Hello"} />
        {/* <h2 className="text-xl border-l-4 border-[#F7861D] pl-2 text-[18px] font-normal mb-6 text-black leading-[22.79px]">
          Contact
        </h2> */}
        <a
          href="mailto:udosenfelicia@gmail.com"
          className="text-black font-normal md:text-[26px] text-lg mb-2 block"
        >
          udosenfelicia@gmail.com
        </a>
        <div className="flex flex-col md:flex-row md:items-center space-y-3 md:space-y-0 gap-x-3">
          {contactLinks.map((link, index) => (
            <React.Fragment key={link.href}>
              {index > 0 && <Separator />}
              <ContactLink href={link.href} icon={link.icon}>
                {link.text}
              </ContactLink>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
