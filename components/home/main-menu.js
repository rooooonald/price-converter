import { Fragment } from "react";

import styles from "./main-menu.module.css";
import SelectionBox from "./selection-box";

export default function MainMenu() {
  return (
    <Fragment>
      <div className={styles.wrapper}>
        <h1>what are you buyin'?</h1>
        <div className={styles.selection}>
          <SelectionBox productType="meat" />
          <SelectionBox productType="veg" />
          <SelectionBox productType="fruit" />
        </div>
      </div>
    </Fragment>
  );
}
