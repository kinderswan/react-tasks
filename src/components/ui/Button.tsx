import { memo, PropsWithChildren } from "react";

export const Button = memo(function Button({
  children,
  onClick,
  type,
}: PropsWithChildren<{
  onClick?: () => void;
  type?: HTMLButtonElement["type"];
}>) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
});
