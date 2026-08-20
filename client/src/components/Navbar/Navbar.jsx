function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-white shadow-md">

      <h1 className="text-2xl font-bold">
        Abebe Tigabu
      </h1>

      <ul className="flex gap-8 font-medium">
        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>

        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;