function NewProject(props) {
  return (
    <div className="border rounded hover:border-green-500 duration-300 p-3 h-auto mt-10 hover:cursor-pointer grayscale hover:grayscale-0 flex flex-wrap justify-center items-center w-80 sm:mr-5 ml-5">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img
          src={props.img}
          className="w-72 grayscale hover:grayscale-0 duration-300 rounded"
        />
      </a>
      <div className="w-56 mt-5 flex justify-center items-center flex-wrap mb-5">
        <a href={props.link} target="_blank" rel="noreferrer">
          <h1 className="text-white font-bold hover:text-green-500">
            {props.name}
          </h1>
          <p className="text-white font-mono">{props.content}</p>
        </a>
      </div>
    </div>
  );
}
export default NewProject;
