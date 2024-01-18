"use client";

import { useState, createContext } from "react";

export const CurrencyContext = createContext({
  currency: "",
  changeCurrency: () => {},
});

export default function CurrencyContextProvider(props) {
  const [currency, setCurrency] = useState("cad");

  function changeCurrencyHandler(currency) {
    setCurrency(currency);
  }

  const context = { currency: currency, changeCurrency: changeCurrencyHandler };

  return (
    <CurrencyContext.Provider value={context}>
      {props.children}
    </CurrencyContext.Provider>
  );
}
