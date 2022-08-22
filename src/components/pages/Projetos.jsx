import NewProjects from "../layout/NewProjects";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Projetos = () => {
  return (
    <div className="flex justify-center sm:bg-black" name="projetos">
      <AnimationOnScroll animateIn="animate__bounceIn">
        <div className="bg-black p-5">
          <a
            href="https://github.com/brunomazello?tab=repositories"
            target="_blank"
          >
            <h1 className="text-white font-mono text-2xl sm:text-7xl hover:text-pink-600 duration-300 hover:cursor-pointer">
              Lista de Projetos
            </h1>
          </a>

          <NewProjects />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Projetos;
