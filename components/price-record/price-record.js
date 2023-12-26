import ProductList from "./product-list";
import { useQuery } from "@tanstack/react-query";
import { fetchProductList } from "@/lib/http";

export default function PriceRecord({ productType }) {
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["product-list", { productType }],
    queryFn: ({ signal }) => fetchProductList({ signal, productType }),
  });

  if (isError) {
    return <p>Error: {error.info?.message || "Failed!"}</p>;
  }

  if (isPending) {
    return <p>Loading ...</p>;
  }

  if (data) {
    return <ProductList products={data} productType={productType} />;
  }
}
