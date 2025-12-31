import { useNavigate } from "react-router-dom";
import bg from "../assets/bg/rose-bg-14.jpg";
import video from "../assets/camera/us.mp4";
import cute from "../assets/stickers/dance.gif";

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
              HASEEN🧣.
            </h1>

            <p
              className="
                text-lg sm:text-xl
                text-[rgb(161_61_54)]
                leading-relaxed
              "
            >
              Ham dono milke har pal ko khoobsurat banate rahenge hamesha.
              <br />
              <br />
              Tumahare saath har pal mera sabse khoobsurat pal hota hai, aur
              tumahare saath har naya saal mera sabse bada tohfa.
              <br />
              <br />
              main bohot khushnaseeb hoon ki tum meri zindagi mein ho, aur main
              intezaar nahi kar sakta ki hamara future kya laega.
            </p>

            <p className="text-lg font-medium text-[rgb(161_61_54)]">
              Bhanbhani 😌
              <br />
              Forever yours 💕
            </p>
          </div>

          {/* VIDEO */}
          <div className="flex justify-center">
            <video
              // src="/videos/us.mp4"
              src={video}
              autoPlay
              loop
              className="
                w-64 sm:w-72 md:w-80
                aspect-[9/16]
                rounded-3xl
                shadow-2xl
                object-cover
              "
            />
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
