import { useEffect, useRef } from "react";
import song from "../assets/audio/haseen-talwiinder.mp3";

export default function BackgroundAudio({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (play) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [play]);

  return <audio ref={audioRef} src={song} loop preload="auto" />;
}
