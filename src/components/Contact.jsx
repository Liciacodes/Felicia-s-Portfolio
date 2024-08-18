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
    {<Icon size={19} weight="light" className="mt-[-7px]" />}
    {/* {typeof Icon === "string" ? (
      <img src={Icon} alt={children} style={{ width: 24, height: 24 }} />
    ) : (
     
    )} */}
    {children}
  </a>
);
function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col px-4 md:px-0 w-full md:w-[950px] mt-20 md:mt-[148px] mb-20 md:mb-[148px] text-[#592C03]"
    >
      <div className="w-full max-w-4xl mx-auto">
        <SectionTitle title={"Say Hello"} />

        <a
          href="mailto: hello@feliciaudosen.com"
          className="text-[#592C03] font-normal md:text-[26px] text-lg mb-4 block cursor-pointer"
        >
          hello@feliciaudosen.com
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
