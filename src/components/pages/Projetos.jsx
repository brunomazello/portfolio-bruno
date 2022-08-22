import NewProjects from "../layout/NewProjects";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Projetos = () => {
  return (
    <div className="flex items-center justify-center">
      <AnimationOnScroll animateIn="animate__bounceIn">
        <div className="bg-black w-full h-full">
          <h1
            id="Projetos"
            className="text-white font-mono text-2xl sm:text-7xl hover:text-green-500 duration-300 mt-10"
          >
            Lista de Projetos
          </h1>

          <NewProjects />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Projetos;
