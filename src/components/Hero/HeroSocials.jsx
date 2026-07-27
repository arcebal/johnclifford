import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function HeroSocials() {
  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/YOUR_USERNAME",
    },
    {
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/YOUR_USERNAME",
    },
    {
      icon: <FaFacebook />,
      link: "https://facebook.com/YOUR_USERNAME",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com/YOUR_USERNAME",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:YOUR_EMAIL@gmail.com",
    },
  ];

  return (
    <div className="mt-10 flex items-center gap-6">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.link}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-red-900/30 bg-zinc-900/70 p-3 text-xl text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:text-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.3)]"
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}

export default HeroSocials;