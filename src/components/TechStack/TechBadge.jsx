import { motion } from "framer-motion";

function TechBadge({ tech }) {
  const Icon = tech.icon;

  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.05,
      }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3 rounded-xl border border-red-900/20 bg-white/5 px-4 py-3 backdrop-blur-md hover:border-red-500/40 hover:bg-red-500/10"
    >
      <Icon className="text-2xl text-red-500" />

      <span className="font-medium text-gray-200">
        {tech.name}
      </span>
    </motion.div>
  );
}

export default TechBadge;