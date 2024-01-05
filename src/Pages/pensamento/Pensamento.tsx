import alem from "../../assets/alem.png";
import roberta from "../../assets/tom&roberta.png";

const Pensamento = () => {
  return (
    <div className=" mt-36 mx-auto text-center">
      <div className="font-extralight">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light -mb-14 pr-80 xl:text-7xl">
          Pensamos
        </h1>
        <img src={alem} className="mx-auto" />
      </div>

      <p className="text-sm sm:text-base md:text-lg text-gray-400 lg:max-w-4xl mx-auto lg:text-xl xl:text-2xl -mt-36 -mb-96 relative -bottom-36">
        A BMouse é muito mais do que uma agência de marketing. Somos uma agência
        de criatividade com um compromisso inabalável em levar a sua marca a
        novos patamares.{" "}
      </p>

      <div className="mx-auto">
        <img src={roberta} className="mx-auto -mt-96 -mb-32" />
        <img
          src="/down.png"
          className="mt-10 moving-image mx-auto"
          alt="Seta para baixo"
        />
      </div>
    </div>
  );
};

export default Pensamento;
