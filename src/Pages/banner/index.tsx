import ContatoButton from "../../Components/Button/Button";
const Banner = () => {
  return (
    <div className=" bg-banner lg:flex pb-24  lg:bg-cover lg:h-screen">
      <div className="mx-auto flex flex-col items-center justify-center lg:mt-32 mt-36">
        <div className="lg:flex lg:items-center">
          <div className="relative w-[109px] h-[58px] lg:w-[240px] lg:mr-3 mx-auto  bg-[100%_100%]">
            <img className="lg:w-52 lg:-top-6" alt="Vector" src="/Vector.png" />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-8xl lg:text-7xl">
              VISION <br />{" "}
            </h1>
            <div className="flex">
              <h1 className="flex text-6xl lg:text-7xl mx-auto">
                {" "}
                VR <img src="/logo.png" className="w-[90%] mx-auto lg:mx-0" />
              </h1>
            </div>
          </div>
        </div>
        <div className="relative -top-16 lg:-left-10 lg:-top-20">
          <img src="/glasses.png" className="w-full max-w-2xl mx-auto" />
          <p className="container px-6 text-center md:max-w-4xl font-extralight text-xl">
            Imagine a possibilidade de levar seus clientes para dentro da sua
            empresa, sem a necessidade de estar fisicamente presente. Poder
            levar a sua marca para feiras, eventos e reuniões dentro de um
            óculos.{" "}
            <span className="font-bold">
              Tudo isso se torna possível graças à Realidade Virtual. Não
              existem fronteiras para essa tecnologia!
            </span>
          </p>
        </div>
        <div className="lg:w-[50%] mx-auto">
          <ContatoButton />
        </div>
      </div>
    </div>
  );
};

export default Banner;
