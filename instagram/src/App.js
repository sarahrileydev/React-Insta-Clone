import React, { Component } from 'react';
import './App.css';

import PostContainer from "./components/PostContainer/PostContainer";
import dummydata from './dummydata';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: dummydata
    }

  }

addComment = (event, item) => {
  event.preventDefault();
  const newComment = {
    id: Date.now()
  };
  //changing the data and so you have to setState
  this.setState({
    data: [newComment, ...this.state.data]
  })
}

  render() {
    console.log(this.state);
    return (
      <div className="App">
       <h1>This is the App!</h1>
       <PostContainer data={this.state.data} addComment={this.addComment}/>
      </div>
    );
  }
}

export default App;
