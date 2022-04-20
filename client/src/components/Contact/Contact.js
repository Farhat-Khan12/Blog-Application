import React from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <span className="contactTitle">CONTACT US</span>
      <div className="contactDetails">
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
        <h4>
          Ipsum temporibus quaerat eligendi corrupti? Minus modi eum voluptates
          omnis?
        </h4>
        <h4>
          Quisquam eaque, facere ab in deserunt cupiditate id magni nesciunt
          soluta itaque!
        </h4>
        <h2>FEEL FREE TO CONTACT US!</h2>
        <div className="aboutIcons">
          <a href="https://www.facebook.com/" target="_blank" className="link">
            <i className="topIcons fa-brands fa-facebook-square" style={{color: "#4267B2"}}></i>
          </a>
          <a
            href="https://www.instagram.com/?hl=en"
            target="_blank"
            className="link"
          >
            <i className="topIcons fa-brands fa-instagram-square" style={{color: "#bc2a8d"}}></i>
          </a>
          <a
            href="https://twitter.com/?lang=en"
            target="_blank"
            className="link"
          >
            <i className="topIcons fa-brands fa-twitter-square" style={{color: "#1DA1F2"}}></i>
          </a>
          <a href="https://in.pinterest.com/" target="_blank" className="link">
            <i className="topIcons fa-brands fa-pinterest-square" style={{color: "#c8232c"}}></i>
          </a>
        </div>
      </div>
    </div>
  );
}
