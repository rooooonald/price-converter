import Header from "@/components/layout/header";
import { Fragment } from "react";

export default function ConverterLayout({ children }) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
