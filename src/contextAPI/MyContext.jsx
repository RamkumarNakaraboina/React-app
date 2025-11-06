import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const apiContext = createContext();

export default function MyContext({ children }) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => setApiData(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return <apiContext.Provider value={apiData}>{children}</apiContext.Provider>;
}
