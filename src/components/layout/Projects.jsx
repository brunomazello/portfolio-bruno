import NewProject from "./NewProject";
import projeto01 from "../../img/projeto_github.png";
import projeto02 from "../../img/projeto_healthbr.png";
import projeto03 from "../../img/projeto_rpgbar.png";
import projeto04 from "../../img/projeto_ecommerce.png";
import projeto05 from "../../img/projeto_daily.png";
import project06 from "../../img/projeto_cuesta.png";

function Projects(props) {
  return (
    <div className="flex flex-wrap mb-10 ml-2 w-auto">
      <NewProject
        name="Consulta Github"
        img={projeto01}
        content="Consulta repositórios no Github pelo nome de usuário"
        link="https://consulta-perfil-gh.vercel.app/"
      />
      <NewProject
        name="Health Brasil"
        img={projeto02}
        content="Dicas e informações sobre saúde. Cálculo de IMC em JavaScript."
        link="https://brunomazello.github.io/HealthBrasil/"
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
      <NewProject
        name="Daily Advice"
        img={projeto05}
        content="Projeto desenvolvido utilizando AXIOS. Faz a consulta a uma API e retorna um conselho aleatório."
        link="https://daily-advice-ten.vercel.app/"
      />

      <NewProject
        name="Cuesta Steel"
        img={project06}
        content="Site desenvolvido para uma construtora no ramo de Steel Frame, sendo desenvolvido com React."
        link="http://www.cuestasteel.com.br/"
      />
    </div>
  );
}

export default Projects;
