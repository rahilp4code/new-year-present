import { useNavigate } from "react-router-dom";
import fireworks from "../assets/bg/fireworks.mp4";
import leftSticker from "../assets/stickers/sticker-left.gif";
import rightSticker from "../assets/stickers/sticker-right.gif";
import song from "../assets/audio/a_thousand_years.mp3";
import { useEffect, useRef, useState } from "react";

export default function NewYear() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [playMusic, setPlayMusic] = useState(false);

  // Start music after component mounts (user already clicked to come here)
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0;
    audioRef.current.play().catch(() => {});

    let v = 0;
    const fade = setInterval(() => {
      v += 0.05;
      if (v >= 0.6) {
        v = 0.6;
        clearInterval(fade);
      }
      audioRef.current.volume = v;
    }, 150);

    setPlayMusic(true);

    return () => {
      audioRef.current?.pause();
    };
  }, []);

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
      <audio ref={audioRef} src={song} loop preload="auto" />

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
