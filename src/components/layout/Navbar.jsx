const Navbar = () => {
  return (
    <nav className="flex justify-between bg-zinc-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight hover:text-amber-500">
          Bruno Mazello
        </span>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
        <div className="text-sm lg:flex-grow ">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-amber-500 mr-4"
          >
            Home
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-amber-500 mr-4"
          >
            Projetos
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-amber-500"
          >
            Contato
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
