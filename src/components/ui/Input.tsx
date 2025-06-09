import { memo } from "react";

export const Input = memo(function Input({
  onChange,
}: {
  onChange: (val: string) => void;
  type: HTMLInputElement["type"];
}) {
  return <input onChange={(e) => onChange(e.target.value)}></input>;
});
