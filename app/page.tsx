import { createClient } from "redis";

export const dynamic = "force-dynamic";

export default async function Home() {

  const redis = createClient({
    url: process.env.REDIS_URL
  });

  redis.on("error", console.error);

  await redis.connect();

  const data = await redis.hGetAll("homepage_text");

  await redis.quit();

  return (
    <section className="page">

      <h1>{data.title}</h1>

      <div className="card">

        <p>{data.description}</p>

        <a href="/products"><button>{data.button}</button></a>

      </div>

    </section>
  );
}
