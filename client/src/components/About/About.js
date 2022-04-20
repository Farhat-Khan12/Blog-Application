import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="about">
      <span className="aboutTitle">ABOUT US</span>
      <div className="aboutDetails">
        <h2>Hello! My name is Farhat Khan.</h2>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
        <h4>
          Ipsum temporibus quaerat eligendi corrupti? Minus modi eum voluptates
          omnis?{" "}
        </h4>
        <h4>
          Quisquam eaque, facere ab in deserunt cupiditate id magni nesciunt
          soluta itaque!
        </h4>
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
