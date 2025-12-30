import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/rose-bg-2.jpg";

export default function TooEarly() {
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
            text-lg sm:text-xl md:text-2xl
            font-medium
            text-[rgb(216_129_116)]
          "
        >
          Heyyy 👀
        </p>

        {/* Message */}
        <p
          className="
            text-m sm:text-2xl md:text-3xl
            font-medium
            text-[rgb(161_61_54)]
          "
        >
          Not yet…
          <br />
          Good things take a little patience 💕
        </p>

        {/* Back Button */}
        <button
          className="
            countdown-btn
            mx-auto
            p-4
          "
          onClick={() => navigate("/countdown")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
