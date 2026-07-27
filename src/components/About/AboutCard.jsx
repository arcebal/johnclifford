import { motion } from "framer-motion";
import {
  FaUser,
  FaGraduationCap,
  FaSchool,
  FaLocationDot,
  FaCode,
} from "react-icons/fa6";

import profile from "../../data/profile";

function AboutCard() {
  const items = [
    {
      icon: <FaUser />,
      label: "Name",
      value: profile.name,
    },
    {
      icon: <FaGraduationCap />,
      label: "Education",
      value: profile.degree,
    },
    {
      icon: <FaSchool />,
      label: "University",
      value: profile.university,
    },
    {
      icon: <FaLocationDot />,
      label: "Location",
      value: profile.location,
    },
    {
      icon: <FaCode />,
      label: "Focus",
      value: profile.focus,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="rounded-3xl border border-red-900/20 bg-white/5 p-8 backdrop-blur-lg"
    >
      <h3 className="mb-8 text-2xl font-bold text-white">
        Developer Profile
      </h3>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 border-b border-white/5 pb-5 last:border-none"
          >
            <div className="mt-1 text-red-500 text-lg">
              {item.icon}
            </div>

            <div>
              <p className="text-sm text-gray-500">
                {item.label}
              </p>

              <p className="text-white font-medium">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default AboutCard;