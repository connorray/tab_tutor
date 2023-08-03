import React, { useCallback, SetStateAction, Dispatch } from "react";
import InputDeviceSelect from "../inputDeviceSelect.tsx";
import { InputModes } from "../data/inputModes";

interface InitialScreenProps {
  inputMode: InputModes | null;
  onSetInputMode: Dispatch<SetStateAction<null>>;
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
      <p>Plug in a guitar to start!</p>
      <p>🎸 -- 💻</p>
      <InputDeviceSelect onChange={handleDeviceIdChange} />
    </header>
  );
}
