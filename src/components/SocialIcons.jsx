import React from "react";
import "./SocialIcons.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const SocialIcons = () => {
  return (
    <div className="social-icons">
      <FaFacebookSquare className="facebook" />
      <FaFacebookMessenger className="messenge" />
      <FaInstagram className="insta" />
      <FaTwitter className="twitter" />
      <FaYoutube className="youtube" />
    </div>
  );
};

export default SocialIcons;
