import Link from "next/link";

import styles from "./selection-box.module.css";

export default function SelectionBox({ productType }) {
  let bg;
  if (productType === "meat") {
    bg = styles.meat;
  }
  if (productType === "veg") {
    bg = styles.veg;
  }
  if (productType === "fruit") {
    bg = styles.fruit;
  }

  return (
    <Link href={`/${productType}`}>
      <div className={styles["selection-box"]}>
        <div className={`${styles["box-image"]} ${bg}`}></div>
        <div className={styles["box-type"]}>{productType}</div>
      </div>
    </Link>
  );
}
