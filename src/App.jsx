import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Navigation from "./routing/Navigation";

export default function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Card />
      <Footer />
    </div>
  );
}
