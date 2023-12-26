import Converter from "@/components/converter/converter";

export async function generateMetadata({ params }) {
  return {
    title: `Price Converter | ${params["product-type"].toUpperCase()}`,
    description: `Compare ${params["product-type"]} prices in different units.`,
  };
}

export default async function ConverterPage({ params }) {
  return <Converter productType={params["product-type"]} />;
}
