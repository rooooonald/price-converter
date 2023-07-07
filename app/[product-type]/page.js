import { Fragment } from "react";

import Converter from "@/components/converter/converter";

async function getProductList(params) {
  const res = await fetch(
    `http://${process.env.domain}/api/${params["product-type"]}`,
    { next: { revalidate: 60 } }
  );

  // https://price-converter.vercel.app

  const data = await res.json();

  return data.productList;
}

export default async function ConverterPage({ params }) {
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
