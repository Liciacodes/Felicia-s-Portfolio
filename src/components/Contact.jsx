import React from "react";
import SectionTitle from "./SectionTitle";
import { contactLinks } from "../data";
import Separator from "./Separator";
const ContactLink = ({ href, icon: Icon, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#592C03] flex items-center gap-x-2 text-[18px] font-medium cursor-pointer"
  >
    {<Icon size={20} weight="light" className="mt-[-7px]" />}

    {children}
  </a>
);
function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col px-4 sm:px-6 lg:px-0 w-full sm:max-w-[750px]  md:max-w-[950px]  mt-20 md:mt-[148px] mb-20 md:mb-[148px] text-[#592C03]"
    >
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle title={"Say Hello"} />

        <a
          href="mailto: udosenfelicia@gmail.com"
          className="text-[#592C03] font-normal md:text-[26px] text-lg mb-4 block cursor-pointer"
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
