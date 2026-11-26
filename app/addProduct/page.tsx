
import { db, authenticate } from "@/lib/database";
import { redirect } from "next/navigation";

export default function AddProduct() {

  async function addProduct(formData: FormData) {
    "use server";

    const brand = formData.get("brand");
    const model = formData.get("model");
    const price = Number(formData.get("price"));
    const description = formData.get("description");

    if (!brand || !model || price <= 0 || !description) {
      throw new Error("Invalid product details");
    }

    await authenticate();

    await db.collection("myproducts").create({
      brand,
      model,
      price,
      description,
      imageURL: "https://res.cloudinary.com/bjb2pjth/image/upload/v1795611211/3530.jpg"
    });

    redirect("/products");
  }

  return (
    <section className="page">
      <h1>Add Product</h1>

      <div className="card">
        <form action={addProduct}>

          <p>Brand</p>
          <select name="brand" required>
            <option value="Dell">Dell</option>
            <option value="Lenovo">Lenovo</option>
            <option value="Acer">Acer</option>
          </select>

          <p>Model</p>
          <input name="model" type="text" required />

          <p>Price</p>
          <input name="price" type="number" min="0.01" step="0.01" required />

          <p>Description</p>
          <textarea name="description" required />

          <br />
          <button type="submit">Add Product</button>

        </form>
      </div>
    </section>
  );
}
