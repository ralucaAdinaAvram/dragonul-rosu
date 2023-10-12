import React from "react";
import Home from "../src/components/Home";
import Contact from "../src/components/Contact";
import About from "../src/components/About";
import Products from "../src/components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";

interface Product {
  name: string;
  price: number;
}

function App(): JSX.Element {
  const product: Product = {
    name: "Example Product",
    price: 100.0,
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Pass the product as a prop to Products component */}
        <Route path="/products" element={<Products product={product} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
