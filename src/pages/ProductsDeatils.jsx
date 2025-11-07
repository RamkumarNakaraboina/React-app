import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]);

  console.log("product:", product);

  return (
    <div className="p-6 flex flex-col items-center min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Product Details</h2>

      {product && product.image ? (
        <div className="max-w-sm bg-white shadow-lg rounded-2xl p-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-56 h-56 mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">
            {product.title}
          </h3>
          <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
          <p className="text-green-600 font-bold text-xl mt-4">
            ${product.price}
          </p>
          <button className="mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200">
            Add to Cart
          </button>
        </div>
      ) : (
        <p className="text-gray-500">Loading product...</p>
      )}
    </div>
  );
}
