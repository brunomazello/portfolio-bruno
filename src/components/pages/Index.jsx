import imgbruno from "../../img/img_bruno.png";
import AnimatedText from "react-animated-text-content";
import qrcode from "../../img/qr-curriculo.jpg";

const Index = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center flex-wrap">
        <img
          src={imgbruno}
          alt=""
          className="mb-12 2xl:mb-96 ml-14 mt-12 2xl:mt-24 w-80 sm:w-auto mr-12 hover:ease-in duration-300 grayscale hover:grayscale-0"
        />
        <div>
          <h1 className="text-white ml-4 font-mono text-3xl sm:text-7xl hover:text-pink-600 hover:ease-in duration-300">
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
          <h1 className="text-white mb-24 font-mono mt-12  hover:text-green-500 hover:ease-in duration-300">
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
            <div className="flex justify-center mt-10">
              <a
                href="https://drive.google.com/file/d/14zlKNufMAt56-C9mSr8yl3LDkCTMNorV/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={qrcode}
                  alt=""
                  className="w-32 rounded hover:w-40 duration-500"
                />
              </a>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
