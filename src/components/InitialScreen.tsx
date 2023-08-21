import { useCallback, SetStateAction, Dispatch } from "react";
import InputDeviceSelect from "../inputDeviceSelect.tsx";
import { InputModes } from "../data/inputModes";
import { ColoredText } from "./ColoredText.tsx";

interface InitialScreenProps {
  inputMode: InputModes | null;
  screen: string;
  onSetInputMode: Dispatch<SetStateAction<null>>;
  onSetScreen: Dispatch<SetStateAction<string>>;
}

export function InitialScreen(props: InitialScreenProps) {
  const handleDeviceIdChange = useCallback(
    (deviceID: string) => {
      if (props.inputMode === InputModes.MIC) {
        console.log(props.inputMode);
      }
    },
    [
      () => {
        console.log(props.inputMode);
      },
      props.inputMode,
    ]
  );
  return (
    <header className="App-header">
      <ColoredText text="Plug in a guitar to start!" />
      <p>🎸 -- 💻</p>
      <div>
        <InputDeviceSelect onChange={handleDeviceIdChange} />
        <button onClick={() => props.onSetScreen("tab-screen")}>Start</button>
      </div>
    </header>
  );
}
