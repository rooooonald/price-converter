import Header from "@/components/layout/header";

export default function ConverterLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
