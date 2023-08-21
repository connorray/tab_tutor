import { useCallback } from "react";
interface ColoredTextProps {
  text: string;
}

export function ColoredText(props: ColoredTextProps) {
  return <p className="text-wrapper">{props.text}</p>;
}
