
import { db, authenticate } from "@/lib/database";
import { redirect } from "next/navigation";

export default async function EditProduct({ params }: {
  params: Promise<{ id: string }>
}) {

  const { id } = await params;

  await authenticate();

  const product = await db.collection("myproducts").getOne(id);

  async function saveProduct(formData: FormData) {
    "use server";

    await authenticate();

    await db.collection("myproducts").update(id, {
      brand: formData.get("brand"),
      model: formData.get("model"),
      price: Number(formData.get("price")),
      description: formData.get("description")
    });

    redirect("/products");
  }

  return (
    <section className="page">

      <h1>Edit Product</h1>

      <div className="card">

        <form action={saveProduct}>

          <p>Brand</p>
          <select name="brand" defaultValue={product.brand}>
            <option value="Dell">Dell</option>
            <option value="Lenovo">Lenovo</option>
            <option value="Acer">Acer</option>
          </select>

          <p>Model</p>
          <input name="model" defaultValue={product.model} required />

          <p>Price</p>
          <input name="price" type="number" min="0.01" step="0.01"
            defaultValue={product.price} required />

          <p>Description</p>
          <textarea name="description"
            defaultValue={product.description} required />

          <br />

          <button type="submit">Save Changes</button>

        </form>

      </div>

    </section>
  );
}
