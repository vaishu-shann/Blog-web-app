import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Topbar/topbar.component";
import PostPage from "../components/PostPage/post.component";

export default class SinglePost extends Component {
  render() {
    return (
      <div>
        <Navbar />
       <PostPage/>
      </div>
    );
  }
}
