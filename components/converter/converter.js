"use client";

import { useState } from "react";

import { useMutation } from "@tanstack/react-query";
import { addNewProduct, queryClient } from "@/lib/http";

import PriceInput from "./price-input";
import PriceRecord from "../price-record/price-record";
import TypeLogo from "./type-logo";
import calculate from "@/lib/weight-calculator";

import styles from "./converter.module.css";

export default function Converter({ productType }) {
  const [calPrices, setCalPrices] = useState({
    lb: 0,
    kg: 0,
    kati: 0,
  });
  const [showInput, setShowInput] = useState(false);

  const toggleInputHandler = () => {
    setShowInput((prev) => !prev);
  };

  function calculateHandler(inputData) {
    const result = calculate(inputData);
    setCalPrices(result);
  }

  async function submitHandler(dataBody) {
    const calPrices = calculate(dataBody);
    dataBody = { ...dataBody, calPrices };
    mutate(dataBody);
  }

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: addNewProduct,
    onMutate: async (dataBody) => {
      await queryClient.cancelQueries({
        queryKey: [
          "product-list",
          { productType: dataBody.selectedProductType },
        ],
      });

      const prevProductList = queryClient.getQueryData([
        "product-list",
        { productType: dataBody.selectedProductType },
      ]);

      const updatedProductList = [...prevProductList, dataBody].sort((a, b) => {
        const aDate = new Date(a.inputtedDate);
        const bDate = new Date(b.inputtedDate);
        return bDate.getTime() - aDate.getTime();
      });

      queryClient.setQueryData(
        ["product-list", { productType: dataBody.selectedProductType }],
        updatedProductList
      );

      return { prevProductList };
    },

    onError: (error, data, context) => {
      queryClient.setQueryData(
        ["product-list", { productType: data.selectedProductType }],
        context.prevProductList
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries("product-list");
      setShowInput(false);
    },
  });

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
    <div className={bgClassDark}>
      <div className={`${styles.wrapper} ${bgClass}`}>
        <div className={styles["price-input"]}>
          <TypeLogo productType={productType} />
          <PriceInput
            onCalculate={calculateHandler}
            onSubmit={submitHandler}
            onToggleInput={toggleInputHandler}
            productType={productType}
            calPrices={calPrices}
            isSubmitting={isPending}
            showInput={showInput}
          />
        </div>

        <div className={`${styles.record} ${showInput ? styles.hide : null}`}>
          <PriceRecord productType={productType} />
        </div>
      </div>
    </div>
  );
}
