import image1 from "../src/assets/onboarding Screen.png";
import image2 from "../src/assets/customer-order-dashboard.png";
import image3 from "../src/assets/game.png";
import image4 from '../src/assets/Touki.jpeg'
import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa";
import LoginGif from "../src/gifs/Login Screen.gif";
import DashboardGif from "../src/gifs/Dashboard eCom.gif";
import GameGif from "../src/gifs/Game-Felz.gif";
import ToukiGif from "../src/gifs/Touki.gif"
import intellidocGif from "../src/gifs/Intellidoc.gif";

export const projects = [
  {
    title: "Touki Grotesk",
    description:
      "A type specimen website built for Udi Foundry to showcase and sell the Touki Grotesk typeface. Features font previews, interactive glyph explorer, weight and style tester, and a clean editorial layout that reflects the typeface's post-colonial African identity.",
    technologies: ["Javascript", "ReactJs", "Typescript",'Nextjs'],
    link: "https://www.udifoundry.com/fonts/touki-grotesk",
    staticImage: image4,
    gifImage: ToukiGif,
    githubLink: "https://github.com/Liciacodes/Udi-Foundry-V1",
  },
  {
    title: "Intellidoc",
    description:
      "An AI-powered document assistant where users can upload PDFs and DOCX files and interact with the content. Using the Grok API, it generates summaries, extracts key points and answers questions from the document.",
    technologies: ["React", "Node.js", "Express", "Supabase", "Prisma", "Gemini API", "JWT", "TypeScript"],
    link: "https://intellidocclient.netlify.app/",
    staticImage: image4,
    gifImage: intellidocGif,
    githubLink: "https://github.com/Liciacodes/intellidoc-client",
  },
  {
    title: "Onboarding Screen Project",
    description:
      "This is an Onboarding Screen Project. It takes you through the process of creating an account which is also know as signing up, logging in by retrieving the user's details from the database.",
    technologies: ["HTML", "CSS", "Javascript", "ReactJs"],
    link: "https://feliciaonboarding-project.netlify.app/",
    staticImage: image1,
    gifImage: LoginGif,
    githubLink: "https://github.com/Liciacodes/Onboarding-Screen-Project",
  },
  {
    title: "Customer and Order Dashboard",
    description:
      "This is a responsive Customers and Order dashboard project built with Nextjs, chartjs and TailwindCSS. Data is fetched dynamically and displayed on the charts.",
    technologies: ["HTML", "CSS", "Javascript", "ReactJS"],
    link: "https://sample-dashboard-eta.vercel.app/",
    staticImage: image2,
    gifImage: DashboardGif,
    githubLink: "https://github.com/Liciacodes/Customer-and-Order-Dashboard",
  },
  {
    title: "Tic Tac Toe Game",
    description:
      "A classic Tic Tac Toe game built as a web application with an intelligent twist. This interactive game allows two players to take turns marking X's and O's on a 3x3 grid, with the added feature of move suggestions to enhance gameplay.",
    technologies: ["HTML", "CSS", "Javascript", "Nextjs"],
    staticImage: image3,
    gifImage: GameGif,
    link: "https://connect-4-clone.vercel.app/",
    githubLink: "https://github.com/Liciacodes/connect-4-clone",
  },
];

export const contactLinks = [
  {
    href: "https://www.linkedin.com/in/felicia-udosen-74828923a/",
    iconType: "linkedin",
    text: "Felicia Udosen",
    icon: FaLinkedin,
  },
  {
    href: "https://twitter.com/Liciacodes_",
    iconType: "xlogo",
    text: "@liciacodes_",
    icon: FaTwitterSquare,
  },
  {
    href: "https://github.com/Liciacodes/",
    iconType: "github",
    text: "@Liciacodes",
    icon: FaGithub,
  },
];

