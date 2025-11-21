import { useInView } from "react-intersection-observer";
import { useActiveSection } from "@/components/context/active-section-provider";
import type { SectionName } from "@/lib/types";
import { useEffect } from "react";

export const useSectionInView = (
  sectionName: SectionName,
  threshold = 0.75
) => {
  const { ref, inView } = useInView();

  const {
    setActiveSection,
    setTimeOfLastClick,
    activeSection,
    timeOfLastClick,
  } = useActiveSection();

  useEffect(() => {
    const handleScroll = () => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
        setActiveSection(sectionName);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return window.removeEventListener("scroll", handleScroll);
  }, [inView, sectionName, setActiveSection, timeOfLastClick]);

  return {ref}
};
