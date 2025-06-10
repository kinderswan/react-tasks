import { InputHTMLAttributes, memo, PropsWithoutRef } from "react";

export const Input = memo(function Input({
  ...props
}: PropsWithoutRef<InputHTMLAttributes<HTMLInputElement>>) {
  return <input {...props}></input>;
});
