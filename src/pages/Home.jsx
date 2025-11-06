import React, { useContext } from "react";
import { apiContext } from "../contextAPI/MyContext";
import Card from "../components/Card";

export default function Home() {
  const data = useContext(apiContext);
  console.log("data:", data);

  if (!data || data.length === 0) {
    return <p className="text-center mt-10">Loading products...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">All Products</h1>
      <div className="grid grid-cols-4 gap-5 p-5">
        {data.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
