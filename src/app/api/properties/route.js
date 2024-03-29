import { NextResponse } from "next/server";
import { conn } from "@/lib/db";

export async function GET() {
  try {
    const results = await conn.query("SELECT * FROM immo_properties WHERE published = true");
    return NextResponse.json(results);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    );
  }
}