import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_items_row">
        <div className="footer-section">
          <h3>ABOUT NIKE</h3>
          <ul>
            <li>News</li>
            <li>Careers</li>
            <li>Investos</li>
            <li>Prupose</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Get Help</h3>
          <ul>
            <li>Order Status</li>
            <li>Shipping & Delivery</li>
            <li>Payment Options</li>
            <li>Gift Card Balance</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>Gift Cards</li>
            <li>Promotions</li>
            <li>Find A Store</li>
            <li>Signup</li>
            <li>Nike Jouneral</li>
            <li>Send Us Feeback</li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright© All Reserved Rights JSSTACK DEVELOPERS 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
