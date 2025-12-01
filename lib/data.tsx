import { Icons } from "../components/icons";
import { Experience, NavLink, Project, Skill } from "./types";

export const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  // {
  //   name: "Experience",
  //   href: "#experience",
  // },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const projectsData: Project[] = [
  {
    image: "/elitecv.png",
    title: "Elite CV - Resume Builder",
    description:
      "A React-based resume builder website that allows users to create, customize, and download professional resumes quickly and easily.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind",
      "React Router",
      "Framer Motion",
      "Redux Toolkit",
    ],
    links: {
      preview: "https://elite-cv-psi.vercel.app/",
      github:
        "https://github.com/adiityasharma/elite.cv-resume-builder/tree/main/frontend",
      githubApi: "#",
    },
  },
  {
    image: "/ecomm.png",
    title: "E-comm",
    description:
      "A modern, responsive E-Commerce Frontend built with React. It provides users with a smooth shopping experience with features like product listing, search, cart management, and authentication.",
    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind",
      "React Router",
      "Redux Toolkit",
    ],
    links: {
      preview: "https://e-comm-mu-green.vercel.app/",
      github: "https://github.com/adiityasharma/e-comm",
      githubApi: "#",
    },
  },
  {
    image: "/giphy.png",
    title: "GIPHY",
    description:
      "A React + Tailwind-built replica of the popular Giphy.com interface, using the official Giphy API. This project was created for learning and refining frontend development skills.",
    technologies: ["React.js", "JavaScript", "Tailwind", "React Router"],
    links: {
      preview: "https://giphy-clone-bice-xi.vercel.app/",
      github: "https://github.com/adiityasharma/GIPHY-Clone",
      githubApi: "#",
    },
  },
  {
    image: "/streamerzz.png",
    title: "Streamerzz",
    description:
      "Optimize your streams, track real-time analytics, and engage your audience effortlessly—all in one place. Perfect for Twitch, YouTube, and Facebook streamers.",
    technologies: ["React.js", "JavaScript", "Tailwind", "Framer Motion"],
    links: {
      preview: "https://streamerzz-five.vercel.app/",
      github: "https://github.com/adiityasharma/Streamerzz",
      githubApi: "#",
    },
  },
] as const;

export const experiencesData: Experience[] = [
  {
    title: "softwate engineer",
    company: "google",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut?",
    period: "24 jun",
    technologies: ["React", "TypeScript", "AWS", "GraphQL", "Kubernetes"],
  },
  {
    title: "ui ux dev",
    company: "google",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, aut?",
    period: "24 jun",
    technologies: ["React", "TypeScript", "AWS", "GraphQL", "Kubernetes"],
  },
];

export const skillsData: Skill[] = [
  { name: "Sass", icon: <Icons.sass className="size-12" /> },
  { name: "Tailwind", icon: <Icons.tailwind className="size-12" /> },
  { name: "JavaScript", icon: <Icons.javascript className="size-12" /> },
  { name: "TypeScript", icon: <Icons.typescript className="size-12" /> },
  { name: "React", icon: <Icons.react className="size-12" /> },
  { name: "NextJS", icon: <Icons.nextjs className="size-12" /> },
  // { name: "NextJS", icon: <Icons.nextjs className="size-12" /> },
  // { name: "NestJS", icon: <Icons.nestjs className="size-12" /> },
  // { name: "Prisma", icon: <Icons.prisma className="size-12" /> },
  // { name: "Docker", icon: <Icons.docker className="size-12" /> },
];
