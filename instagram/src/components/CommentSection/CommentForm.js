import React from "react";
import Comment from "./Comment";

import styled from 'styled-components';

const CommentSectionStyle = styled.div`
    margin: 20px 0;
    padding: 0 15px;

    input { 
      width: 100%;

    }
`;

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      input: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addComment = e => {
    e.preventDefault();
    const copiedComment = this.state.comments.slice();
    const newComment = {
      username: "newcomment",
      id: Date.now(),
      text: this.state.input
    };
    copiedComment.push(newComment);
    //changing the data and so you have to setState
    this.setState({
      comments: copiedComment,
      input: ""
    });
  };

  // submitComment = event => {
  //   event.preventDefault();
  //   this.setState({ input: "" });
  //   this.props.addComment(event, this.state.input);
  // };

  render() {
    return (
      <CommentSectionStyle>
        <div className="comment">
          {this.state.comments.map(item => (
            <Comment key={item.id} username={item.username} text={item.text} />
          ))}
        </div>
        <div className="comment-form">
          <form onSubmit={this.addComment}>
            <input
              type="text"
              name="input"
              value={this.state.input}
              onChange={this.handleChanges}
              placeholder="Add comment..."
            />
          </form>
        </div>
      </CommentSectionStyle>
    );
  }
}

export default CommentForm;
