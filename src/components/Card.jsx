import React from "react";
import { Link } from "react-router-dom";
export default function Card({ item }) {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 hover:shadow-lg">
      <div className="h-64 flex items-center justify-center bg-gray-50">
        <Link to={`/product/${item.id}`}>
          <img
            src={item.image}
            alt={item.title}
            className="object-contain h-full p-4"
          />
        </Link>
      </div>

      <div className="p-4 space-y-2">
        <h2 className="font-semibold text-lg text-gray-800 truncate">
          {item.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-blue-600">
            ${item.price.toFixed(2)}
          </span>
          <span className="text-sm text-yellow-500 font-medium">
            ⭐ {item.rating?.rate || "N/A"}
          </span>
        </div>

        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-all"
          type="button"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
