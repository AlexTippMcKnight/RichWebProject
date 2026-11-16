
import { db, authenticate } from "@/lib/database";

export default async function ViewProduct({ params }: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params;

  await authenticate();

  const item = await db.collection("myproducts").getOne(id);

  return (
    <section className="page">

      <h1>Product Details</h1>

      <div className="card">

        <p>Brand: {item.brand}</p>

        <p>Model: {item.model}</p>

        <p>Price: €{item.price}</p>

        <p>Description: {item.description}</p>

        <a href="/products"><button>Back to Products</button></a>

      </div>

    </section>
  );
}
