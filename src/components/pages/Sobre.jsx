import imgbruno from "../../img/img_bruno.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

const Sobre = () => {
  return (
    <div className=" bg-black p-10">
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <h1 className="text-white font-bold">Sobre</h1>
        <div className="flex justify-center items-center flex-wrap">
          <p className="text-white mr-12 ml-12 text-justify mb-12">
            Olá! Me chamo Bruno Mazello! Sou um Designer e Desenvolvedor
            Front-end que ama trabalhar com pessoas. Atualmente estou me
            aprofundando ainda mais em JavaScript já tendo experiência em HTML5
            e CSS3. Sou uma pessoa muito tranquila e de fácil comunicação,
            sempre procuro trazer o melhor para o ambiente em que estou. Tenho
            orgulho em dizer que sou uma pessoa muito focada no que gosto e com
            isso procuro sempre melhorar profissionalmente e pessoalmente.
            Algumas tecnologias conhecidas: AZUREXD, Figma, Photoshop, HTML5,
            CSS3, JAVASCRIPT, BOOTSTRAP, REACT.
          </p>
          <img src={imgbruno} alt="" />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Sobre;
