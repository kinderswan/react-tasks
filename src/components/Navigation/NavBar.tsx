import { PropsWithChildren } from "react";
import styles from "./Navigation.module.scss";

export function NavBar({ children }: PropsWithChildren) {
  return <nav className={styles["nav-bar"]}>{children}</nav>;
}
