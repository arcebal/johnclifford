import { motion } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

import profile from "../../assets/images/profile.png";

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden bg-black px-8 pt-24"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-between gap-12 lg:flex-row">
        <HeroContent />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className="absolute h-80 w-80 rounded-full bg-red-600/20 blur-[120px]" />

          <img
            src={profile}
            alt="JC Ceballos"
            className="relative w-[320px] drop-shadow-[0_0_40px_rgba(255,0,0,0.25)] lg:w-[430px]"
          />
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default Hero;