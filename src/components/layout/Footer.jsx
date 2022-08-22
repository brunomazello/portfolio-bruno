import { BsLinkedin, BsGithub, BsBehance } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex justify-center">
      <footer className="p-10 flex item-center justify-around">
        <a
          href="https://www.linkedin.com/in/brunomazello/"
          target="_blank"
          rel="noopener"
        >
          <BsLinkedin className="text-5xl text-white hover:text-blue-600 duration-500 hover:cursor-pointer hover:text-7xl mr-10" />
        </a>
        <a
          href="https://github.com/brunomazello/"
          target="_blank"
          rel="noopener"
        >
          <BsGithub className="text-5xl text-white hover:text-white duration-500 hover:cursor-pointer hover:text-7xl mr-10" />
        </a>
        <a
          href="https://www.behance.net/brunormazello"
          target="_blank"
          rel="noopener"
        >
          <BsBehance className="text-5xl text-white duration-500 hover:cursor-pointer hover:text-7xl" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;
