import { PropsWithChildren } from "react";
import styles from "./Navigation.module.scss";

export function NavList({ children }: PropsWithChildren) {
  return <ul className={styles["nav-list"]}>{children}</ul>;
}
