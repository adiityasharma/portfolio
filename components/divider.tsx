"use client";

import { motion } from "framer-motion";

const Divider = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
      className="bg-neutral-700 my-6 h-8 w-1 rounded-full sm:my-12"
    />
  );
};

export default Divider;
