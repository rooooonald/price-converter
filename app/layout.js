import CurrencyContextProvider from "@/context/currency-context";
import Header from "@/components/layout/header";

import { Comfortaa } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Price Converter",
  description: "Compare the price of groceries in different units",
};

const comfortaa = Comfortaa({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-comfortaa",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={comfortaa.variable}>
      <body>
        <CurrencyContextProvider>
          <Header />
          {children}
        </CurrencyContextProvider>
      </body>
    </html>
  );
}
