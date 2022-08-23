import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const Navbar = () => {
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between mt-3">
        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
          <a
            className="text-sm font-bold text-2xl leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:text-pink-600 hover:cursor-pointer hover:ease-in duration-300"
            href="#"
          >
            Bruno Mazello
          </a>
        </div>
        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
          <ul className="flex flex-col lg:flex-row list-none ml-auto">
            <li className="nav-item">
              <a
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-500 hover:cursor-pointer hover:ease-in duration-300"
                href="#"
              >
                <span className="ml-2">Home</span>
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="projetos"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <span className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-500 hover:cursor-pointer hover:ease-in duration-300">
                  Projetos
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contato"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                <span className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-green-500 hover:cursor-pointer hover:ease-in duration-300">
                  Contato
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
