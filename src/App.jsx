import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import Countdown from "./pages/Countdown";
import TooEarly from "./pages/TooEarly";
import Question from "./pages/Question";
import Warning from "./pages/Warning";
import Ready from "./pages/Ready";
import NewYear from "./pages/NewYear";

function App() {
  // return (
  //   <>
  //     {/* <Auth /> */}
  //     <Countdown />
  //   </>
  // );
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
