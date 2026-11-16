export default async function Home() {

  const res = await fetch('http://localhost:3000/api/getAll');

  const data: {

    id: string;
    brand: string;
    model: string;
    description: string;
    price: string;

  }[] = await res.json();

  return (

    <section className="page">

      <h1>Home</h1>

      <div className="card">

        <h2>All data in the database</h2>

        {data.map((item) => (

          <div key={item.id}>
            
            <p>Brand: {item.brand}</p>

            <p>Model: {item.model}</p>

            <p>Price: €{item.price}</p>

            <p>Description: {item.description}</p>

            <hr />

          </div>

        ))}

      </div>

    </section>

  );

}