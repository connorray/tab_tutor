import "./TabScreen.css";
import { tabModel } from "../data/tab.ts";

export function TabScreen() {
  return (
    <header className="App-header">
      <p>Press record to start writing tabs!</p>
      <textarea
        className="tab-text-area"
        name="writeTabs"
        defaultValue={tabModel}
        readOnly={true}
      />
    </header>
  );
}
