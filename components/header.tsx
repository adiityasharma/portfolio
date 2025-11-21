"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { navLinks } from "@/lib/data";
import { NavLink } from "@/lib/types";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useActiveSection } from "./context/active-section-provider";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    activeSection,
    setActiveSection,
    setTimeOfLastClick,
    timeOfLastClick,
  } = useActiveSection();

  const MobileNavItems = (data: NavLink) => {
    return (
      <li
        onClick={() => setIsOpen(false)}
        className=" py-3 text-sm not-last:border-b border-neutral-700 dark:hover:text-neutral-200"
      >
        <Link href={data.href}>{data.name}</Link>
      </li>
    );
  };

  const DesktopNavItems = (data: NavLink) => {
    return (
      <li className={`py-2 px-2 rounded-full`}>
        <Link
          onClick={() => {
            setActiveSection(data.name);
            setTimeOfLastClick(Date.now());
          }}
          className={`text-neutral-400 relative px-4 py-2 ${activeSection === data.name && "text-white"}`}
          href={data.href}
        >
          {data.name}
          {data.name === activeSection && (
            <motion.div
              layoutId="activeSection"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
              className="bg-muted absolute inset-0 -z-10 rounded-full "
            ></motion.div>
          )}
        </Link>
      </li>
    );
  };

  return (
    <motion.header
      initial={{
        y: -100,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      className="fixed top-5 left-[50%] -translate-x-1/2 z-20"
    >
      {/* mobile menu */}
      <div className="flex items-center gap-2 sm:hidden">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              size="lg"
              className="bg-background/80 backdrop:blur-sm border-neutral-700 cursor-pointer"
            >
              Menu <Icons.chevronDown className="ml-2 size-4" />
            </Button>
          </DialogTrigger>

          <DialogContent className="border-neutral-700">
            <DialogHeader>
              <DialogTitle className="self-start font-medium text-md">
                Navigation
              </DialogTitle>
            </DialogHeader>
            <nav className="dark:text-neutral-400 ">
              <ul>
                {navLinks.map((i) => (
                  <MobileNavItems key={i.name} {...i} />
                ))}
              </ul>
            </nav>
          </DialogContent>
        </Dialog>

        <ThemeToggle className="bg-background/80 backdrop-blur-sm size-10 " />
      </div>

      {/* desktop menu */}

      <nav className=" hidden sm:block  backdrop-blur-2xl border rounded-full p-2">
        <ul className="flex justify-between items-center">
          {navLinks.map((i) => (
            <DesktopNavItems key={i.name} {...i} />
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
