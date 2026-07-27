import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      <p className="mb-3 text-lg font-semibold uppercase tracking-[0.3em] text-red-500">
        Welcome
      </p>

      <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
        Hi, I'm <span className="text-red-500">JC</span>
      </h1>

      <div className="mt-5 h-10">
        <TypeAnimation
          sequence={[
            "Student Developer",
            2000,
            "Frontend Developer",
            2000,
            "React Enthusiast",
            2000,
            "Continuous Learner",
            2000,
            "SINGLEEE",
            2000,
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
          className="text-2xl font-semibold text-gray-300"
        />
      </div>

      <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
        Passionate about creating modern, responsive, and interactive web
        applications while continuously learning new technologies and improving
        my craft as a future software developer.
      </p>

      <HeroButtons />

      <HeroSocials />
    </motion.div>
  );
}

export default HeroContent;