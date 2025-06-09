import { PropsWithChildren } from "react";
import styles from "./NavBar.module.scss";

export function NavBar({ children }: PropsWithChildren) {
  return <nav className={styles["nav-bar"]}>{children}</nav>;
}
