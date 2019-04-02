import React from 'react'; 
import CommentForm from "./CommentForm";
import Comment from "./Comment"

const CommentSection = props => {
  return(
    <div className="comment-section">
      <CommentForm comments={props.comments}/> 
    </div>
  );
}


export default CommentSection;