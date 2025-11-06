import React, { useContext } from "react";
import { apiContext } from "../contextAPI/MyContext";
import Card from "../components/Card";

export default function Jewellery() {
  const data = useContext(apiContext);
  const jewelleryItems = data.filter((item) => item.category === "jewelery");

  if (jewelleryItems.length === 0) {
    return <p className="text-center mt-10">Loading Jewellery items...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">
        Jewellery Collection
      </h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {jewelleryItems.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
