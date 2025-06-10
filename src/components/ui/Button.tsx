import { ButtonHTMLAttributes, memo, PropsWithChildren } from "react";

export const Button = memo(function Button({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <button {...props}>{children}</button>;
});
