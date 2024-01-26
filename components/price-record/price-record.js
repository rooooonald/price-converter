import { useState } from "react";

import ProductList from "./product-list";
import { useQuery } from "@tanstack/react-query";
import { fetchProductList } from "@/lib/http";
import Loader from "@/ui/loader";

import styles from "./price-record.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function PriceRecord({ productType }) {
  const [searchKeyword, setSearchKeyword] = useState("");

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["product-list", { productType }],
    queryFn: ({ signal }) => fetchProductList({ signal, productType }),
  });

  if (isError) {
    return <p>Error: {error.info?.message || "Failed!"}</p>;
  }

  if (isPending) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  if (data) {
    let productList = data;

    if (searchKeyword) {
      productList = data.filter(
        (product) =>
          product.inputtedProductName
            .toLowerCase()
            .includes(searchKeyword.toLowerCase()) ||
          product.inputtedSupermarket
            .toLowerCase()
            .includes(searchKeyword.toLowerCase())
      );
    }

    return (
      <div className={styles.wrapper}>
        <div className={styles.input}>
          <label htmlFor="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
          </label>
          <input
            id="search"
            type="text"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
            placeholder="Product or Supermarket"
          />
        </div>
        <ProductList products={productList} productType={productType} />
      </div>
    );
  }
}
