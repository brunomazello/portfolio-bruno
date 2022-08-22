import projeto01 from "../../img/projeto_github.png";
import projeto02 from "../../img/projeto_healthbr.png";
import projeto03 from "../../img/projeto_rpgbar.png";
import projeto04 from "../../img/projeto_ecommerce.png";

const NewProjects = () => {
  return (
    <div className="flex flex-wrap mb-10 bg-black ml-5 mr-5">
      <div className="border rounded hover:border-green-500 duration-300 p-3 h-auto mt-10 hover:cursor-pointer grayscale hover:grayscale-0 flex flex-wrap justify-center items-center w-80 sm:mr-10 ml-5">
        <a
          href="https://github.com/brunomazello/consulta-perfil-gh"
          target="_blank"
        >
          <img
            src={projeto01}
            alt=""
            className="w-72 grayscale hover:grayscale-0 duration-300 rounded"
          />
        </a>
        <div className="w-56 mt-5 flex justify-center items-center flex-wrap mb-5">
          <a
            href="https://github.com/brunomazello/consulta-perfil-gh"
            target="_blank"
          >
            <h1 className="text-white font-bold hover:text-green-500">
              Consulta Github
            </h1>
            <p className="text-white font-mono">
              Consulta repositórios no Github pelo nome de usuário.
            </p>
          </a>
        </div>
      </div>
      <div className="border rounded hover:border-green-500 duration-300 p-3 h-auto mt-10 hover:cursor-pointer grayscale hover:grayscale-0 flex flex-wrap justify-center items-center w-80 sm:mr-10 ml-5">
        <a
          href="https://www.behance.net/gallery/107891641/E-Commerce"
          target="_blank"
        >
          <img src={projeto04} alt="" className="w-72 rounded" />
        </a>
        <div className="w-56 mt-5 flex justify-center flex-wrap mb-5">
          <a
            href="https://www.behance.net/gallery/107891641/E-Commerce"
            target="_blank"
          >
            <h1 className="text-white text-center font-bold hover:text-green-500">
              Modelo de E-commerce
            </h1>
            <p className="text-white  text-center font-mono">
              Projeto desenvolvido para melhorias no conhecimento de UX/UI.
              Baseado em um e-commerce de variedades.
            </p>
          </a>
        </div>
      </div>
      <div className="border rounded hover:border-green-500 duration-300 p-3 h-auto mt-10 hover:cursor-pointer grayscale hover:grayscale-0 flex flex-wrap justify-center items-center w-80 sm:mr-10 ml-5">
        <a href="https://github.com/brunomazello/HealthBrasil" target="_blank">
          <img
            src={projeto02}
            alt=""
            className="w-72 grayscale hover:grayscale-0 duration-300 rounded"
          />
        </a>
        <div className="w-56 mt-5 flex justify-center flex-wrap mb-5">
          <a
            href="https://github.com/brunomazello/HealthBrasil"
            target="_blank"
          >
            <h1 className="text-white font-bold hover:text-green-500">
              Health Brasil
            </h1>
            <p className="text-white font-mono">
              Dicas e informações sobre saúde. Cálculo de IMC em JavaScript.
            </p>
          </a>
        </div>
      </div>
      <div className="border rounded hover:border-green-500 duration-300 h-auto p-3 mt-10 hover:cursor-pointer grayscale hover:grayscale-0 flex flex-wrap justify-center items-center w-80 sm:mr-10 ml-5">
        <a
          href="https://www.behance.net/gallery/107754067/RPG-Bar-APP"
          target="_blank"
        >
          <img src={projeto03} alt="" className="w-56 rounded" />
        </a>
        <div className="w-56 mt-5 flex justify-center flex-wrap mb-5">
          <a
            href="https://www.behance.net/gallery/107754067/RPG-Bar-APP"
            target="_blank"
          >
            <h1 className="text-white text-center font-bold hover:text-green-500">
              Projeto RPG Bar
            </h1>
            <p className="text-white  text-center font-mono">
              Projeto desenvolvido para uma ficha de bar em modo RPG.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewProjects;
