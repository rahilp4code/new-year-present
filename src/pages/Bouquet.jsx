import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/rose-bg-1.jpg";
import bouquet from "../assets/gifts/bouquet.png";

export default function Bouquet() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="
          romantic-card
          w-[92%] max-w-6xl
          px-6 sm:px-10
          py-10 sm:py-14
        "
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT – NOTE */}
          <div
            className="space-y-6"
            style={{ animation: "fadeUp 1s ease forwards" }}
          >
            <p
              className="
                uppercase
                tracking-[0.3em]
                text-sm sm:text-base
                font-medium
                text-[rgb(216_129_116)]
              "
            >
              For you 🌹
            </p>

            <p
              className="
                text-xl sm:text-2xl md:text-3xl
                font-medium
                text-[rgb(161_61_54)]
                leading-relaxed
              "
            >
              I’m sending you this bouquet because I can’t give it to you in
              person…
            </p>

            <p
              className="
                text-lg sm:text-xl
                text-[rgb(161_61_54)]
                leading-relaxed
                opacity-90
              "
            >
              Tum hamesha bolte ho maine kabhi flower nai diye, toh yeh lo ek
              virtual bouquet.
              <br />
              <br />
              Next time milne pe main tumhe real mein dunga.
            </p>

            <button
              onClick={() => navigate("/gifts")}
              className="countdown-btn mt-4"
            >
              BACK
            </button>
          </div>

          {/* RIGHT – BOUQUET */}
          <div className="flex justify-center">
            <img
              src={bouquet}
              alt="Bouquet"
              className="
                w-72 sm:w-80 md:w-96 lg:w-[26rem]
                drop-shadow-xl
              "
              style={{
                animation: "floatSoft 6s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
