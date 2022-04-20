import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <div className="notFound">
      <div className="notFoundHeading">
      <span className="notFoundTitle1">ERROR 404</span>
      <span className="notFoundTitle2">Page You are looking for is Not Found...</span>
     </div>
      <button className="notFoundHomeButton">
        <Link className="link" to="/">Back</Link>
      </button>
    </div>
  );
}
