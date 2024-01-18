import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const fetchProductList = async ({ signal, productType }) => {
  const res = await fetch(`/api/${productType}`, { signal });

  if (!res.ok) {
    const error = new Error("Failed to fetch product list.");
    error.code = res.status;
    error.info = await res.json();
    throw error;
  }

  const { productList } = await res.json();

  return productList;
};

export const addNewProduct = async (dataBody) => {
  const res = await fetch("/api/add-products", {
    method: "POST",
    body: JSON.stringify(dataBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const error = new Error("Failed to submit new product.");
    error.code = res.status;
    error.info = await res.json();
    throw error;
  }

  const { message } = await res.json();

  return message;
};

export async function createNewEvent(eventData) {
  const response = await fetch(`http://localhost:3000/events`, {
    method: "POST",
    body: JSON.stringify(eventData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const error = new Error("An error occurred while creating the event");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const { event } = await response.json();

  return event;
}
