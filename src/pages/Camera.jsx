import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/rose-bg72.jpg";
import leftPhoto from "../assets/camera/left.jpg";
import rightPhoto from "../assets/camera/right.jpg";
import video from "../assets/camera/bleach.mp4";

export default function Camera() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="
          romantic-card
          w-[94%] max-w-7xl
          px-6 sm:px-10
          py-10 sm:py-14
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
            "
            style={{ animation: "floatLeft 6s ease-in-out infinite" }}
          >
            <img
              src={leftPhoto}
              alt="Memory"
              className="rounded-2xl w-full object-cover"
            />

            <p className="text-lg text-white leading-relaxed">
              Some moments don’t need words.
              <br />
              They just stay in the heart forever 💕
            </p>
          </div>

          {/* CENTER VIDEO */}
          <div className="flex justify-center">
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="
                w-64 sm:w-72 md:w-80
                aspect-[9/16]
                rounded-3xl
                shadow-2xl
                object-cover
              "
            />
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
            <p className="text-lg text-white leading-relaxed">
              Every smile, every laugh, every second with you is a memory I
              cherish 🌸
            </p>

            <img
              src={rightPhoto}
              alt="Memory"
              className="rounded-2xl w-full object-cover"
            />
          </div>
        </div>

        {/* BACK */}
        <div className="mt-10 flex justify-center">
          <button onClick={() => navigate("/gifts")} className="countdown-btn">
            BACK
          </button>
        </div>
      </div>
    </div>
  );
}
