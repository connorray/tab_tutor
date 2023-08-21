import "./TabScreen.css";
import { tabModel } from "../data/tab.ts";
import { detectPitchFromAudioStream } from "../audioHelper/audioInterface.ts";

export function TabScreen() {
  return (
    <header className="App-header">
      <p>Press record to start writing tabs!</p>
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
