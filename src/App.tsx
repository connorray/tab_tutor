import "./App.css";
import { useState } from "react";
import { InitialScreen } from "./components/InitialScreen.tsx";
import { TabScreen } from "./components/TabScreen.tsx";

function App() {
  const [inputMode, setInputMode] = useState(null);
  const [screen, setScreen] = useState("initial");

  return (
    <div className="App">
      {/* TODO: update this to real check for when to change screen */}
      {screen === "initial" ? (
        <InitialScreen
          inputMode={inputMode}
          onSetInputMode={setInputMode}
          screen={screen}
          onSetScreen={setScreen}
        />
      ) : (
        <TabScreen />
      )}
    </div>
  );
}

export default App;
