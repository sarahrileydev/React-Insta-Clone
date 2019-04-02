import React from 'react'; 
import CommentForm from "./CommentForm";


const CommentSection = props => {
  return(
    <div className="comment-section">
      <CommentForm comments={props.comments} /> 
    </div>
  );
}


export default CommentSection;