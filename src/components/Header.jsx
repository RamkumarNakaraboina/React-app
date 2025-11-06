import React from "react";
import { FaLuggageCart } from "react-icons/fa";
// import logo from "../logo";
export default function Header() {
  return (
    <div className="flex bg-violet-200 p-4 font-bold">
      <Link to="/">
        <img src="" alt="" />
      </Link>

      <ul className="flex flex-1 justify-between">
        <li>Mens Clothing</li>
        <li>Electronics</li>
        <li>Wemens;s Clothing</li>
        <Link to="/Jewellery">
          <li>Jewellery</li>
        </Link>
        <FaLuggageCart />
        <li>cart</li>
      </ul>
    </div>
  );
}
