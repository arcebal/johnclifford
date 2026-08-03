import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaLaravel,
  FaPhp,
  FaCode,
  FaTools,
  FaDatabase,
} from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiFramer,
  SiMysql,
  SiPostman,
} from "react-icons/si";

const techStack = [
  {
    title: "Frontend Layer",
    icon: FaCode,
    description:
      "Building responsive, accessible, and interactive user interfaces.",

    technologies: [
      { name: "React", icon: FaReact },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },

  {
    title: "Backend Layer",
    icon: FaDatabase,
    description:
      "Developing server-side applications and managing databases.",

    technologies: [
      { name: "Laravel", icon: FaLaravel },
      { name: "PHP", icon: FaPhp },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    title: "Development Toolkit",
    icon: FaTools,
    description:
      "Tools that support my workflow, collaboration, and productivity.",

    technologies: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: FaCode },
      { name: "Figma", icon: FaFigma },
      { name: "Postman", icon: SiPostman },
      { name: "CapCut", icon: FaTools },
    ],
  },
];

export default techStack;