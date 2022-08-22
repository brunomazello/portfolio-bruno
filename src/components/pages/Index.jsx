import imgbruno from "../../img/img_bruno.png";

const Index = () => {
  return (
    <div className="">
      <div className="flex justify-center items-center">
        <img
          src={imgbruno}
          alt=""
          className="opacity-100 hover:opacity-50 hover:cursor-pointer mb-12 mt-12 w-100 sd:w-60 mr-12"
        />
        <div>
          <h1 className="text-white font-mono text-7xl">Desenvolvedor Frontend</h1>
          <h1 className="text-white font-sans">Desenvolvedor Frontend</h1>
        </div>
      </div>
    </div>
  );
};

export default Index;
