import React, { useContext } from "react";
import { apiContext } from "../contextAPI/MyContext";
import Card from "../components/Card";

export default function MensClothing() {
  const data = useContext(apiContext);
  const MensClothingItems = data.filter(
    (item) => item.category == "men's clothing"
  );

  if (MensClothingItems.length == 0) {
    return <p className="text-center mt-10">Loading Men's Clothing items...</p>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Men's Clothing</h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {MensClothingItems.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
