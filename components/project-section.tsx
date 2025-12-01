"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import { Project } from "../lib/types";
import Link from "next/link";
import { useSectionInView } from "@/hooks/use-section-in-view";

type ProjectCardProps = Project & {
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const ProjectSection = () => {
  const { ref } = useSectionInView("Projects");

  const ProjectCard = (data: ProjectCardProps) => {
    return (
      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={data.index}
        className="flex flex-col rounded border p-4 cursor-pointer"
      >
        <Link
          href={data.links.preview}
          target="_blank"
          aria-label={data.title}
          className="overflow-hidden rounded"
        >
          <img
            src={data?.image}
            className="pointer-events-none mx-auto object-cover h-40 w-full object-top"
          />
        </Link>
        <h3 className="mt-4 text-xl font-medium ">{data.title}</h3>
        <p className="text-muted-foreground mb-4 mt-1">{data.description}</p>
        <div className="flex flex-wrap gap-2">
          {data.technologies.map((tech) => (
            <div key={tech} className="rounded-full border px-3 py-1 text-sm ">
              {tech}
            </div>
          ))}
        </div>
        <div className="mt-auto flex w-full items-center justify-between px-2">
          <Link
            href={data.links.preview}
            target="_blank"
            className="inline-block mt-4 text-sm underline-offset-4 hover:underline "
          >
            Visit
          </Link>
          <Link
            href={data.links.github}
            target="_blank"
            className="inline-block mt-4 text-sm underline-offset-4 hover:underline"
          >
            Code
          </Link>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="my-10 scroll-mt-28 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        viewport={{
          once: true,
        }}
      >
        <SectionHeading
          heading="Projects"
          content="Projects I worked on. Each of them containing it's own case study"
        />
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projectsData.map((i, index) => (
          <ProjectCard key={i.title} {...i} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
