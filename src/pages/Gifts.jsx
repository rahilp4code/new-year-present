import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/pink-sky-1.jpg";

import letter from "../assets/gifts/letter.png";
import bouquet from "../assets/gifts/bouquet.png";
import camera from "../assets/gifts/camera.png";
import song from "../assets/gifts/pink-note.png";

export default function Gifts() {
  const navigate = useNavigate();

  const gifts = [
    { label: "Letter", img: letter, route: "/gift-letter", delay: "0ms" },
    { label: "Bouquet", img: bouquet, route: "/gift-bouquet", delay: "120ms" },
    { label: "Camera", img: camera, route: "/gift-camera", delay: "240ms" },
    { label: "Song", img: song, route: "/gift-song", delay: "360ms" },
  ];

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="
          w-[92%] max-w-4xl
          px-5 sm:px-8
          py-6 sm:py-8
          text-center
          space-y-8
        "
      >
        {/* Title */}
        <p
          className="
    uppercase
    tracking-[0.35em]
    text-xl sm:text-2xl md:text-4xl lg:text-4xl
    font-bold
    text-white
  "
        >
          I got you something 💖
        </p>

        <p
          className="
    text-2xl sm:text-3xl md:text-4xl
    font-bold
    text-white
  "
        >
          Choose what you want first
        </p>

        {/* Gifts */}
        <div
          className="grid grid-cols-2
                     gap-10 sm:gap-14
                     mt-8
                     place-items-center
                     "
        >
          {gifts.map((gift) => (
            <button
              key={gift.label}
              onClick={() => navigate(gift.route)}
              style={{ animationDelay: gift.delay }}
              className="
                animate-pop
                group
                flex flex-col items-center justify-center
                rounded-2xl
                px-2 py-4
                transition-all duration-300
                hover:-translate-y-2
              "
            >
              <img
                src={gift.img}
                alt={gift.label}
                className="
                  w-38 sm:w-40 md:w-48 lg:w-52 xl:w-56
                  animate-jiggle
                "
                style={{ animationDelay: gift.delay }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
