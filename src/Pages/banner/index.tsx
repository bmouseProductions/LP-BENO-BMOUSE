import ContatoButton from "../../Components/Button/Button";
const Banner = () => {
  return (
    <div className=" ">
      <div className="mx-auto flex flex-col items-center justify-center lg:mt-32 mt-36">
        <div className="lg:flex lg:items-center">
          <div className="">
            <img
              className="absolute -top-20 lg:-top-5 right-0 lg:left-[30rem]"
              alt="Vector"
              src="/Camada_1.png"
            />
          </div>
          <div className="text-center lg:text-left lg:pl-56">
            <h1 className="text-8xl lg:text-7xl">
              VISION <br />{" "}
            </h1>
            <div className="flex">
              <h1 className="flex text-6xl lg:text-7xl">
                VR <img src="/logo.png" className=" " />
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
        <div className="lg:w-[20%] mx-auto">
          <ContatoButton />
        </div>
      </div>
    </div>
  );
};

export default Banner;
