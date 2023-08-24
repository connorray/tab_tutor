import { useCallback, SetStateAction, Dispatch } from "react";
import InputDeviceSelect from "../inputDeviceSelect.tsx";
import { InputModes } from "../data/inputModes";
import { ColoredText } from "./ColoredText.tsx";
import { NextPageArrows } from "./NextPageArrows.tsx";

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

  const handleClickArrowButton = () => {
    props.onSetScreen("tab-screen");
  };

  return (
    <header className="App-header">
      <ColoredText text="Plug in a guitar to start!" />
      <p>🎸 -- 💻</p>
      <div>
        <InputDeviceSelect onChange={handleDeviceIdChange} />
        <NextPageArrows onClick={handleClickArrowButton} />
      </div>
    </header>
  );
}
