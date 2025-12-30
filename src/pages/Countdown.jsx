import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/rose-bg-10.jpg";

export default function Countdown() {
  const navigate = useNavigate();
  const targetDate = new Date("2025-01-01T00:00:00");

  const [time, setTime] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = targetDate - new Date();
    if (diff <= 0) return { done: true };

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      mins: Math.floor((diff / (1000 * 60)) % 60),
      secs: Math.floor((diff / 1000) % 60),
      done: false,
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* <div className="romantic-card px-12 py-10 text-center space-y-6 w-[90%] max-w-xl"> */}
      <div className="px-12 py-10 text-center space-y-6 w-[90%] max-w-xl">
        <p
          //         className="
          //   uppercase
          //   tracking-[0.25em]
          //   text-base sm:text-lg
          //   font-medium
          //   text-[rgb(216_129_116)]
          // "
          className="
    uppercase
    tracking-[0.3em]
    text-lg sm:text-xl md:text-2xl
    font-medium
    text-[rgb(216_129_116)]
  "
        >
          OPEN WHEN ITS
        </p>

        {/* TIMER */}

        <div
          className="
  grid grid-cols-2 sm:grid-cols-4
  gap-4 sm:gap-6
  justify-items-center
"
        >
          {["days", "hours", "mins", "secs"].map((unit) => (
            <div key={unit} className="text-center">
              <p
                className="
        text-3xl sm:text-5xl
        font-semibold
        text-petalText
      "
              >
                {String(time[unit] ?? "00").padStart(2, "0")}
              </p>

              <p
                className="
        text-[10px] sm:text-xs
        tracking-widest
        text-petalText/70
        mt-1
      "
              >
                {unit.toUpperCase()}
              </p>
            </div>
          ))}
        </div>

        <p
          //         className="
          //   italic
          //   text-lg sm:text-xl
          //   font-medium
          //   text-[rgb(216_129_116)]
          // "
          className="
    italic
    text-xl sm:text-2xl md:text-3xl
    font-medium
    text-[rgb(216_129_116)]
  "
        >
          new year
        </p>

        <button
          className={`countdown-btn mx-auto mt-4 ${
            !time.done && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() =>
            time.done ? navigate("/question") : navigate("/too-early")
          }
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
