import React from "react";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import "antd/dist/antd.css";
import Home from "./pages/home";
import { Switch, Route } from 'react-router';
import Author from "./pages/author";
import SinglePost from "./pages/Posts";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Switch>
        
        <Route exact path="/" component={Home}/>
        
        <Route exact path="/post" component={SinglePost}/>
         <Route exact path="/author" component={Author}/>
       
        
      </Switch> 
    </>
  );
}

export default App;
