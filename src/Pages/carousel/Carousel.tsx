import Realidade from "../../assets/Realiade.svg";
/* import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */
import { useMediaQuery } from "react-responsive";

const Carousel = () => {
  /*   const images = ["/Bmouse.png", "/Patense.png", "/Salus.png"]; */

  const isMobile = useMediaQuery({ maxWidth: 767 });

  if (!isMobile) {
    // Se não for um dispositivo móvel, renderize as imagens lado a lado
    return (
      <>
        <div className="py-10 ">
          {/*  <div className=" border-2 border-solid rounded-full border-[#33F1DD] text-center p-2 items-center align-bottom justify-center max-w-xs  mx-auto bg-transparent w-full relative">
            <h1 className="text-base font-light ">
              <span>Empresas</span> que já estão usando VR:
            </h1>
          </div>
          <div className="flex justify-center items-center space-x-8 mt-8 w-full">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="max-w-full max-h-32 object-contain"
              />
            ))}
          </div> */}
          <img src={Realidade} alt="" className="mx-auto" />
        </div>
      </>
    );
  }

  /*  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Intervalo de 3 segundos (ajuste conforme necessário)
  };
 */
  return (
    <div className="" data-aos="fade-up">
      <img src={Realidade} alt="" className="mx-auto w-full py-16" />
      {/* <div className="  border-2 border-solid rounded-full border-[#33F1DD] text-center p-2 items-center align-bottom justify-center max-w-xs  mx-auto bg-red-400 w-full relative">
        <h1 className="text-base font-light ">
          <span>Empresas</span> que já estão usando VR:
        </h1>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="mx-auto text-center mt-24">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="max-w-full max-h-32 object-contain text-center mx-auto"
            />
          </div>
        ))}
      </Slider> */}
    </div>
  );
};

export default Carousel;
