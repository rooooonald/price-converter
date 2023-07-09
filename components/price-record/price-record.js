import { useState, useEffect } from "react";
import ProductList from "./product-list";

export default function PriceRecord({ update, iniProductList, productType }) {
  const [productList, setProductList] = useState(iniProductList);

  useEffect(() => {
    fetch(`/api/${productType}`)
      .then((res) => res.json())
      .then((data) => setProductList(data.productList));
  }, [productType, update]);

  return <ProductList products={productList} productType={productType} />;
}
