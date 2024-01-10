import { useState } from "react";
import Modal from "../../Components/Modal/Modal";

const info = [
  {
    url: "https://www.youtube.com/embed/oPbjKudgLCc?si=tos5UEp9IW8HRr75",
  },
];

const Virtual = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleOpenModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="py-16 bg-transparent w-full relative">
      <div className="text-center mx-auto" data-aos="fade-up">
        <h2 className="text-[rgba(255, 255, 255, 0.70)] text-xl">
          Assista aqui alguns trabalhos
        </h2>

        <div
          className="relative cursor-pointer"
          onClick={() => handleOpenModal(info[0].url)}
        >
          <img
            src="/Patense-video.png"
            className="mx-auto pt-10 lg:hidden"
            alt="Thumbnail"
          />
          <img
            src="/patense-desktop.png"
            className="mx-auto mt-10 hidden lg:block"
            alt="Thumbnail"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img
              src="https://img.icons8.com/ios/452/play--v1.png"
              className="w-16 h-16 border-[#fff] border rounded-full p-4 bg-white"
              alt="Play Button"
            />
          </div>
        </div>

        <Modal
          isOpen={selectedVideo !== null}
          onClose={handleCloseModal}
          link={selectedVideo}
        />
      </div>
    </div>
  );
};

export default Virtual;
