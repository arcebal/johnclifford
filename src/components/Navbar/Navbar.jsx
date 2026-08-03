function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-red-900/30 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        {/* Logo */}
        <h1 className="text-xl font-bold tracking-wide text-red-500">
          JC Ceballos
        </h1>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 text-sm font-medium text-gray-300">
          <li>
            <a href="#hero" className="transition hover:text-red-500">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="transition hover:text-red-500">
              About
            </a>
          </li>

          <li>
            <a href="#tech-stack" className="transition hover:text-red-500">
              Technology Stack
            </a>
          </li>

          <li>
            <a href="#projects" className="transition hover:text-red-500">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="transition hover:text-red-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;