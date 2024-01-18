import Link from "next/link";

import { useWindowSize } from "@uidotdev/usehooks";

import styles from "./selection-box.module.css";

export default function SelectionBox({ productType }) {
  const size = useWindowSize();

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
      <div className={styles.wrapper}>
        <div
          className={`${styles["box-image"]} ${bg}`}
          style={{
            width: size.width > 768 ? "150px" : `${size.width / 5}px`,
            height: size.width > 768 ? "150px" : `${size.width / 5}px`,
          }}
        ></div>
        <div className={styles["box-type"]}>{productType}</div>
      </div>
    </Link>
  );
}
