import { useEffect, useState } from "react";

import Timer from "./Components/Timer";

function App() {

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); //work,break,null
  const [cycles, setCycles] = useState(1);

  const onChangeHandler = (e) => {
    if (e.target.value >= 1 && e.target.value <= 5) {
      setCycles(e.target.value);
    } else {
      return;
    }
  }

  const resetEverything = () => {
    window.location.reload();
  }

  useEffect(() => {
    if (cycles < 1) {
      setIsPaused(true);
      setMode("work");
      setCycles(1);
    }
  }, [cycles]);



  return (
    <main>
      <Timer isPaused={isPaused} mode={mode} setMode={setMode} cycles={cycles} setCycles={setCycles} />
      <center>
        <div>
          <input type="number" value={cycles} onChange={onChangeHandler} min={1} max={5} />
          <button onClick={() => setIsPaused(!isPaused)}>{isPaused ? "Play" : "Pause"}</button>
          <button onClick={resetEverything}>RESET</button>
        </div>
      </center>
    </main>
  )

}

export default App;
