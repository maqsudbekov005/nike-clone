import React, { useEffect, useState } from "react";
import "./Likes.css";

const Likes = ({ products }) => {
  const [filteredData, setfilteredData] = useState(null);

  useEffect(() => {
    const filter = products.filter((x) => x.like);
    setfilteredData(filter);
  }, []);
  if (!filteredData) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="likelar">
      {filteredData.map((item, idx) => (
        <div className="">
          <div>{item.image}</div>
          <h1>{item.title}</h1>
          <p className="desc">{item.category}</p>
          <div>
            <p>{item.price}</p>
            <p>{item.rating}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Likes;
