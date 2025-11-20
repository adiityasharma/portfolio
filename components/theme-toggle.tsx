import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { Icons } from "./icons";
import { cn } from "@/lib/utils";

type ThemeToggleProps = {
  className?: string;
};

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={cn("border-neutral-700", className)}
      variant="outline"
      size="icon"
      aria-label="theme toggle"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Icons.moon className="size-4 dark:block" />
      ) : (
        <Icons.sun className="size-4 dark:hidden" />
      )}
    </Button>
  );
};

export default ThemeToggle;
