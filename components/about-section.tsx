"use client";

import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import Skills from "./skills";

const AboutSection = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus
          error dignissimos repellendus eveniet doloremque doloribus aspernatur
          placeat fugit perferendis.
        </p>
        <p>
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills then don't
          hesitate to{" "}
          <Link
            href={siteConfig.links.contactForm}
            className="underline-offset-4 hover:underline"
          >
            contact
          </Link>{" "}
          me.
        </p>
      </div>
      <Skills/>
    </motion.section>
  );
};

export default AboutSection;
