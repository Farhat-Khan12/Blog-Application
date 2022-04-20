import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
export default function Sidebar() {
  const [cats,setCats] = useState([]);

  useEffect(()=>{
    const getCats = async ()=>{
      const res = await axios.get("http://localhost:5000/api/categories")
      setCats(res.data)
    };
    getCats();
  },[]);
  return (    
    <div className="sidebar">
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="Images/Kitten1.jpg" alt="user" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          temporibus quaerat eligendi corrupti? Minus modi eum voluptates omnis?
        </p>
      </div> */}
      <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
              {
                cats.map((c)=>(
                  <Link to={`/?cat=${c.name}`} className="link">
                  <li className="sidebarListItem">{c.name}</li>
                  </Link>
                ))
              }
          </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/" target="_blank"  className="link"><i className="topIcons fa-brands fa-facebook-square" style={{color: "#4267B2"}}></i></a>
        <a href="https://www.instagram.com/?hl=en" target="_blank"  className="link"><i className="topIcons fa-brands fa-instagram-square" style={{color: "#bc2a8d"}}></i></a>
        <a href="https://twitter.com/?lang=en" target="_blank"  className="link"><i className="topIcons fa-brands fa-twitter-square" style={{color: "#1DA1F2"}}></i></a>
        <a href="https://in.pinterest.com/" target="_blank"  className="link"><i className="topIcons fa-brands fa-pinterest-square" style={{color: "#c8232c"}}></i></a>
        </div>
      </div>
    </div>
  );
}
