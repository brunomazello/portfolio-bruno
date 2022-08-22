import NewProjects from "../layout/NewProjects";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Projetos = () => {
  return (
    <div className="flex justify-center sm:bg-black">
      <AnimationOnScroll animateIn="animate__bounceIn">
        <div className="bg-black p-5">
          <h1
            name="projetos"
            className="text-white font-mono text-2xl sm:text-7xl hover:text-pink-600 duration-300"
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
