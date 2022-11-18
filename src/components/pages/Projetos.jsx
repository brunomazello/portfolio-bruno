import Projects from "../layout/Projects";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Projetos = () => {
  return (
    <div className="flex justify-center sm:bg-black" name="projetos">
      <AnimationOnScroll animateIn="animate__bounceIn">
        <div className="bg-black p-5 w-92">
          <a
            href="https://github.com/brunomazello?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="text-white font-mono text-2xl sm:text-7xl hover:text-pink-600 duration-300 hover:cursor-pointer">
              Lista de Projetos
            </h1>
          </a>

          <Projects />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Projetos;
