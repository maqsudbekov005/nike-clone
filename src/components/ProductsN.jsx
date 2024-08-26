import React from "react";
import Card from "./Card";
import "./ProductsN.css";

function NProduct({ products, setProducts }) {
  return (
    <div className="grid_shoe">
      {products.map((item, index) => (
        <Card
          key={index}
          data={item}
          index={index}
          setProducts={setProducts}
          products={products}
          title={item.title}
          category={item.category}
          price={item.price}
          rating={item.rating}
          image={item.image}
          like={item.like}
        />
      ))}
    </div>
  );
}

export default NProduct;
