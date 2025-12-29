import { useNavigate } from "react-router-dom";

export default function NewYear() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#1a0f0f] overflow-hidden">
      {/* Fireworks */}
      <div className="fireworks">
        <span />
        <span />
        <span />
        <span />
      </div>

      {/* Content */}
      <div
        className="
          romantic-card
          relative z-10
          w-[92%] max-w-xl
          px-6 sm:px-10
          py-10
          text-center
          space-y-6
        "
      >
        <p
          className="
            uppercase
            tracking-[0.3em]
            text-base sm:text-lg
            font-medium
            text-[rgb(216_129_116)]
          "
        >
          🎆 Happy New Year 🎆
        </p>

        <p
          className="
            text-2xl sm:text-3xl
            font-medium
            text-[rgb(161_61_54)]
          "
        >
          My Love 💖
        </p>

        <button
          className="countdown-btn mx-auto mt-2"
          onClick={() => navigate("/gifts")}
        >
          Next 💝
        </button>
      </div>
    </div>
  );
}
