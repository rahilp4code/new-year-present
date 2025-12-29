export default function RomanticButton({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        mt-4 w-full rounded-full
        romantic-btn px-6 py-3
        text-white font-medium
        shadow-lg
        transition-all duration-300
        hover:bg-pink-600 hover:scale-105
        active:scale-95
      "
    >
      {text}
    </button>
  );
}
