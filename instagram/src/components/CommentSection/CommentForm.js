import React from "react";

class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value})
  }

  submitComment = event => {
    event.preventDefault();
    this.setState({ input: ""});
    this.props.addComment(event, this.state.input)
  }

  render() {
    return (
      <div className="comment-form">
        <h1>This is the Form</h1>T
        <form onSubmit={this.submitComment}>
          <input 
          type="text"
          name="input"
          value={this.state.input}
          onChange={this.handleChanges}
           />
        </form>
      </div>
    );
  }
}

export default CommentForm;
