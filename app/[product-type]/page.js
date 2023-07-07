import { Fragment } from "react";

import Converter from "@/components/converter/converter";

async function getProductList(params) {
  const res = await fetch(
    `http://localhost:3000/api/${params["product-type"]}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();

  return data.productList;
}

export default async function ConverterPage({ params }) {
  console.log(params["product-type"]);
  const iniProductList = await getProductList(params);

  return (
    <Fragment>
      <Converter
        iniProductList={iniProductList}
        productType={params["product-type"]}
      />
    </Fragment>
  );
}
