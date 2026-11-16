
import { NextResponse } from "next/server";

import { db, authenticate } from "@/lib/database";

export async function DELETE(request: Request) {

  try {

    const id = new URL(request.url).searchParams.get("id");

    await authenticate();

    // Delete product from PocketBase

    await db.collection("myproducts").delete(id!);

    // Return success message

    return NextResponse.json({ message: "Product deleted" });

  } catch (error) {

    console.error("Failed to delete product:", error);

    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );

  }

}
