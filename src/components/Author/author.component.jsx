import { Link } from "react-router-dom";
import React from 'react'
import { AuthorDetail } from "./author.style";
import author from './mock.json'

export default function AuthorPost() {
  return (
    <AuthorDetail>
      {author?.map((item,index)=>(
        <div className="singlePost" key={index}>
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={item.img}
          alt=""
        />
        <div className="wrapper">
        <h1 className="singlePostTitle">
          {item.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
            <Link>
          <span>
           {item.author}
          </span>
          </Link>
          <span>{item.date}</span>
        </div>
        <p className="address">{item.address}</p>
        <p className="singlePostDesc">
          {item.email}
         
        </p>
        </div>
      </div>
    </div>
      ))}
    
    </AuthorDetail>
  );
}
