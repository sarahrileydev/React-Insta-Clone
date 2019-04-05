import React, { Component } from "react";

import styled from "styled-components";

const LikeStyle = styled.div`
  padding: 10px 0 0 10px;

  i {
    font-size: 18px;
    padding: 0 5px;
  }

  .fas {
    color: crimson;
  }
`;

class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //brings in likes from dummydata
      likes: this.props.likes,
      clicked: false
    };
  }

  addLike = () => {
    //get the old likes and add one for each click
    let likes = this.state.likes + 1;
    //if clicked shows true minus one like
    if (this.state.clicked === true) {
      likes = this.state.likes - 1;
    }

    this.setState({
      //set the new likes to the state in place of old likes
      likes,
      //true/false toggle
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <LikeStyle>
        <i
          onClick={this.addLike}
          className={`far fa-heart fa-2x heart ${
            this.state.clicked ? "fas fa-heart" : null
          }`}
        />
        <i className="far fa-comment" />
        <p className="likes">{this.state.likes} likes</p>
      </LikeStyle>
    );
  }
}

export default Likes;
