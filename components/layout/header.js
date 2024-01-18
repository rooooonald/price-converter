"use client";

import { useContext, useState } from "react";
import Link from "next/link";

import { CurrencyContext } from "@/context/currency-context";

import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDrumstickBite,
  faCarrot,
  faAppleWhole,
  faDollarSign,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const currentCtx = useContext(CurrencyContext);
  const [showShoppingMenu, setShowShoppingMenu] = useState(false);
  const [showCurrencyMenu, setShowCurrencyMenu] = useState(false);

  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <ul>
          {showShoppingMenu && (
            <Link href="/meat">
              <li className={styles["btn-meat"]}>
                <FontAwesomeIcon
                  icon={faDrumstickBite}
                  style={{ color: "#a71616" }}
                  size="xl"
                />
              </li>
            </Link>
          )}
          {showShoppingMenu && (
            <Link href="/veg">
              <li className={styles["btn-veg"]}>
                <FontAwesomeIcon
                  icon={faCarrot}
                  style={{ color: "#159358" }}
                  size="xl"
                />
              </li>
            </Link>
          )}
          {showShoppingMenu && (
            <Link href="/fruit">
              <li className={styles["btn-fruit"]}>
                <FontAwesomeIcon
                  icon={faAppleWhole}
                  style={{ color: "#e6a314" }}
                  size="xl"
                />
              </li>
            </Link>
          )}
          <li
            className={styles["btn-menu"]}
            onClick={() => {
              setShowCurrencyMenu(false);
              setShowShoppingMenu((prev) => !prev);
            }}
          >
            <FontAwesomeIcon icon={faBasketShopping} size="xl" />
          </li>
        </ul>
      </nav>

      <nav className={styles.nav}>
        <ul>
          {showCurrencyMenu && (
            <li
              className={
                currentCtx.currency === "cad"
                  ? styles["btn-active"]
                  : styles["btn-menu"]
              }
              onClick={() => currentCtx.changeCurrency("cad")}
            >
              CAD
            </li>
          )}
          {showCurrencyMenu && (
            <li
              className={
                currentCtx.currency === "hkd"
                  ? styles["btn-active"]
                  : styles["btn-menu"]
              }
              onClick={() => currentCtx.changeCurrency("hkd")}
            >
              HKD
            </li>
          )}
          <li
            className={styles["btn-menu"]}
            onClick={() => {
              setShowCurrencyMenu((prev) => !prev);
              setShowShoppingMenu(false);
            }}
          >
            <FontAwesomeIcon icon={faDollarSign} size="xl" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
