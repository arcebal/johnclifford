import { motion } from "framer-motion";
import TechBadge from "./TechBadge";

function TechCategory({ category }) {
  const CategoryIcon = category.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl border border-red-900/20 bg-white/5 p-10 backdrop-blur-lg"
    >
      <div className="flex items-center gap-4">
        <CategoryIcon className="text-4xl text-red-500" />

        <div>
          <h3 className="text-3xl font-bold text-white">
            {category.title}
          </h3>

          <p className="mt-2 text-gray-400">
            {category.description}
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.technologies.map((tech) => (
          <TechBadge
            key={tech.name}
            tech={tech}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default TechCategory;