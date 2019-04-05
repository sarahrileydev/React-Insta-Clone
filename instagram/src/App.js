import React, { Component } from "react";
import "./App.css";

import dummydata from "./dummydata";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./authentication/withAuthenticate";
import Login from "./components/Login/Login";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: ""
    };
  }

 

  componentDidMount = () => {
    this.setState({
      data: dummydata
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
       <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

export default App;
