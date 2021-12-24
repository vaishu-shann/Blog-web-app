import React from "react";
import { Input, Button } from "antd";
import { AllBlogs, InputField } from "./blogs.style";
import blog from "./mock.json";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Blogs() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <InputField>
        <Input
          placeholder="Search for blog..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
        <Button type="primary">Search</Button>
      </InputField>

      <AllBlogs>
        {blog
          ?.filter((val) => {
            if (searchTerm == " ") {
              return val;
            } else if (
              val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
              val.description.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, index) => (
            <div className="all-post" key={index}>
              <div className="post">
                <img className="postImg" src={item.img} alt="" />
                <div className="postInfo">
                  <div className="postCats">
                    <span className="postCat">
                      
                      <Link to="/author">{item.author}</Link>
                    </span>
                  </div>
                  <span className="postTitle">
                    <div className="link">{item.title}</div>
                  </span>
                  <hr />
                  <span className="postDate">{item.date}</span>
                </div>
                <p className="postDesc">{item.description}</p>
              </div>
            </div>
          ))}
      </AllBlogs>
    </div>
  );
}
