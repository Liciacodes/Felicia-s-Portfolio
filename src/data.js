import squadMapPoster from "../src/videos/squadmap-poster.png";
import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa";
import dashboardVideo from "../src/videos/dashboard.mp4";
import dashboardPoster from "../src/videos/dashboard-poster.jpg";
import toukiVideo from "../src/videos/touki.mp4";
import toukiPoster from "../src/videos/touki-poster.jpg";
import intellidocVideo from "../src/videos/intellidoc.mp4";
import intellidocPoster from "../src/videos/intellidoc-poster.jpg";
import mathStreakGif from "../src/videos/maths-streak.gif";

export const projects = [
  {
    title: "SquadMap",
    description:
      "SquadMap is a real-time, event-based friend finder that helps people find each other on the fly. It uses a Socket.io layer for live location updates and presence.",
    technologies: ["React", "TypeScript", "Node.js", "Socket.io"],
    link: "https://squad-map-kappa.vercel.app/",
    media: { type: "image", src: squadMapPoster, poster: squadMapPoster },
    githubLink: "https://github.com/Liciacodes",
    caseStudyUrl:
      "https://liciacodes.hashnode.dev/how-i-built-squadmap-a-real-time-location-sharing-app-for-events",
  },
  {
    title: "Intellidoc",
    description:
      "An AI-powered document assistant where users can upload PDFs and DOCX files and interact with the content. Using the Groq AI API, it generates summaries, extracts key points and answers questions from the document.",
    technologies: ["React", "Node.js", "Express", "Prisma", "Supabase", "Groq AI API", "JWT"],
    link: "https://intellidocclient.netlify.app/",
    media: { type: "video", src: intellidocVideo, poster: intellidocPoster },
    githubLink: "https://github.com/Liciacodes/intellidoc-client",
  },
  {
    title: "Touki Grotesk",
    description:
      "A type specimen website built for Udi Foundry to showcase and sell the Touki Grotesk typeface. Features font previews, interactive glyph explorer, weight and style tester, and a clean editorial layout that reflects the typeface's post-colonial African identity.",
    technologies: ["Javascript", "ReactJs", "Typescript",'Nextjs'],
    link: "https://www.udifoundry.com/fonts/touki-grotesk",
    media: { type: "video", src: toukiVideo, poster: toukiPoster },
    githubLink: "https://github.com/Liciacodes/Udi-Foundry-V1",
  },
  {
    title: "MathStreak",
    description:
      "A daily math quiz app. One AI-generated question a day, answer it, build your streak.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Prisma", "PostgreSQL", "Groq AI API"],
    link: "https://maths-streak-client.vercel.app/quiz",
    media: { type: "image", src: mathStreakGif, poster: mathStreakGif },
    githubLink: "https://github.com/Liciacodes/MathsStreak-client",
  },
  {
    title: "Customer and Order Dashboard",
    description:
      "This is a responsive Customers and Order dashboard project built with Nextjs, chartjs and TailwindCSS. Data is fetched dynamically and displayed on the charts.",
    technologies: ["HTML", "CSS", "Javascript", "ReactJS"],
    link: "https://sample-dashboard-eta.vercel.app/",
    media: { type: "video", src: dashboardVideo, poster: dashboardPoster },
    githubLink: "https://github.com/Liciacodes/Customer-and-Order-Dashboard",
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

