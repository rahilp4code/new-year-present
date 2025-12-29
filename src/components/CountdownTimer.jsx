import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate, onComplete }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return null;

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = getTimeLeft();
      if (!updated) {
        clearInterval(interval);
        onComplete?.();
      }
      setTimeLeft(updated);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft)
    return <p className="text-2xl text-rose-500 font-semibold">It’s time 💖</p>;

  return (
    <div className="flex gap-4 text-center">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="bg-white/70 backdrop-blur-md rounded-2xl px-4 py-3 shadow"
        >
          <p className="text-2xl font-bold text-rose-500">
            {String(value).padStart(2, "0")}
          </p>
          <p className="text-xs uppercase text-gray-600">{label}</p>
        </div>
      ))}
    </div>
  );
}
