import { Link } from "react-router-dom";
import React from 'react'
import { TopBar } from "./topbar.style";
import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton'; 


export default function Navbar() {

  return (
    <TopBar>
      <div className="top">
        <div className="topCenter">
          <ul className="topList">
          <Link to="/">
            <li className="topListItem">HOME</li></Link>
            <Link to="/post">
            <li className="topListItem">POST</li></Link>
            <Link to="/author">
            <li className="topListItem">AUTHOR</li></Link>

         
           
          </ul>
        </div>
        <div className="topRight">
          <LoginButton />
          <LogoutButton/>
        
            <img
              className="topImg"
              src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?cs=srgb&dl=pexels-thorn-yang-139829.jpg&fm=jpg"
              alt=""
            />
         
            {/* <ul className="topList">
              <li className="topListItem">LOGIN</li>
              <li className="topListItem">REGISTER</li>
            </ul> */}
         
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    </TopBar>
  );
}
