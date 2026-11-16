
"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async () => {
    const res = await fetch("/api/getAll");
    setProducts(await res.json());
  };

  useEffect(() => {
    getProducts();
  }, []);

  const deleteProduct = async (id: string) => {
    await fetch(`/api/deleteProduct?id=${id}`, {
      method: "DELETE",
    });

    getProducts();
  };

  return (
    <section className="page">

      <h1>Home</h1>

      <div className="card">

        <h2>All data in the database</h2>

        {products.map((item) => (

          <div key={item.id}>

            <p>Brand: {item.brand}</p>
            <p>Model: {item.model}</p>
            <p>Price: €{item.price}</p>
            <p>Description: {item.description}</p>

            <button onClick={() => deleteProduct(item.id)}>
              Delete
            </button>

            <hr />

          </div>

        ))}

      </div>

    </section>
  );
}