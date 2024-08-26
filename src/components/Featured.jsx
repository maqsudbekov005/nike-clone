import React from "react";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-product">
      <div className="featured-content">
        <h2 className="f-title">FEATURED</h2>
        <h3 className="f-subtitle">NIKE SNEAKERS AIR LANCING SHOES</h3>
        <p className="f-description">
          The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball
          OG that puts a fresh spin on what you know best: durably stitched
          overlays, clean finishes and the perfect amount of flash to make you
          shine.
        </p>
        <button className="btn-explore">Explore More</button>
      </div>
      <div className="featured-img">
        <img
          src="https://nike-store-jsstack.vercel.app/assets/nike-air-red.70d9fd5b.png"
          alt=""
          width={450}
        />
      </div>
    </div>
  );
};

export default Featured;
