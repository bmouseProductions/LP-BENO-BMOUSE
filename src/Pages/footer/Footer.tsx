import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/bmouse-logo(black).png";

const Footer = () => {
  return (
    <footer className="bg-[#33F1DD] py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-10">
        <div className="mb-4 md:mb-0">
          <img src={logo} alt="Logo" className="mb-2" />
          <p className="text-[#000000a6]">
            Embarque na jornada do marketing <br /> digital com a gente e
            alcance as estrelas!
          </p>
          <p className="mr-4 mb-2 lg:mt-5 justify-between text-black md:mb-0">
            Privacy & Cookie Policy &copy; BMouse Productions
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex space-x-4">
            {/* Twitter Icon */}
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-white rounded-full p-2 border-1 border-[#33F1DD] 
                         hover:shadow-md transition duration-300"
              style={{
                borderRadius: 50,
                boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
              }}
            />

            {/* Instagram Icon */}
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white rounded-full p-2 border-1 border-[#33F1DD] 
                         hover:shadow-md transition duration-300"
              style={{
                borderRadius: 50,
                boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
              }}
            />

            {/* Facebook Icon */}
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white rounded-full p-2 border-1 border-[#33F1DD] 
                         hover:shadow-md transition duration-300"
              style={{
                borderRadius: 50,
                boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
