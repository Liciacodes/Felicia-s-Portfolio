import image1 from "../src/assets/onboarding Screen.png";
import image2 from "../src/assets/customer-order-dashboard.png";
import image3 from "../src/assets/game.png";
import { LinkedinLogo, InstagramLogo } from "phosphor-react";
import Xlogo from "./components/Xlogo";

export const projects = [
  {
    title: "Onboarding Screen Project",
    description:
      "This is an Onboarding Screen Project. It takes you through the process of creating an account which is also know as signing up, logging in by retrieving the user's details from the database.",
    technologies: ["HTML", "CSS", "Javascript", "React Js"],
    link: "https://feliciaonboarding-project.netlify.app/",
    image: image1,
  },
  {
    title: "Customer and Order Dashboard",
    description:
      "This is a responsive Customers and Order dashboard project built with Nextjs, chartjs and TailwindCSS. Data is fetched dynamically and displayed on the charts.",
    technologies: ["HTML", "CSS", "Javascript", "React JS"],
    link: "https://sample-dashboard-eta.vercel.app/",
    image: image2,
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe game built as a web application with an intelligent twist. This interactive game allows two players to take turns marking X's and O's on a 3x3 grid, with the added feature of move suggestions to enhance gameplay.",
    technologies: ["HTML", "CSS", "Javascript", "Nextjs"],
    image: image3,
    link: "https://connect-4-clone.vercel.app/",
  },
];

export const contactLinks = [
  {
    href: "https://www.linkedin.com/in/felicia-udosen-74828923a/",
    iconType: "linkedin",
    text: "Felicia Udosen",
    icon: LinkedinLogo,
  },
  {
    href: "https://twitter.com/Liciacodes",
    iconType: "xlogo",
    text: "@liciacodes",
    icon: Xlogo,
  },
  {
    href: "https://instagram.com/Liciacodes_",
    iconType: "instagram",
    text: "@liciacodes_",
    icon: InstagramLogo,
  },
];
