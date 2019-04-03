import React, { Component } from "react";
import "./App.css";


import dummydata from "./dummydata";
import PostsPages from "./components/PostContainer/PostsPage";

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
       <PostsPages />
      </div>
    );
  }
}

export default App;
