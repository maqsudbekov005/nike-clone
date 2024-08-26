import React from "react";
import Nike from "../nike";
import Data from "./Data";
import Featured from "./Featured";
import NProduct from "./ProductsN";
import SocialIcons from "./SocialIcons";
import Featured2 from "./Featured2";
import Data2 from "./Data2";
import Footer from "./Footer";

const Main = ({ setProducts, products }) => {
  return (
    <div className="App">
      <Nike />
      <SocialIcons />
      <Data />
      <Featured />
      <NProduct setProducts={setProducts} products={products} />
      <Featured2 />
      <Data2 />
      <Footer />
    </div>
  );
};

export default Main;
