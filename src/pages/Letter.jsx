import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/rose-bg-14.jpg";
import photo from "../assets/letter/photo.gif";
import cute from "../assets/letter/cute.gif";

export default function Letter() {
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
          space-y-10
        "
      >
        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* TEXT */}
          <div className="space-y-6">
            <p
              className="
                text-sm
                tracking-widest
                text-white
              "
            >
              I love you more than words can express.
            </p>

            <h1
              className="
                text-3xl sm:text-4xl md:text-5xl lg:text-6xl
                font-serif
                leading-tight
                text-[rgb(161_61_54)]
              "
            >
              HAPPY NEW YEAR, <br />
              MY LOVE.
            </h1>

            <p
              className="
                text-lg sm:text-xl
                text-[rgb(161_61_54)]
                leading-relaxed
              "
            >
              May our love continue to blossom and flourish forever.
              <br />
              <br />
              Every moment with you is my favorite memory, and every new year
              with you is my greatest gift.
            </p>

            <p className="text-lg font-medium text-[rgb(161_61_54)]">
              Forever yours 💕
            </p>
          </div>

          {/* PHOTO */}
          <div className="flex justify-center md:justify-end">
            <div
              className="
                bg-white/80
                p-3
                rounded-2xl
                shadow-lg
              "
            >
              <img
                src={photo}
                alt="Memory"
                className="
                  w-60 sm:w-72 md:w-80
                  rounded-xl
                  object-cover
                "
              />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col sm:flex-row
            items-center
            justify-between
            gap-6
            pt-4
          "
        >
          {/* Cute Illustration */}
          <img src={cute} alt="Cute" className="w-24 sm:w-28" />

          {/* Back Button */}
          <button onClick={() => navigate("/gifts")} className="countdown-btn">
            BACK
          </button>
        </div>
      </div>
    </div>
  );
}
