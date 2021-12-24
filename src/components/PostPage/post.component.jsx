import { Link } from "react-router-dom";
import React from 'react'
import { PostDetail } from "./post.style";
import post from './mock.json'

export default function PostPage() {
  return (
    <PostDetail>
      {post?.map((item,index)=>(
        <div className="singlePost" key={index}>
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={item.img}
          alt=""
        />
        <h1 className="singlePostTitle">
          {item.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <Link to='/author'>
          <span>
           {item.author}
          </span>
          </Link>
          <span>{item.date}</span>
        </div>
        <p className="singlePostDesc">
          {item.description}
         
        </p>
      </div>
    </div>
      ))}
    
    </PostDetail>
  );
}
