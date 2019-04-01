import React from 'react'; 
import CommentForm from "./CommentForm";
import Comment from "./Comment"

const CommentSection = props => {
  return(
    <div className="comment-section">
      <h2>This is the Comment Section!</h2>
      <CommentForm addComment={props.addComment}/> 
    </div>
  );
}


export default CommentSection;