import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Jewellery from "../pages/Jewellery";
import MensClothing from "../pages/MensClothing";
import WomensClothing from "../pages/WomensClothing";
import Electronics from "../pages/Electronics";
import ProductsDeatils from "../pages/ProductsDeatils";
export default function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MensClothing" element={<MensClothing />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/WomensClothing" element={<WomensClothing />} />
        <Route path="/Jewellery" element={<Jewellery />} />
        <Route path="/product/:id" element={<ProductsDeatils />} />
      </Routes>
    </div>
  );
}
