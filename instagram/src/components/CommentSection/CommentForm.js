import React from "react";
import Comment from "./Comment";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      input: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitComment = event => {
    event.preventDefault();
    this.setState({ input: "" });
    this.props.addComment(event, this.state.input);
  };

  render() {
    return (
      <div className="comment-section">
      <div className="comment">
        {this.state.comments.map(item => (
          <Comment 
          key={item.id} 
          username={item.username}
          text={item.text}
          />
        ))}
      </div>
        <div className="comment-form">
          <form onSubmit={this.submitComment}>
            <input
              type="text"
              name="input"
              value={this.state.input}
              onChange={this.handleChanges}
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CommentForm;
