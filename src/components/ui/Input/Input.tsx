import { InputHTMLAttributes, memo, PropsWithoutRef } from "react";

import styles from "./input.module.scss";

export const Input = memo(function Input({
  ...props
}: PropsWithoutRef<InputHTMLAttributes<HTMLInputElement>>) {
  return <input {...props} className={styles["brutal-input"]}></input>;
});
