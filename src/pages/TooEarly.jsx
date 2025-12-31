import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/rose-bg-11.jpg";
import leftSticker from "../assets/stickers/heart.gif";
import rightSticker from "../assets/stickers/heart.gif";

export default function TooEarly() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* STICKERS LAYER */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {/* LEFT STICKER */}
        <img
          src={leftSticker}
          alt="Sticker"
          className="hidden sm:block
                    absolute
                    left-0
                    top-1/2
                    -translate-y-1/2
                    w-24 sm:w-32 md:w-40
                    animate-stickerFloat
                  "
        />

        {/* RIGHT STICKER */}
        <img
          src={rightSticker}
          alt="Sticker"
          className="hidden sm:block
                    absolute
                    right-0
                    top-1/2
                    -translate-y-1/2
                    w-24 sm:w-32 md:w-40
                    animate-stickerFloat
                    animation-delay-2000
                  "
        />
      </div>
      <div
        className="
          w-[92%] max-w-xl
          px-6 sm:px-10
          py-8 sm:py-10
          text-center
          space-y-6
        "
      >
        {/* Title */}
        <p
          className="
            uppercase
            tracking-[0.25em]
            text-lg sm:text-xl md:text-2xl
            font-medium
            text-[rgb(216_129_116)]
          "
        >
          Heyyy 👀
        </p>

        {/* Message */}
        <p
          className="
            text-m sm:text-2xl md:text-3xl
            font-medium
            text-[rgb(161_61_54)]
          "
        >
          Not yet…
          <br />
          Good things take a little patience 💕
        </p>

        {/* Back Button */}
        <button
          className="
            countdown-btn
            mx-auto
            p-4
          "
          onClick={() => navigate("/countdown")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
