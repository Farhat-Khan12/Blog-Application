import React from "react";
import "./Post.css";
import {Link} from 'react-router-dom';

export default function Post({post}) {
  const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF+post.photo} alt="postImage" />}
      <div className="postInfo">
        <div className="postCats">
          {
            post.categories.map((c,i)=>(
              <span className="postCat" key={i}>{c.name}</span>
            ))
          }
        </div>
        <Link to={`/post/${post._id}`} className="link">
        <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {post.desc}
      </p>
    </div>
  );
}
