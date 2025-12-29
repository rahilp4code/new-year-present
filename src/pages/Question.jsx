import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/rose-bg-2.jpg";

export default function Question() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
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
            text-base sm:text-lg
            font-medium
            text-[rgb(216_129_116)]
          "
        >
          Hii my love 💕
        </p>

        {/* Question */}
        <p
          className="
            text-lg sm:text-xl
            font-medium
            text-[rgb(161_61_54)]
          "
        >
          I got a surprise for you…
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
          <button className="countdown-btn" onClick={() => navigate("/ready")}>
            YES 😍
          </button>

          <button
            className="
              countdown-btn
              opacity-80
            "
            onClick={() => navigate("/warning")}
          >
            NO 🙄
          </button>
        </div>
      </div>
    </div>
  );
}
