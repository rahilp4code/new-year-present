import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/pink-sky-2.jpg";
import leftPhoto from "../assets/camera/left.png";
import rightPhoto from "../assets/camera/right.png";
import leftSticker from "../assets/stickers/kiss.gif";
import rightSticker from "../assets/stickers/sitting.gif";

export default function Camera() {
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
              w-[94%] max-w-7xl
              px-6 sm:px-10
              py-8 sm:py-8
            "
      >
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* LEFT */}
          <div
            className="
                  bg-white/20 backdrop-blur-xl
                  rounded-3xl
                  p-6
                  space-y-4
                  shadow-xl
                  flex flex-col justify-between
                "
            style={{ animation: "floatLeft 6s ease-in-out infinite" }}
          >
            <img
              src={leftPhoto}
              alt="Memory"
              className="rounded-2xl w-full object-cover"
            />
            <span
              className="
    text-center
    text-3xl sm:text-4xl md:text-5xl
    font-semibold
    tracking-widest

    bg-gradient-to-r
    from-sky-400
    via-white
    to-pink-400

    bg-clip-text
    text-transparent
  "
            >
              2020
            </span>
          </div>

          {/* CENTER MEMORY CARD */}
          <div
            className="
        bg-white/25 backdrop-blur-2xl
        rounded-[2.5rem]
        p-8 sm:p-10
        shadow-2xl
        text-center
        space-y-6
      "
            style={{ animation: "fadeUp 1s ease forwards" }}
          >
            <p
              className="
          uppercase
          tracking-[0.3em]
          text-sm sm:text-base
          font-medium
          text-white/80
        "
            >
              Our memories 💫
            </p>

            <p
              className="
          text-xl sm:text-2xl md:text-3xl
          font-medium
          text-white
          leading-relaxed
        "
            >
              Hamne zyada pictures to nai khichi hain, khash ham every year lete
              photo's
            </p>

            <p
              className="
          text-lg sm:text-xl
          text-white/90
          leading-relaxed
        "
            >
              Pictures toh nai hai lekin memories bahut saari hain jo humne
              saath bitayi hain.
              <br />
              <br />
              Specially 16th November
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="
                  bg-white/20 backdrop-blur-xl
                  rounded-3xl
                  p-6
                  space-y-4
                  shadow-xl
                  flex flex-col justify-between
                "
            style={{ animation: "floatRight 6s ease-in-out infinite" }}
          >
            <img
              src={rightPhoto}
              alt="Memory"
              className="rounded-2xl w-full object-cover"
            />
            <span
              className="
    text-center
    text-3xl sm:text-4xl md:text-5xl
    font-semibold
    tracking-widest

    bg-gradient-to-r
    from-sky-400
    via-white
    to-pink-400

    bg-clip-text
    text-transparent
  "
            >
              2025
            </span>
          </div>
        </div>

        {/* BACK */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/gifts")}
            className="
        px-10 py-3
        rounded-full
        font-medium
        tracking-wide
        text-white
        bg-gradient-to-r
        from-pink-400
        via-purple-400
        to-sky-400
        shadow-lg
        shadow-pink-300/40
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-xl
        active:scale-95
      "
          >
            BACK
          </button>
        </div>
      </div>
    </div>
  );
}
