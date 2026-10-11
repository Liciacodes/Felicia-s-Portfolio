import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa";
import flowboardVideo from "./videos/flowboard.mp4";
import flowboardPoster from "./videos/flowboard-poster.webp";
import triageVideo from "./videos/triage.mp4";
import triagePoster from "./videos/triage-poster.webp";
import squadMapPoster from "./videos/squadmap-poster.webp";
import intellidocVideo from "./videos/intellidoc.mp4";
import intellidocPoster from "./videos/intellidoc-poster.jpg";
import toukiVideo from "./videos/touki.mp4";
import toukiPoster from "./videos/touki-poster.jpg";
import mathStreakVideo from "./videos/maths-streak.mp4";
import mathStreakPoster from "./videos/maths-streak-poster.webp";

export const EMAIL = "udosenfelicia@gmail.com";
export const RESUME_URL = "/Felicia_Udosen_Frontend_Developer.pdf";

export const projects = [
  {
    title: "Flowboard",
    description:
      "A visual workflow editor. Build automations on a canvas, validate them, and run them. Every run lights up the path it takes, and each condition explains in plain words why it chose YES or NO.",
    technologies: [
      "React",
      "TypeScript",
      "React Flow",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    link: "https://flowboard-five-tau.vercel.app/",
    media: { type: "video", src: flowboardVideo, poster: flowboardPoster },
    githubLink: "https://github.com/Liciacodes/flowboard",
  },
  {
    title: "Triage",
    description:
      "A payment operations dashboard for detecting and managing settlement mismatches, stuck pending payments, and reversed transactions. It uses persistent alerts to track issues from detection through acknowledgement and resolution.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Vitest",
    ],
    link: "https://triage-client.vercel.app/",
    media: { type: "video", src: triageVideo, poster: triagePoster },
    githubLink: "https://github.com/Liciacodes/triage-client",
    caseStudyUrl:
      "https://liciacodes.hashnode.dev/how-i-built-triage-a-payment-operations-dashboard-for-managing-transaction-exceptions",
  },
  {
    title: "SquadMap",
    description:
      "SquadMap is a real-time, event-based friend finder that helps people find each other on the fly. It uses a Socket.io layer for live location updates and presence.",
    technologies: ["React", "TypeScript", "Node.js", "Socket.io"],
    link: "https://squad-map-kappa.vercel.app/",
    media: { type: "image", src: squadMapPoster },
    caseStudyUrl:
      "https://liciacodes.hashnode.dev/how-i-built-squadmap-a-real-time-location-sharing-app-for-events",
  },
  {
    title: "IntelliDoc",
    description:
      "An AI-powered document assistant where users can upload PDFs and DOCX files and interact with the content. Using the Groq AI API, it generates summaries, extracts key points and answers questions from the document.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "Supabase",
      "Groq AI API",
      "JWT",
    ],
    link: "https://intellidocclient.netlify.app/",
    media: { type: "video", src: intellidocVideo, poster: intellidocPoster },
    githubLink: "https://github.com/Liciacodes/intellidoc-client",
  },
  {
    title: "Touki Grotesk",
    description:
      "A type specimen website built for Udi Foundry to showcase and sell the Touki Grotesk typeface. Features font previews, interactive glyph explorer, weight and style tester, and a clean editorial layout that reflects the typeface's post-colonial African identity.",
    technologies: ["Next.js", "React", "TypeScript", "JavaScript"],
    link: "https://www.udifoundry.com/fonts/touki-grotesk",
    media: { type: "video", src: toukiVideo, poster: toukiPoster },
    githubLink: "https://github.com/Liciacodes/Udi-Foundry-V1",
  },
  {
    title: "MathStreak",
    description:
      "A daily maths quiz. Each day the Groq AI API generates one fresh question; answer it to keep your streak alive. A React and TypeScript client talks to an Express API that stores questions and streaks in PostgreSQL through Prisma.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "Groq AI API",
    ],
    link: "https://maths-streak-client.vercel.app/quiz",
    media: { type: "video", src: mathStreakVideo, poster: mathStreakPoster },
    githubLink: "https://github.com/Liciacodes/MathsStreak-client",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Redux",
      "Zustand",
      "TanStack Query",
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
      "Supabase",
      "REST APIs",
    ],
  },
  {
    title: "Tools & Testing",
    skills: ["Git", "GitHub", "Vitest", "Supertest", "Postman"],
  },
];

export const contactLinks = [
  {
    href: "https://www.linkedin.com/in/felicia-udosen-74828923a/",
    text: "Felicia Udosen",
    icon: FaLinkedin,
  },
  {
    href: "https://twitter.com/Liciacodes_",
    text: "@liciacodes_",
    icon: FaTwitterSquare,
  },
  {
    href: "https://github.com/Liciacodes/",
    text: "@Liciacodes",
    icon: FaGithub,
  },
];
