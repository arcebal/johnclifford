import { motion } from "framer-motion";
import { FaAnglesDown } from "react-icons/fa6";

function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        delay: 1.5,
        duration: 2,
        repeat: Infinity,
      }}
      className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-gray-400 transition hover:text-red-500"
    >
      <span className="mb-2 text-xs uppercase tracking-[0.3em]">
        Scroll
      </span>

      <FaAnglesDown className="text-xl" />
    </motion.a>
  );
}

export default ScrollIndicator;