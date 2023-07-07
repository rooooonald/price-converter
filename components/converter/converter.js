"use client";

import { Fragment, useState } from "react";

import PriceInput from "./price-input";
import ResultOutput from "./result-output";
import PriceRecord from "../price-record/price-record";
import calculate from "@/lib/weight-calculator";

import styles from "./converter.module.css";
import TypeLogo from "./type-logo";

export default function Converter({ iniProductList, productType }) {
  const [calPrices, setCalPrices] = useState({
    lb: 0,
    kg: 0,
    kati: 0,
  });

  const [isSubmitted, setIsSubmitted] = useState(true);

  function calculateHandler(inputData) {
    const result = calculate(inputData);
    setCalPrices(result);
  }

  async function submitHandler(dataBody) {
    setIsSubmitted(false);
    try {
      const calPrices = calculate(dataBody);
      dataBody = { ...dataBody, calPrices };
      await sendDataHandler(dataBody);
      setIsSubmitted(true);
    } catch (err) {
      // Error message
    }
  }

  async function sendDataHandler(dataBody) {
    const res = await fetch("/api/add-products", {
      method: "POST",
      body: JSON.stringify(dataBody),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();

    console.log(data);
    if (!res.ok) {
      throw new Error(data.message || "something went wrong!");
    }
  }

  let bgClassDark, bgClass;
  if (productType === "meat") {
    bgClass = styles["bg-meat"];
    bgClassDark = styles["bg-meat-dark"];
  }
  if (productType === "veg") {
    bgClass = styles["bg-veg"];
    bgClassDark = styles["bg-veg-dark"];
  }
  if (productType === "fruit") {
    bgClass = styles["bg-fruit"];
    bgClassDark = styles["bg-fruit-dark"];
  }

  return (
    <Fragment>
      <div className={bgClassDark}>
        <div className={`${styles.wrapper} ${bgClass}`}>
          <div className={styles["price-input"]}>
            <TypeLogo productType={productType} />
            <PriceInput
              onCalculate={calculateHandler}
              onSubmit={submitHandler}
              productType={productType}
            />
            <ResultOutput prices={calPrices} />
          </div>
          <div className={styles.record}>
            <PriceRecord
              update={isSubmitted}
              iniProductList={iniProductList}
              productType={productType}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
