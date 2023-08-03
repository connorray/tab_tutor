import "./App.css";
import React, { useState } from "react";
import { InitialScreen } from "./components/InitialScreen.tsx";
import { TabScreen } from "./components/TabScreen.tsx";

function App() {
  const [inputMode, setInputMode] = useState(null);

  return (
    <div className="App">
      {/* TODO: update this to real check for when to change screen */}
      {!inputMode ? (
        <InitialScreen inputMode={inputMode} onSetInputMode={setInputMode} />
      ) : (
        <TabScreen />
      )}
    </div>
  );
}

export default App;
