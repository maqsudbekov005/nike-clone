import "./styles.css";
import Main from "./components/Main";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import Likes from "./components/Likes";
import { productsData } from "./productData";

export default function App() {
  const [products, setProducts] = useState([...productsData]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          index
          element={<Main products={products} setProducts={setProducts} />}
        />
        <Route path="/likes" element={<Likes products={products} />} />
      </Routes>
    </div>
  );
}
