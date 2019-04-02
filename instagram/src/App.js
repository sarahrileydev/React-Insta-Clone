import React, { Component } from "react";
import "./App.css";

import PostContainer from "./components/PostContainer/PostContainer";
import dummydata from "./dummydata";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
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
      <div className="App">
        <h1>This is the App!</h1>
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
