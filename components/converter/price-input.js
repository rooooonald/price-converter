import { useRef } from "react";

import { weightUnits } from "@/data/units";
import ResultOutput from "./result-output";

import styles from "./price-input.module.css";

export default function PriceInput({
  onCalculate,
  onSubmit,
  onToggleInput,
  productType,
  calPrices,
  isSubmitting,
  showInput,
}) {
  const priceRef = useRef();
  const unitRef = useRef();
  const productNameRef = useRef();
  const supermarketRef = useRef();
  const dateRef = useRef();

  function changeHandler() {
    const inputtedPrice = +priceRef.current.value;
    const selectedUnit = unitRef.current.value;
    const dataBody = {
      inputtedPrice,
      selectedUnit,
    };
    onCalculate(dataBody);
  }

  function submitHandler(event) {
    event.preventDefault();

    const inputtedPrice = +priceRef.current.value;
    const selectedUnit = unitRef.current.value;
    const inputtedSupermarket = supermarketRef.current.value;
    const inputtedProductName = productNameRef.current.value;
    const inputtedDate = dateRef.current.value;
    const selectedProductType = productType;
    const dataBody = {
      inputtedProductName,
      inputtedSupermarket,
      inputtedDate,
      selectedProductType,
      inputtedPrice,
      selectedUnit,
    };

    onSubmit(dataBody);
  }

  let buttonStyle, inputFieldStyle;
  if (productType === "meat") {
    buttonStyle = styles["btn-meat"];
    inputFieldStyle = styles["input-field-meat"];
  }
  if (productType === "veg") {
    buttonStyle = styles["btn-veg"];
    inputFieldStyle = styles["input-field-veg"];
  }
  if (productType === "fruit") {
    buttonStyle = styles["btn-fruit"];
    inputFieldStyle = styles["input-field-fruit"];
  }

  return (
    <>
      <button
        className={`${buttonStyle} ${styles["show-menu"]}`}
        onClick={() => onToggleInput()}
      >
        {showInput ? "- hide" : "+ add"}
      </button>
      {showInput && (
        <form className={styles.wrapper} onSubmit={submitHandler}>
          <label htmlFor="product-name">Product</label>
          <input
            type="text"
            id="product-name"
            ref={productNameRef}
            className={`${inputFieldStyle} ${styles.input}`}
            required
          />

          <label htmlFor="supermarkets">Supermarket</label>
          <input
            list="supermarket"
            name="supermarkets"
            id="supermarkets"
            ref={supermarketRef}
            className={`${inputFieldStyle} ${styles.input}`}
            required
          />
          <datalist id="supermarket">
            <option value="Loblaw" />
            <option value="Metro" />
            <option value="Sobeys" />
            <option value="Walmart" />
            <option value="Real Canadian Superstore" />
            <option value="No Frills" />
            <option value="Canadian Tire" />
            <option value="Food Basics" />
            <option value="FreshCo" />
          </datalist>

          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            ref={dateRef}
            className={`${inputFieldStyle} ${styles.input}`}
            required
          />

          <div className={styles["input-price"]}>
            <div>
              <label htmlFor="price">Price (CAD)</label>
              <input
                type="number"
                id="price"
                ref={priceRef}
                onChange={changeHandler}
                className={`${inputFieldStyle} ${styles["input-price-amount"]}`}
                required
                step=".01"
              />
            </div>
            <div className={styles["input-price-unit"]}>
              <label htmlFor="unit">Unit</label>
              <select
                id="unit"
                ref={unitRef}
                onChange={changeHandler}
                className={`${inputFieldStyle} ${styles["input-price-unit"]}`}
                required
              >
                {weightUnits.map((unit) => (
                  <option key={unit}>{unit}</option>
                ))}
              </select>
            </div>
          </div>
          <ResultOutput prices={calPrices} />

          <button className={buttonStyle}>
            {isSubmitting ? "Saving ..." : "Add"}
          </button>
        </form>
      )}
    </>
  );
}
