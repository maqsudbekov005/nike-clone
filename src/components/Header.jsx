import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onSeeLikeHandler = () => {
    navigate("/likes");
  };
  return (
    <div className="header_component">
      <div>
        <img src="https://i.postimg.cc/Gt36kSBM/logo.png" alt="Nike Logo" />
      </div>
      <div className="icons-item">
        <MdOutlineShoppingBag className="icon_header_component" />
        <FaRegHeart
          className="icon_header_component"
          onClick={onSeeLikeHandler}
        />
        <CgProfile className="icon_header_component" />
      </div>
    </div>
  );
};

export default Header;
// https://nike-clone-six.vercel.app/static/media/empty-wishlist.998c7ca24895733ac7af.png
