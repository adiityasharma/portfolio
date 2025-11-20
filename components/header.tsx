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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <div>
      {/* mobile menu */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="lg"
            className="bg-background/80 backdrop:blur-sm sm:hidden border-neutral-700 cursor-pointer"
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
      {/* desktop menu */}
      <ThemeToggle className="bg-background/80 backdrop-blur-sm sm:hidden" />
    </div>
  );
};

export default Header;
