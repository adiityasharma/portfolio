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
  {
    name: "Experience",
    href: "#experience",
  },
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
    video: "assets/videos/chat-collector-demo.mp4",
    title: "Chat Collector Pro",
    description:
      "A comprehensive chat collector application built with React and Node.js, featuring real-time collaboration, project tracking, and team management capabilities.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "Material-UI",
    ],
    links: {
      preview: "#",
      github: "#",
      githubApi: "#",
    },
  },
  {
    video: "assets/videos/magic-bento-demo.mp4",
    title: "Magic Bento Box",
    description:
      "Magic Bento Box is a platform for creating and sharing magic recipes that can be used in the game.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Stripe",
    ],
    links: {
      preview: "#",
      github: "#",
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
  // { name: "Sass", icon: <Icons.sass className="size-12" /> },
  { name: "Tailwind", icon: <Icons.tailwind className="size-12" /> },
  { name: "JavaScript", icon: <Icons.javascript className="size-12" /> },
  { name: "TypeScript", icon: <Icons.typescript className="size-12" /> },
  { name: "React", icon: <Icons.react className="size-12" /> },
  { name: "NextJS", icon: <Icons.nextjs className="size-12" /> },
  // { name: "NestJS", icon: <Icons.nestjs className="size-12" /> },
  // { name: "Prisma", icon: <Icons.prisma className="size-12" /> },
  // { name: "Docker", icon: <Icons.docker className="size-12" /> },
];
