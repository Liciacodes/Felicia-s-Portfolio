import React from "react";
import SectionTitle from "./SectionTitle";
import { contactLinks } from "../data";
import Separator from "./Separator";
const ContactLink = ({ href, icon: Icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-black flex items-center gap-x-2 text-[18px] font-medium"
  >
    {typeof Icon === "string" ? (
      <img src={Icon} alt={children} style={{ width: 18, height: 18 }} />
    ) : (
      <Icon size={24} weight="light" />
    )}
    {children}
  </a>
);
function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col  px-6 md:px-0 w-full md:w-[950px] mt-20 md:mt-[148px] mb-20 md:mb-[148px] text-black"
    >
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle title={"Say Hello"} />

        <a
          href="mailto:udosenfelicia@gmail.com"
          className="text-black font-normal md:text-[26px] text-lg mb-2 block"
        >
          udosenfelicia@gmail.com
        </a>
        <div className="flex flex-col md:flex-row md:items-center md:space-y-0 gap-x-3">
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
