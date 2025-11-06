import React from "react";
import { FaLuggageCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Header() {
  return (
    <div className="flex bg-violet-200 p-4 font-bold items-center justify-between">
      <Link to="/">
        <img src={logo} alt="logo" className="h-15 w-auto object-contian" />
      </Link>

      <ul className="flex gap-6 items-center">
        <Link to="/MensClothing">
          <li>Mens Clothing</li>
        </Link>
        <Link to="/Electronics">
          <li>Electronics</li>
        </Link>
        <Link to="/WomensClothing">
          <li>Womens Clothing</li>
        </Link>
        <Link to="/Jewellery">
          <li>Jewellery</li>
        </Link>
        <FaLuggageCart />
      </ul>
    </div>
  );
}
