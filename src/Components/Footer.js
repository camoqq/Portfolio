import React from "react";
import {
  FaFacebook,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer1">
      <div className="left">
        <div className="phone">
          <FaPhone style={{ color: "gray", marginRight: "10px" }} />
          <span>347-9409440</span>
        </div>
        <div className="mail">
          <FaMailBulk style={{ color: "gray", marginRight: "10px" }} />
          <span>camilog.set@gmail.com</span>
        </div>
      </div>

      <div className="right">
        <a href="https://www.facebook.com">
          <FaFacebook
            size={40}
            style={{ marginRight: "1rem", color: "gray" }}
          />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitter size={40} style={{ marginRight: "1rem", color: "gray" }} />
        </a>
        <a href="https://www.youtube.com">
          <FaYoutube size={40} style={{ marginRight: "1rem", color: "gray" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
