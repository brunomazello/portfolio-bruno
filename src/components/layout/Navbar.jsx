const Navbar = () => {
  return (
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
      <div class="container px-4 mx-auto flex flex-wrap items-center justify-between mt-3">
        <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a
            class="text-sm font-bold text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-green-500 hover:cursor-pointer hover:ease-in duration-300"
            href="#"
          >
            Bruno Mazello
          </a>
          <button
            class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
          >
            <span class="block relative w-6 h-px rounded-sm bg-white"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
          </button>
        </div>
        <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul class="flex flex-col lg:flex-row list-none ml-auto">
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-500 hover:cursor-pointer hover:ease-in duration-300"
                href="#"
              >
                <span class="ml-2">Home</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-500 hover:cursor-pointer hover:ease-in duration-300"
                href="#"
              >
                <span class="ml-2">Projetos</span>
              </a>
            </li>
            <li class="nav-item">
              <a
                class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-500 hover:cursor-pointer hover:ease-in duration-300"
                href="#"
              >
                <span class="ml-2">Contato</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;