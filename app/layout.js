import { Comfortaa, Bebas_Neue } from "next/font/google";
import "./globals.css";

// Prevent flickering of icons
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Provider from "@/components/provider/provider";
config.autoAddCss = false;

export const metadata = {
  title: "Price Converter",
  description: "Compare grocery prices in different units.",
  viewport: "user-scalable=no, width=device-width, initial-scale=1",
  icons: { icon: "/logo.svg" },
};

const comfortaa = Comfortaa({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-comfortaa",
});

const bebas_neue = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${comfortaa.variable} ${bebas_neue.variable}`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
