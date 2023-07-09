"use client";

import styles from "./main-menu.module.css";
import SelectionBox from "./selection-box";

export default function MainMenu() {
  return (
    <div className={styles.wrapper}>
      <h1>wt r u buyin'?</h1>
      <div className={styles.selection}>
        <SelectionBox productType="meat" />
        <SelectionBox productType="veg" />
        <SelectionBox productType="fruit" />
      </div>
    </div>
  );
}
