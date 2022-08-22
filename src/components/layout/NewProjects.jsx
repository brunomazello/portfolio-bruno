import projeto01 from "../../img/projeto_github.png";

const NewProjects = () => {
  return (
    <div className="flex flex-wrap mb-10 bg-black w-full ml-5 mr-5">
      <div className="border rounded hover:border-green-500 duration-300 p-3 mt-10 hover:cursor-pointer grayscale hover:grayscale-0 flex flex-wrap justify-center items-center w-80 sm:mr-10 ml-5">
        <img
          src={projeto01}
          alt=""
          className="w-72 grayscale hover:grayscale-0 duration-300 rounded"
        />
        <div className="w-56 mt-5 flex justify-center items-center flex-wrap mb-5">
          <h1 className="text-white font-bold hover:text-green-500">
            Consulta Github
          </h1>
          <p className="text-white font-mono">
            Consulta repositórios no Github pelo nome de usuário
          </p>
        </div>
      </div>
      <div className="border rounded hover:border-green-500 duration-300 p-3 mt-10 hover:cursor-pointer grayscale hover:grayscale-0 flex flex-wrap justify-center items-center w-80 sm:mr-10 ml-5">
        <img
          src={projeto01}
          alt=""
          className="w-72 grayscale hover:grayscale-0 duration-300 rounded"
        />
        <div className="w-56 mt-5 flex justify-center flex-wrap mb-5">
          <h1 className="text-white font-bold hover:text-green-500">
            Consulta Github
          </h1>
          <p className="text-white font-mono">
            Consulta repositórios no Github pelo nome de usuário
          </p>
        </div>
      </div>
      <div className="border rounded hover:border-green-500 duration-300 p-3 mt-10 hover:cursor-pointer grayscale hover:grayscale-0 flex flex-wrap justify-center items-center w-80 sm:mr-10 ml-5">
        <img src={projeto01} alt="" className="w-72 rounded" />
        <div className="w-56 mt-5 flex justify-center flex-wrap mb-5">
          <h1 className="text-white text-center font-bold hover:text-green-500">
            Consulta Github
          </h1>
          <p className="text-white  text-center font-mono">
            Consulta repositórios no Github pelo nome de usuário
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
