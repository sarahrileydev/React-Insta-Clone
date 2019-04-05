import React from "react";
import PostContainer from "./PostContainer";
import dummydata from "../../dummydata";
import SearchBar from "../SearchBar/SearchBar";

import styled from 'styled-components';


const WrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
`;


class PostsPages extends React.Component {
  constructor() {
    super();

    this.state = {
      data: dummydata
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

  render() {
    return (
      <WrapperDiv>
        <SearchBar
          search={this.handleSearch}
          users={this.state.data}
          updateSearch={this.updateSearch}
        />
        <PostContainer data={this.state.data} />
      </WrapperDiv>
    );
  }
}

export default PostsPages;