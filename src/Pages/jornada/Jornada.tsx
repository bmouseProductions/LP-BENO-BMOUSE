import jornada from "../../assets/jornada.png";

const Jornada = () => {
  return (
    <div className="py-10 ">
      <div
        className="border-2 border-[#fff] mx-auto w-5/6 sm:w-1/2 md:w-1/3 lg:w-1/6 rounded-full p-4"
        data-aos="fade-up"
      >
        <p className="text-center uppercase text-2xl text-[#FFF]">
          O futuro lhe aguarda
        </p>
      </div>

      <div className="mx-auto py-4" data-aos="fade-left">
        {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:max-w-4xl lg:mx-auto lg:text-6xl xl:text-7xl text-center">
          Comece sua jornada virtual{" "}
          <span className="text-[#33F1DD]">HOJE</span>
        </h1> */}
        <img src={jornada} className="mx-auto p-5" />
      </div>

      <div className="mx-auto lg:mt-5 text-center" data-aos="fade-down">
        <button
          className="bg-[#33F1DD] rounded-3xl focus:outline-none focus:ring focus:border-blue-300 px-6 py-3  text-lg"
          style={{
            boxShadow:
              "0px 0px 12.946px 0px #03BFAC, 0px 0px 25.891px 0px #03BFAC, 0px 0px 90.619px 0px #03BFAC, 0px 0px 181.238px 0px #03BFAC, 0px 0px 310.694px 0px #03BFAC, 0px 0px 543.715px 0px #03BFAC",
          }}
        >
          Clique aqui
        </button>
      </div>
    </div>
  );
};

export default Jornada;
