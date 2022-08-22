import imgbruno from "../../img/img_bruno.png";
import AnimatedText from "react-animated-text-content";

const Index = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center flex-wrap">
        <img
          src={imgbruno}
          alt=""
          className="mb-14 mt-12 w-100 sd:w-60 mr-12 hover:ease-in duration-300 grayscale hover:grayscale-0"
        />
        <div>
          <h1 className="text-white font-mono text-7xl hover:text-green-500 hover:ease-in duration-300">
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="float"
              interval={0.06}
              duration={0.8}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              Desenvolvedor Frontend
            </AnimatedText>
          </h1>
          <h1 className="text-white mb-14 font-mono mt-12  hover:text-green-500 hover:ease-in duration-300">
            <AnimatedText
              type="wave" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 1.1,
                ease: "ease-in-out",
              }}
              animationType="float"
              interval={0.06}
              duration={0.8}
              tag="p"
              className="animated-paragraph"
              includeWhiteSpaces
              threshold={0.1}
              rootMargin="20%"
            >
              React / ReactJS / HTML5 / CSS3 / JavaScript / Git
            </AnimatedText>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
