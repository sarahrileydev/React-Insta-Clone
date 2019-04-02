import React, { Component } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import dummydata from "./dummydata";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      search: ""
    };
  }

  handleSearch = event => {
    this.setState({
      search: event.target.value
    });
  };

  updateSearch = event => {
    event.preventDefault();
    if (this.state.search === "") {
      this.setState({
        data: dummydata
      });
    } else {
      this.setState({
        data: dummydata.filter(
          user => user.username.includes(this.state.search) === true
        )
      });
    }
  };

  componentDidMount = () => {
    this.setState({
      data: dummydata
    });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <SearchBar
          search={this.handleSearch}
          users={this.state.data}
          updateSearch={this.updateSearch}
        />
        <PostContainer data={this.state.data} />
      </div>
    );
  }
}

export default App;
