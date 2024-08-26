import React from "react";
import Card from "./Card";

function Data() {
  const sniker = [
    {
      title: "Nike Air Force 1 Mid '07 LX",
      category: "Man's Shoes",
      price: "₹11895",
      rating: "3.8",
      image: "https://i.postimg.cc/wMQ9sshN/product17.png",
    },
    {
      title: "Air Jordan XXXVI Low Luka PF",
      category: "Men's Basketball Shoes",
      price: "₹16295",
      rating: "4.2",
      image: "	https://i.postimg.cc/VkpPvF3T/product19.png",
    },
    {
      title: "Midnight Navy",
      category: "LeBron 2",
      price: "₹18395",
      rating: "4.8",
      image: "https://i.postimg.cc/VLWk7L8H/product8.png",
    },
  ];
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {sniker.map((nike, index) => (
          <Card
            key={index}
            title={nike.title}
            category={nike.category}
            price={nike.price}
            rating={nike.rating}
            image={nike.image}
          />
        ))}
      </div>
    </>
  );
}

export default Data;
