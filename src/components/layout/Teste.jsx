// import projeto01 from "../../img/projeto_github.png";
// import projeto02 from "../../img/projeto_healthbr.png";
// import projeto03 from "../../img/projeto_rpgbar.png";
// import projeto04 from "../../img/projeto_ecommerce.png";

function Teste(props) {
  return (
    <div className="flex flex-wrap mb-10 bg-black ml-5 mr-5">
      <div className="border rounded hover:border-green-500 duration-300 p-3 h-auto mt-10 hover:cursor-pointer grayscale hover:grayscale-0 flex flex-wrap justify-center items-center w-80 sm:mr-10 ml-5">
        <a href={props.link}>
          <img
            src={props.img}
            className="w-72 grayscale hover:grayscale-0 duration-300 rounded"
          />
        </a>
        <div className="w-56 mt-5 flex justify-center items-center flex-wrap mb-5">
          <a href={props.link}>
            <h1 className="text-white font-bold hover:text-green-500">
              {props.nome}
            </h1>
            <p className="text-white font-mono">{props.descricao}</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Teste;
