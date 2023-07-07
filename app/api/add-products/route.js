import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";

export async function POST(req) {
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

  try {
    const dataBody = await req.json();
    const result = await db.collection("products").insertOne(dataBody);
    dataBody.id = result.insertedId;
    client.close();
    return NextResponse.json({ message: "Product added!" }, { status: 201 });
  } catch (err) {
    client.close();
    return NextResponse.json(
      { message: "Cannot add products!" },
      { status: 500 }
    );
  }
}
