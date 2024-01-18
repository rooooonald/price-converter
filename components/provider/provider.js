"use client";

import { queryClient } from "@/lib/http";
import { QueryClientProvider } from "@tanstack/react-query";
import CurrencyContextProvider from "@/context/currency-context";

export default function Provider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyContextProvider>{children}</CurrencyContextProvider>
    </QueryClientProvider>
  );
}
