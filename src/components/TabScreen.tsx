import "./TabScreen.css";
import { tabModel } from "../data/tab.ts";
import { detectPitchFromAudioStream } from "../audioHelper/audioInterface.ts";
import { ColoredText } from "./ColoredText.tsx";

export function TabScreen() {
  return (
    <header className="App-header">
      <ColoredText text="Press record to start writing tabs!" />
      <button onClick={() => detectPitchFromAudioStream()}>Record</button>
      <textarea
        className="tab-text-area"
        name="writeTabs"
        defaultValue={tabModel}
        readOnly={true}
      />
    </header>
  );
}
