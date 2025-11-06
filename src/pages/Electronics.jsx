import React, { useContext } from "react";
import { apiContext } from "../contextAPI/MyContext";
import Card from "../components/Card";

export default function Electronics() {
  const data = useContext(apiContext);
  const ElectronicsItems = data.filter(
    (item) => item.category == "electronics"
  );

  if (ElectronicsItems.length == 0) {
    return <p className="text-center mt-10">Loading Electronics items...</p>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4">Electronics</h1>
      <div className="grid grid-cols-4 gap-4 p-4">
        {ElectronicsItems.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
