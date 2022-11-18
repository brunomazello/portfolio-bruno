import NewProject from "./NewProject";
import projeto01 from "../../img/projeto_github.png";
import projeto02 from "../../img/projeto_healthbr.png";
import projeto03 from "../../img/projeto_rpgbar.png";
import projeto04 from "../../img/projeto_ecommerce.png";

function Projects(props) {
  return (
    <div className="flex flex-wrap mb-10 bg-black ml-5 mr-5">
      <NewProject
        name="Consulta Github"
        img={projeto01}
        content="Consulta repositórios no Github pelo nome de usuário"
        link="https://github.com/brunomazello?tab=repositories"
      />
      <NewProject
        name="Health Brasil"
        img={projeto02}
        content="Dicas e informações sobre saúde. Cálculo de IMC em JavaScript."
        link="https://github.com/brunomazello?tab=repositories"
      />
      <NewProject
        name="Projeto RPG Bar"
        img={projeto03}
        content="Projeto desenvolvido para uma ficha de bar em modo RPG."
        link="https://www.behance.net/gallery/107754067/RPG-Bar-APP"
      />
      <NewProject
        name="Modelo de E-commerce"
        img={projeto04}
        content=" E-commerce desenvolvido para melhorias no conhecimento de UX/UI."
        link="https://www.behance.net/gallery/107891641/E-Commerce"
      />
    </div>
  );
}

export default Projects;
