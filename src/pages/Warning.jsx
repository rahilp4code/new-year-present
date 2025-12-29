import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/rose-bg-2.jpg";

export default function Warning() {
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
          Excuse me 😤
        </p>

        {/* Message */}
        <p
          className="
            text-lg sm:text-xl
            font-medium
            text-[rgb(161_61_54)]
          "
        >
          That was not an option 😌
          <br />
          You *have* to say yes 💕
        </p>

        {/* Back Button */}
        <button
          className="countdown-btn mx-auto"
          onClick={() => navigate("/question")}
        >
          Okay okay 😭❤️
        </button>
      </div>
    </div>
  );
}
