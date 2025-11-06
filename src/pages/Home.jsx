import React, { useContext } from "react";
import { apiContext } from "../contextAPI/MyContext";

export default function Home() {
  const data = useContext(apiContext);
  console.log("data:", data);
  return (
    <div>
      <h1>All Products</h1>
      <div className="gird grid-cols-4">
        {data.map((item, index) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
}
