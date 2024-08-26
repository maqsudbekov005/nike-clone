import React, { useRef, useState } from "react";
import "./nike.css";

function Nike() {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  const handleMouseOver = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.pause();
    }
  };

  return (
    <div className="header">
      <div>
        <h1>
          Play With Electric Nike <br /> Adapt 2.0 Sneakers
        </h1>
        <button className="btn">Explore Product</button>
      </div>
      <div className="product">
        <div className="krasofka-vd">
          <video
            ref={videoRefs[0]}
            src="https://static.nike.com/a/videos/q_90,vc_h265/01e782c6-133e-434c-8880-98d3bf63fc14/video.mp4"
            controls
            onMouseLeave={() => handleMouseLeave(0)}
            onMouseOver={() => handleMouseOver(0)}
          ></video>
          <br />
          <br />
          <br />
          <video
            ref={videoRefs[1]}
            src="https://static.nike.com/a/videos/q_90/6235eac6-519f-4052-bf3a-b12d8093fc9e/video.mp4"
            controls
            onMouseLeave={() => handleMouseLeave(1)}
            onMouseOver={() => handleMouseOver(1)}
          ></video>
          <br />
          <br />
          <br />
          <video
            ref={videoRefs[2]}
            src="https://static.nike.com/a/videos/q_90/59d900c0-7339-46da-bdc3-3b3604cfcdfc/video.mp4"
            controls
            onMouseLeave={() => handleMouseLeave(2)}
            onMouseOver={() => handleMouseOver(2)}
          ></video>
        </div>
        <div className="krasofka">
          <img
            src="https://i.postimg.cc/6p6t9skT/hero.png"
            alt="Nike Sneakers"
          />
        </div>
      </div>
    </div>
  );
}

export default Nike;
