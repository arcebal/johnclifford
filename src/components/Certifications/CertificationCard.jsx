import { motion } from "framer-motion";

function CertificationCard({ certification, onClick }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      onClick={() => onClick(certification)}
      className="group cursor-pointer overflow-hidden rounded-3xl border border-red-900/20 bg-white/5 backdrop-blur-md"
    >
      <div className="relative overflow-hidden">
        <img
          src={certification.image}
          alt={certification.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        <span className="absolute left-4 top-4 rounded-full bg-red-600 px-4 py-1 text-xs font-semibold text-white">
          {certification.category}
        </span>
      </div>

      <div className="space-y-2 p-6">
        <h3 className="text-xl font-semibold text-white">
          {certification.title}
        </h3>

        <p className="text-gray-400">
          {certification.issuer}
        </p>

        <p className="text-sm text-red-400">
          {certification.year}
        </p>
      </div>
    </motion.div>
  );
}

export default CertificationCard;