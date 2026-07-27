import { motion } from "framer-motion";
import profile from "../../data/profile";

function AboutStory() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-3xl font-bold text-white">
        Building for the Future
      </h3>

      <div className="mt-8 space-y-6">
        {profile.bio.map((paragraph, index) => (
          <p
            key={index}
            className="leading-8 text-gray-400"
          >
            {paragraph}
          </p>
        ))}
      </div>

      <div className="mt-10">
        <h4 className="mb-5 text-lg font-semibold text-white">
          Strengths
        </h4>

        <div className="flex flex-wrap gap-3">
          {profile.strengths.map((strength, index) => (
            <span
              key={index}
              className="rounded-full border border-red-900/30 bg-red-500/10 px-4 py-2 text-sm text-red-300"
            >
              {strength}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h4 className="mb-5 text-lg font-semibold text-white">
          Currently Learning
        </h4>

        <div className="flex flex-wrap gap-3">
          {profile.technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-white/5 px-4 py-2 text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default AboutStory;