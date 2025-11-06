import React, { useContext } from "react";
import { apiContext } from "../contextAPI/MyContext";
import Card from "../components/Card";

export default function WomensClothing() {
  const data = useContext(apiContext);
  const WomensClothingItems = data.filter(
    (item) => item.category == "women's clothing"
  );

  if (WomensClothingItems.length == 0) {
    return (
      <p className="text-center mt-10">Loading Women's Clothing items...</p>
    );
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Women's Clothing</h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {WomensClothingItems.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
