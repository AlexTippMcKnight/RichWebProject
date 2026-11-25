
"use client";

import { useEffect, useState } from "react";
import Image from 'next/image'

export default function Laptops() {
  // State variable to hold the products
  const [products, setProducts] = useState<any[]>([]);

  const getProducts = async () => {
    const res = await fetch("/api/getAll");
    setProducts(await res.json());
  };

  useEffect(() => { getProducts(); }, []);

  const deleteProduct = async (id: string) => {
    await fetch(`/api/deleteProduct?id=${id}`, {
      method: "DELETE",
    });

    getProducts();
  };

  return (
    <section className="page">

      <h1>Laptops</h1>

      <div className="card">

        <h2>All data in the database</h2>

        {products.map((item) => (

          <div key={item.id}>
            <Image src={item.imageURL} width={200} height={200} alt="Picture of the laptop"/>
            <p>Brand: {item.brand}</p>
            <p>Model: {item.model}</p>
            <p>Price: €{item.price}</p>
            <p>Description: {item.description}</p>

            <a href={`/singleProduct/${item.id}`}><button>View</button></a>

            <a href={`/editProduct/${item.id}`}><button>Edit</button></a>

            <button onClick={() => deleteProduct(item.id)}>Delete</button>
            
            <hr />

          </div>

        ))}

      </div>

    </section>
  );
}