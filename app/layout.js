import CurrencyContextProvider from "@/context/currency-context";

import { Comfortaa } from "next/font/google";
import "./globals.css";

// Prevent flickering of icons
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata = {
  title: "Price Converter",
  description: "Compare grocery prices in different units.",
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
        <CurrencyContextProvider>{children}</CurrencyContextProvider>
      </body>
    </html>
  );
}
