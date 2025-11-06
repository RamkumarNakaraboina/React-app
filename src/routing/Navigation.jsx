import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Jewellery from "../pages/Jewellery";
export default function Navigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Jewellery" element={<Jewellery />} />
      </Routes>
    </div>
  );
}
