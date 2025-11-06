import React from "react";
import { FaLuggageCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/react.svg";

export default function Header() {
  return (
    <div className="flex bg-violet-200 p-4 font-bold items-center justify-between">
      <Link to="/">
        {/* <h2 className="text-xl">MyShop</h2> */}
        <img src={logo} alt="logo" />
      </Link>

      <ul className="flex gap-6 items-center">
        <li>Mens Clothing</li>
        <li>Electronics</li>
        <li>Women's Clothing</li>
        <Link to="/Jewellery">
          <li>Jewellery</li>
        </Link>
        <FaLuggageCart />
      </ul>
    </div>
  );
}
