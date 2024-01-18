import ProductList from "./product-list";
import { useQuery } from "@tanstack/react-query";
import { fetchProductList } from "@/lib/http";
import Loader from "@/ui/loader";

import styles from "./price-record.module.css";

export default function PriceRecord({ productType }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["product-list", { productType }],
    queryFn: ({ signal }) => fetchProductList({ signal, productType }),
  });

  if (isError) {
    return <p>Error: {error.info?.message || "Failed!"}</p>;
  }

  if (isPending) {
    return (
      <div className={styles.wrapper}>
        <Loader />
      </div>
    );
  }

  if (data) {
    return <ProductList products={data} productType={productType} />;
  }
}
