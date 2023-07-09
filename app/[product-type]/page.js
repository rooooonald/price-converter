import Converter from "@/components/converter/converter";

export async function generateMetadata({ params }) {
  return {
    title: `Price Converter | ${params["product-type"].toUpperCase()}`,
    description: `Compare ${params["product-type"]} prices in different units.`,
  };
}

async function getProductList(params) {
  const res = await fetch(
    `http://${process.env.domain}/api/${params["product-type"]}`,
    { next: { revalidate: 1800 } }
  );

  const data = await res.json();

  return data.productList;
}

export default async function ConverterPage({ params }) {
  const iniProductList = await getProductList(params);

  return (
    <Converter
      iniProductList={iniProductList}
      productType={params["product-type"]}
    />
  );
}
