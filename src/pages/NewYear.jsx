import { useNavigate } from "react-router-dom";
import fireworks from "../assets/bg/fireworks.mp4";

export default function NewYear() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={fireworks}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div
          className="
      w-[92%] max-w-2xl
      px-6 sm:px-12
      py-10 sm:py-14
      text-center
      space-y-7
    "
        >
          {/* Heading */}
          <p
            className="
    text-3xl sm:text-4xl md:text-6xl
    font-medium
    tracking-wide
    text-white/90
  "
          >
            Happy New Year
          </p>

          {/* Main line */}
          <p
            className="
    text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
    font-bold
    text-white
  "
          >
            💛My love💛
          </p>

          {/* Button */}
          <button
            className="
    mt-6
    px-14 py-4
    rounded-full
    bg-white
    text-black
    font-semibold
    tracking-widest

    shadow-[0_0_25px_rgba(255,255,255,0.6)]
    transition-all duration-300

    hover:shadow-[0_0_40px_rgba(255,255,255,0.9)]
    hover:scale-105
    active:scale-95
  "
            onClick={() => navigate("/gifts")}
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
