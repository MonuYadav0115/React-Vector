import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Stopwatch from "./pages/Stopwatch.jsx";
import Clock from "./pages/Clock.jsx";
import Weather from "./pages/Weather.jsx";
import ApiData from "./pages/ApiData.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
      <Route path="/clock" element={<Clock />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/api" element={<ApiData />} />
    </Routes>
  );
}

export default App;
