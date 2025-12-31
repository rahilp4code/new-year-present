import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Countdown from "./pages/Countdown";
import TooEarly from "./pages/TooEarly";
import Question from "./pages/Question";
import Warning from "./pages/Warning";
import Ready from "./pages/Ready";
import NewYear from "./pages/NewYear";
import Gifts from "./pages/Gifts";
import Letter from "./pages/Letter";
import Bouquet from "./pages/Bouquet";
import Camera from "./pages/Camera";
import Song from "./pages/Song";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/countdown" element={<Countdown />} />
        <Route path="/too-early" element={<TooEarly />} />
        <Route path="/question" element={<Question />} />
        <Route path="/warning" element={<Warning />} />
        <Route path="/ready" element={<Ready />} />
        <Route path="/new-year" element={<NewYear />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/gift-letter" element={<Letter />} />
        <Route path="/gift-bouquet" element={<Bouquet />} />
        <Route path="/gift-camera" element={<Camera />} />
        <Route path="/gift-song" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
