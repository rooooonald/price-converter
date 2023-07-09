import styles from "./type-logo.module.css";

export default function TypeLogo({ productType }) {
  let pronounciation;
  if (productType === "meat") {
    pronounciation = "/miːt/";
  }
  if (productType === "veg") {
    pronounciation = "/vedʒ/";
  }
  if (productType === "fruit") {
    pronounciation = "/fruːt/";
  }

  return (
    <>
      <h1 className={styles.title}>{productType.toUpperCase()}</h1>
      <h2 className={styles.pronounciation}>{pronounciation}</h2>
    </>
  );
}
