import axios from "axios";
import React, { Children, useEffect } from "react";
export const apiContext = createContext();
export default function MyContext() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios("https://fakestoreapi.com/products/1").then((data) =>
      setApiData(res.data)
    );
  }, []);
  return <apiContext value={apiData}>{Children}</apiContext>;
}
