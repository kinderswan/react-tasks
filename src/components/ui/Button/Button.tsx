import { ButtonHTMLAttributes, memo, PropsWithChildren } from "react";

import styles from "./button.module.scss";

export type ButtonStatus = "primary" | "secondary" | "warning" | "danger";

const statusCssClass: Record<ButtonStatus, string> = {
  danger: styles["btn-danger"],
  primary: styles["btn-primary"],
  secondary: styles["btn-secondary"],
  warning: styles["btn-warning"],
};

export const Button = memo(function Button({
  children,
  status = "primary",
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  status?: ButtonStatus;
}) {
  return (
    <button {...props} className={statusCssClass[status]}>
      {children}
    </button>
  );
});
