import { useState } from "react";
import RomanticButton from "../components/RomanticButton";
import bg from "../assets/bg/cherry-blossom.jpg";

const SECRET_USERNAME = "her_telegram_username"; // change this

export default function Auth() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (username.trim() === SECRET_USERNAME) {
      window.location.href = "/countdown";
    } else {
      setError("Oops… this surprise isn’t for you 🥺💔");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div
        className="
  romantic-card
  px-8 py-10
  w-[90%] max-w-md
  text-center
"
      >
        <h1 className="text-3xl font-romantic text-rosePrimary">
          For Someone Special 💖
        </h1>

        <p className="text-gray-700 mb-4">
          Enter your Telegram username to continue
        </p>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="@username"
          className="
    w-full rounded-full px-4 py-3
    border border-roseSoft
    focus:outline-none focus:ring-2 focus:ring-rosePrimary
  "
        />

        {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

        <button className="auth-btn w-full mt-4" onClick={handleSubmit}>
          Continue 💌
        </button>
      </div>
    </div>
  );
}
