import styles from "./loader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";

export default function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.icons}>
        <FontAwesomeIcon
          className={styles.loader}
          icon={faBasketShopping}
          size="2xl"
        />{" "}
        <FontAwesomeIcon
          className={styles.loader}
          icon={faBasketShopping}
          size="2xl"
        />{" "}
        <FontAwesomeIcon
          className={styles.loader}
          icon={faBasketShopping}
          size="2xl"
        />
      </div>
      <p className={styles.text}>Loading ...</p>
    </div>
  );
}
