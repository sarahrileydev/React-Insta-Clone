import React from "react";
import CommentSection from "../CommentSection/CommentSection";

const Post = props => {
  return(
<div className="post"> 
  <div className="post-header">
  <img className="profile-pic" 
  src={props.post.thumbnailUrl}
  alt={props.post.thumbnailUrl}
  />
  <h3>{props.post.username}</h3>
  </div>
  <img 
  className="post-img"
  src={props.post.imageUrl}
  alt={props.post.imageUrl}
  />
   <CommentSection comments={props.post.comments}/>

</div>
  );
}

export default Post;