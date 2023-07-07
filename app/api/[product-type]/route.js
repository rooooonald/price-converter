import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";

export async function GET(req, { params }) {
  let client;
  try {
    client = await connectToDB();
  } catch (err) {
    return NextResponse.json(
      { message: "Failed to connect to db" },
      { status: 500 }
    );
  }

  const db = client.db("price-converter");

  const productType = params["product-type"];

  try {
    const result = await db
      .collection("products")
      .find({
        selectedProductType: productType,
      })
      .sort({ inputtedDate: -1 })
      .toArray();
    client.close();
    return NextResponse.json({ productList: result }, { status: 200 });
  } catch (err) {
    client.close();
    return NextResponse.json(
      { message: "Cannot fetch products!" },
      { status: 500 }
    );
  }
}
