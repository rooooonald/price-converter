import { Fragment, useContext, useState, useEffect } from "react";

import { CurrencyContext } from "@/context/currency-context";
import convertToHkd from "@/lib/convert-to-hkd";

import styles from "./result-output.module.css";

export default function ResultOutput({ prices }) {
  const currentCtx = useContext(CurrencyContext);
  const currency = currentCtx.currency;

  const [price, setPrice] = useState(prices);

  // when state on currency changes, trigger a function to calculate price
  useEffect(() => {
    if (currency === "hkd") {
      setPrice(convertToHkd(prices));
    }

    if (currency === "cad") {
      setPrice(prices);
    }
  }, [currency, prices]);

  // set the price to display

  function clickHandler() {
    currentCtx.changeCurrency(currency === "cad" ? "hkd" : "cad");
  }

  return (
    <Fragment>
      <div className={styles.wrapper}>
        <div>${price.lb.toFixed(2)}/lb</div>
        <div>${price.kg.toFixed(2)}/kg</div>
        <div>${price.kati.toFixed(2)}/kati</div>
      </div>
    </Fragment>
  );
}
