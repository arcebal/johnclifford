function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-5">
      <a
        href="#projects"
        className="rounded-xl bg-red-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-500"
      >
        View Projects
      </a>

      <a
        href="#contact"
        className="rounded-xl border border-red-500 px-8 py-4 font-semibold text-red-500 transition-all duration-300 hover:bg-red-600 hover:text-white"
      >
        Contact Me
      </a>
    </div>
  );
}

export default HeroButtons;