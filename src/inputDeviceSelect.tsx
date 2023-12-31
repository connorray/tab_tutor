import { useState, useEffect, ChangeEvent } from "react";
import { ColoredText } from "./components/ColoredText";

type PropTypes = {
  onChange: Function;
};

type Devices = Array<{
  id: string;
  label: string;
}>;

const InputDeviceSelect = ({ onChange }: PropTypes) => {
  const [devices, setDevices] = useState<Devices>([]);

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then((devices) =>
      setDevices(
        Object.entries(devices)
          .filter((entry) => entry[1].kind === "audioinput")
          .map((entry) => ({ id: entry[1].deviceId, label: entry[1].label }))
      )
    );
  }, [onChange]);

  if (!devices.length) {
    return null;
  }

  const handleDeviceSelection = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <ColoredText text="Choose your input device" />
      <select onChange={handleDeviceSelection}>
        {devices.map(({ id, label }) => (
          <option key={id} value={id}>
            {label}
          </option>
        ))}
      </select>
      {/* TODO: map over the devices and create buttons */}
    </div>
  );
};

export default InputDeviceSelect;
