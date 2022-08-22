import projeto01 from "../../img/projeto_github.png";

const NewProjects = () => {
  return (
    <div className="container flex">
      <div className="border p-3 mt-10 mr-10 hover:cursor-pointer">
        <h1 className="text-white">Projeto 1</h1>
        <p className="text-white">Blablabla</p>
        <img src={projeto01} alt="" className="w-80" />
      </div>
      <div className="border p-3 mt-10 mr-10 hover:cursor-pointer">
        <h1 className="text-white">Projeto 1</h1>
        <p className="text-white">Blablabla</p>
        <img src={projeto01} alt="" className="w-80" />
      </div>
      <div className="border p-3 mt-10 mr-10 hover:cursor-pointer">
        <h1 className="text-white">Projeto 1</h1>
        <p className="text-white">Blablabla</p>
        <img src={projeto01} alt="" className="w-80" />
      </div>
    </div>
  );
};

export default NewProjects;
