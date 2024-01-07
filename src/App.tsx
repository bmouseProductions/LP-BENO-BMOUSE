import Audiovisual from "./Pages/audiovisual/audiovisual";
import Banner from "./Pages/banner";
import Beneficios from "./Pages/beneficios/beneficios";
import Carousel from "./Pages/carousel/Carousel";
import Footer from "./Pages/footer/Footer";
import Jornada from "./Pages/jornada/Jornada";
import Pensamento from "./Pages/pensamento/Pensamento";
import Testimonials from "./Pages/testimonials/Testimonial";
import Virtual from "./Pages/virtual/Virtual";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  AOS.init({
    once: true,
    delay: 10, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
  });
  return (
    <>
      <div className="bg-banner star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
      <Banner />
      <Carousel />
      <Virtual />
      <Beneficios />
      <Pensamento />
      <Audiovisual />
      <Testimonials />
      <Jornada />
      <Footer />
    </>
  );
}

export default App;
