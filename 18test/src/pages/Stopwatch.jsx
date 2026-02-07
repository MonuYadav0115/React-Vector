import { useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  function start() {
    if (!running) {
      setRunning(true);
      const interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);

      window.intervalId = interval;
    }
  }

  function stop() {
    setRunning(false);
    clearInterval(window.intervalId);
  }

  function reset() {
    stop();
    setTime(0);
  }

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{time} sec</h2>

      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
