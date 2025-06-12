import React, { memo, PropsWithChildren, useState } from "react";
import styles from "./checkbox.module.scss";
import animations from "../../../assets/styles/animations.module.scss";
import Checkmark from "../../../assets/icons/checkmark.svg?react";

export const Checkbox = memo(function Checkbox({
  children,
}: PropsWithChildren) {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles["custom-checkbox"]} onClick={toggleCheckbox}>
      <div
        className={`${styles["checkbox-box"]} ${isChecked ? styles.checked : ""}`}
      >
        {isChecked && (
          <Checkmark className={animations["glitched-checkmark"]}></Checkmark>
        )}
      </div>
      <span className={styles["checkbox-label"]}>{children}</span>
    </div>
  );
});
