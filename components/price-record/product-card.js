import { useContext, useState, useEffect } from "react";

import { CurrencyContext } from "@/context/currency-context";
import convertToHkd from "@/lib/convert-to-hkd";

import styles from "./product-card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore, faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function ProductCard({ product, displayUnit, productType }) {
  const {
    inputtedProductName: name,
    inputtedDate: date,
    inputtedSupermarket: supermarket,
    calPrices,
  } = product;

  const currentCtx = useContext(CurrencyContext);
  const currency = currentCtx.currency;

  const [prices, setPrices] = useState(calPrices);
  const [currencyUnit, setCurrencyUnit] = useState("CAD");

  useEffect(() => {
    if (currency === "hkd") {
      setPrices(convertToHkd(calPrices));
      setCurrencyUnit("HKD");
    }
    if (currency === "cad") {
      setPrices(calPrices);
      setCurrencyUnit("CAD");
    }
  }, [currency, calPrices]);

  let hoverColor;
  if (productType === "meat") {
    hoverColor = styles["hover-color-meat"];
  }
  if (productType === "veg") {
    hoverColor = styles["hover-color-veg"];
  }
  if (productType === "fruit") {
    hoverColor = styles["hover-color-fruit"];
  }

  return (
    <li>
      <div className={`${styles.wrapper} ${hoverColor}`}>
        <div>
          <div>
            <h1 className={styles["product-name"]}>{name}</h1>
          </div>
          <div>
            <ul>
              <li className={styles.info}>
                <FontAwesomeIcon icon={faCalendarDays} /> {date}
              </li>
              <li className={styles.info}>
                <FontAwesomeIcon icon={faStore} size="sm" /> {supermarket}
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.price}>
          <h2>
            {displayUnit === "lb" &&
              `${currencyUnit}${prices.lb.toFixed(2)}/lb`}
            {displayUnit === "kg" &&
              `${currencyUnit}${prices.kg.toFixed(2)}/kg`}
            {displayUnit === "kati" &&
              `${currencyUnit}${prices.kati.toFixed(2)}/kati`}
          </h2>
        </div>
      </div>
    </li>
  );
}
