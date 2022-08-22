import NewProjects from "../layout/NewProjects";

const Projetos = () => {
  return (
    <div className="flex items-center justify-center bg-black">
      <div>
        <h1 className="text-white font-mono text-7xl hover:text-green-500 mt-10">
          Lista de Projetos
        </h1>
        <NewProjects />
      </div>
    </div>
  );
};

export default Projetos;
