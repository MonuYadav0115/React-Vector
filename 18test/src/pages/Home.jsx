import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>

      <p><Link to="/stopwatch">Stopwatch</Link></p>
      <p><Link to="/clock">Digital Clock</Link></p>
      <p><Link to="/weather">Weather App</Link></p>
      <p><Link to="/api">API Data</Link></p>
    </div>
  );
}

export default Home;
