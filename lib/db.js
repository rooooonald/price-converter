import { MongoClient } from "mongodb";

export async function connectToDB() {
  const client = new MongoClient(
    "mongodb+srv://admin-ronald:Test123@cluster0.krwlyqt.mongodb.net/?retryWrites=true&w=majority"
  );

  const connected = await client.connect();

  return connected;
}
