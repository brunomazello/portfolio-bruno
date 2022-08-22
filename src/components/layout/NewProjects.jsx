import projeto01 from "../../img/projeto_github.png";

const NewProjects = () => {
  return (
    <div className="flex flex-wrap justify-items-center items-center mb-10 bg-black ml-10 mr-10">
      <div className="border rounded hover:border-green-500 duration-300 p-3 mt-10 hover:cursor-pointer grayscale hover:grayscale-0  ">
        <img
          src={projeto01}
          alt=""
          className="w-72 grayscale hover:grayscale-0 duration-300 rounded"
        />
        <div className="w-56 mt-5 flex  bg-blackitems-center flex-wrap justify-center ml-12 mb-5">
          <h1 className="text-white font-bold hover:text-green-500">
            Consulta Github
          </h1>
          <p className="text-white font-mono">
            Consulta repositórios no Github pelo nome de usuário
          </p>
        </div>
      </div>
      <div className="border rounded hover:border-green-500 duration-300 p-3 mt-10 hover:cursor-pointer grayscale hover:grayscale-0  ">
        <img
          src={projeto01}
          alt=""
          className="w-72 grayscale hover:grayscale-0 duration-300 rounded"
        />
        <div className="w-56 mt-5 flex items-center flex-wrap justify-center ml-12 mb-5">
          <h1 className="text-white font-bold hover:text-green-500">
            Consulta Github
          </h1>
          <p className="text-white font-mono">
            Consulta repositórios no Github pelo nome de usuário
          </p>
        </div>
      </div>
      <div className="border rounded hover:border-green-500 duration-300 p-3 mt-10 hover:cursor-pointer grayscale hover:grayscale-0  ">
        <img src={projeto01} alt="" className="w-72 rounded" />
        <div className="w-56 mt-5 flex items-center flex-wrap justify-center ml-12 mb-5">
          <h1 className="text-white font-bold hover:text-green-500">
            Consulta Github
          </h1>
          <p className="text-white font-mono">
            Consulta repositórios no Github pelo nome de usuário
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
