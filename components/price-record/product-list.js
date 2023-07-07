import { useState } from "react";

import ProductCard from "./product-card";

import styles from "./product-list.module.css";

export default function ProductList({ products, productType }) {
  const [unit, setUnit] = useState("lb");

  function clickHandler() {
    if (unit === "lb") {
      setUnit("kg");
    }
    if (unit === "kg") {
      setUnit("kati");
    }
    if (unit === "kati") {
      setUnit("lb");
    }
  }

  return (
    <div onClick={clickHandler} className={styles.wrapper}>
      <ul>
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            displayUnit={unit}
            productType={productType}
          />
        ))}
      </ul>
    </div>
  );
}
