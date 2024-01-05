/* import BannerButton from "../../Components/BannerButton"; */
import audio from "../../assets/audiovisu.png";

const Audiovisual = () => {
  return (
    <div className="">
      <div className="mx-auto flex flex-col items-center justify-center ">
        <div className="">
          <img src={audio} />
        </div>
        {/*         <div className="text-center">
          <h1 className="text-4xl lg:text-6xl">
            Nosso Arsenal <br />{" "}
          </h1>
          <div className="">
            <h1 className="text-6xl mx-auto lg:text-8xl"> Audiovisual </h1>
          </div>
          <div className="mx-auto text-center  mt-5">
            <BannerButton text="Conheça o que temos disponível" />
          </div>
        </div> */}
        <div className="relative mt-10 lg:max-w-4xl pb-20">
          <p className="container px-6 lg:text-xl text-center font-extralight">
            Grandes ideias para divulgar a sua marca se tornam ainda maiores com
            a liberdade técnica que temos para executá-las.{" "}
            <span className="font-bold">
              Estamos prontos para te levar a uma nova realidade.
            </span>
          </p>
        </div>

        <div className="container justify-center flex flex-wrap">
          {[
            {
              image: "/camera-ursa.png",
            },
            {
              image: "/camera2.png",
            },
            {
              image: "/camera-ursa.png",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 items-center border-4 lg:mx-auto border-[#33F1DD] rounded-3xl p-4 mt-5"
            >
              <div className="mx-auto">
                <img src={item.image} className="z-20" />
              </div>
            </div>
          ))}
        </div>

        <img src="/down.png" className="mt-10 moving-image" />
      </div>
    </div>
  );
};

export default Audiovisual;
