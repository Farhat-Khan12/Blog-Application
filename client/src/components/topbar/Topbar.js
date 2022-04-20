import React, { useContext } from "react";
import { Context } from "../../context/Context";
import "./Topbar.css";
export default function Topbar() {
  const {user, dispatch} = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () =>{
    dispatch({type: "LOGOUT"});
  }
  return (
    <div className="top">
      <div className="topLeft">
        <a href="https://www.facebook.com/" target="_blank"  className="link"><i className="topIcons fa-brands fa-facebook-square" style={{color: "#4267B2"}}></i></a>
        <a href="https://www.instagram.com/?hl=en" target="_blank"  className="link"><i className="topIcons fa-brands fa-instagram-square" style={{color: "#bc2a8d"}}></i></a>
        <a href="https://twitter.com/?lang=en" target="_blank"  className="link"><i className="topIcons fa-brands fa-twitter-square" style={{color: "#1DA1F2"}}></i></a>
        <a href="https://in.pinterest.com/" target="_blank"  className="link"><i className="topIcons fa-brands fa-pinterest-square" style={{color: "#c8232c"}}></i></a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItems">
            <a href="/" className="link">HOME</a>
          </li>
          <li className="topListItems">
            <a href="/about" className="link">ABOUT</a>
          </li>
          <li className="topListItems">
            <a href="/contact" className="link">CONTACT</a>
          </li>
          <li className="topListItems">
            <a href="/write" className="link">WRITE</a>
          </li>
          <li className="topListItems">
            <a href="/" className="link" onClick={handleLogout}>{user && "LOGOUT"}</a>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ?(
            <a href="/settings" className="link">
              <img className="topImage" src={PF+user.profilePic} alt="profile" />
            </a>
          ):(
            <>
            <ul className="topList">
              <li className="topListItems">
            <a href="/login" className="link">LOGIN</a>
          </li>
          <li className="topListItems">
            <a href="/register" className="link">REGISTER</a>
          </li>
          </ul>
            </>
          )
        }
         <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
