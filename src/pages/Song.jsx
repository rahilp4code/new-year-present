import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import bg from "../assets/bg/anime-bg-2.PNG";
import cd from "../assets/song/waves.gif";
import songBar from "../assets/song/haseen.png";
import song from "../assets/audio/haseen-talwiinder.mp3";

export default function Song() {
  const navigate = useNavigate();
  const audioRef = useRef(null);
  const [playMusic, setPlayMusic] = useState(false);

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
    <div
      className="
        min-h-screen
        flex items-center justify-center
        bg-cover bg-center
        md:bg-none
      "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <audio ref={audioRef} src={song} loop preload="auto" />
      <div
        className="
          w-[92%] max-w-6xl
          px-6 sm:px-10
          py-10 sm:py-14
          space-y-10
        "
      >
        <div className="grid lg:grid-cols-1 gap-10 items-center">
          {/* CENTER – TEXT */}
          <div className="text-center space-y-6">
            <p
              className="
                uppercase
                tracking-[0.35em]
                text-sm sm:text-base
                font-bold
                text-[#6E6687]
              "
            >
              This song 🎧
            </p>

            {/* text-[rgb(66_48_74)] */}
            <p
              className="
                text-xl sm:text-2xl md:text-3xl
                font-medium
                text-[#37304A]
                leading-relaxed
              "
            >
              Some memories don’t need pictures, they live forever in music.
            </p>

            <p className="text-lg sm:text-xl text-[#6E6687]">
              Every time this song plays, it reminds me of you... HASEEN🖤
            </p>
          </div>

          {/* RIGHT – CD + MUSIC BAR */}
          <div className="flex flex-col items-center gap-6">
            {/* CD */}
            <img
              src={cd}
              alt="CD"
              className="
                w-52 sm:w-60 md:w-64
                rounded-full
              "
            />

            {/* MUSIC BAR */}
            <img
              src={songBar}
              alt="Song"
              className="
                w-64 sm:w-72 md:w-80
                rounded-xl
                shadow-lg
              "
            />
          </div>
        </div>

        {/* BACK */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => navigate("/gifts")}
            //           className="
            //   mt-6
            //   px-14 py-4
            //   rounded-full
            //   bg-black
            //   text-white
            //   font-semibold
            //   tracking-widest

            //   shadow-[0_0_25px_rgba(177,156,217)]
            //   transition-all duration-300

            //   hover:shadow-[0_0_40px_rgba(0,0,0)]
            //   hover:scale-105
            //   active:scale-95
            // "
            className="
  px-8 py-3
  rounded-full
  text-white
  bg-gradient-to-r
  from-[#8F87C2] via-[#B6AEE8] to-[#E3DFFF]
  shadow-md
  hover:scale-105
  transition
"
          >
            BACK
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
