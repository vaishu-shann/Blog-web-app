import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Topbar/topbar.component";
import Blogs from "../components/Blogpage/blogs.component";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Blogs />
      </div>
    );
  }
}
