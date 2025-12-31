import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/rose-bg-10.jpg";
import leftSticker from "../assets/stickers/heart.gif";
import rightSticker from "../assets/stickers/heart.gif";

export default function Countdown() {
  const navigate = useNavigate();

  // 🎯 New Year target (LOCAL TIME)
  const targetDate = new Date("2026-01-01T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const diff = targetDate.getTime() - now;

    if (diff <= 0) {
      return {
        days: "00",
        hours: "00",
        mins: "00",
        secs: "00",
        done: true,
      };
    }

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      mins: String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, "0"),
      secs: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
      done: false,
    };
  };

  const [time, setTime] = useState(calculateTimeLeft());

  // ⏱ Tick every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <div className="px-12 py-10 text-center space-y-6 w-[90%] max-w-xl">
        {/* Title */}
        <p className="uppercase tracking-[0.3em] text-lg sm:text-xl md:text-2xl font-medium text-[rgb(216_129_116)]">
          OPEN WHEN ITS
        </p>

        {/* DIGITAL CLOCK */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
          {[
            { label: "DAYS", value: time.days },
            { label: "HOURS", value: time.hours },
            { label: "MINS", value: time.mins },
            { label: "SECS", value: time.secs },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-4xl sm:text-5xl font-semibold text-[rgb(161_61_54)]">
                {value}
              </p>
              <p className="text-[10px] sm:text-xs tracking-widest text-[rgb(161_61_54)]/70 mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <p className="italic text-xl sm:text-2xl md:text-3xl font-medium text-[rgb(216_129_116)]">
          new year
        </p>

        {/* Button */}
        <button
          className={`countdown-btn mx-auto mt-4`}
          onClick={() => {
            if (time.done) {
              navigate("/question");
            } else {
              navigate("/too-early");
            }
          }}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
