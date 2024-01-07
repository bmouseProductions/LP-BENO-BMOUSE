import alem from "../../assets/pensamos_alem.png";
import roberta from "../../assets/tom&roberta.png";

const Pensamento = () => {
  return (
    <div className=" mt-36 mx-auto text-center">
      <div className="font-extralight">
        <img src={alem} className="mx-auto  " />
      </div>

      <p className="text-sm sm:text-base md:text-lg text-gray-400 lg:max-w-4xl mx-auto lg:text-xl xl:text-2xl lg:-mt-36 lg:-mb-[35rem] -mb-44 lg:relative lg:-bottom-24">
        A BMouse é muito mais do que uma agência de marketing. Somos uma agência
        de criatividade com um compromisso inabalável em levar a sua marca a
        novos patamares.{" "}
      </p>

      <div className="mx-auto">
        <img src={roberta} className="mx-auto lg:-mt-96 lg:-mb-32 p-0" />
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
