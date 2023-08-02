import "./App.css";
import React, { useState, useCallback } from "react";
import InputDeviceSelect from "./inputDeviceSelect.tsx";
import { InputModes } from "./data/inputModes.ts";

function App() {
  const [inputMode, setInputMode] = useState(null);

  const handleDeviceIdChange = useCallback(
    (deviceID: string) => {
      if (inputMode === InputModes.MIC) {
        console.log(inputMode);
      }
    },
    [
      () => {
        console.log(inputMode);
      },
      inputMode,
    ]
  );
  return (
    <div className="App">
      <header className="App-header">
        <p>Plug in a guitar to start!</p>
        <p>🎸 -- 💻</p>
        <InputDeviceSelect onChange={handleDeviceIdChange} />
      </header>
    </div>
  );
}

export default App;
