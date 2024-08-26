import React from "react";
import { FaShoppingBag, FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import "./Card.css";

const Card = ({
  title,
  products,
  setProducts,
  category,
  price,
  rating,
  image,
  like,
  index,
}) => {
  const handleLikeProduct = () => {
    const updatedProducts = products?.map((product, i) =>
      i === index ? { ...product, like: !product.like } : product
    );
    setProducts(updatedProducts);
  };

  return (
    <div className="nike-card">
      <div className="img_div">
        <img src={image} alt={title} className="nike-img" />
      </div>
      <div className="nike-info">
        <h3>{title}</h3>
        <p>{category}</p>
        <div className="nike-price-rating">
          <span className="price">{price}</span>
          <span className="rating">
            {rating}
            <FaStar />
          </span>
        </div>
        <div className="nike-actions">
          <button className="basket">
            <FaShoppingBag />
          </button>
          <button className="like" onClick={handleLikeProduct}>
            <CiHeart color={like ? "red" : "black"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
