import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/rose-bg-2.jpg";

export default function Ready() {
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
          py-10
          text-center
          space-y-8
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
          One last thing…
        </p>

        {/* Question */}
        <p
          className="
            text-xl sm:text-2xl
            font-medium
            text-[rgb(161_61_54)]
          "
        >
          Are you ready? 💖
        </p>

        {/* Button */}
        <button
          className="countdown-btn mx-auto"
          onClick={() => navigate("/new-year")}
        >
          YES 💕
        </button>
      </div>
    </div>
  );
}
