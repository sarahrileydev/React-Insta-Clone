import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import Likes from "./Likes";

import styled from 'styled-components';

const PostHeader = styled.div`
    display: flex;
    align-items: center;

    .profile-pic {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-bottom: 10px;
    }

    h3 {
      font-size: 16px;
      padding-left: 10px;
    }
`;

const Post = props => {
  return(
<div> 
  <PostHeader>
  <img className="profile-pic" 
  src={props.post.thumbnailUrl}
  alt={props.post.thumbnailUrl}
  />
  <h3>{props.post.username}</h3>
  </PostHeader>
  <img 
  className="post-img"
  src={props.post.imageUrl}
  alt={props.post.imageUrl}
  />
   <Likes likes={props.post.likes}/>
   <CommentSection comments={props.post.comments} />

</div>
  );
}

export default Post;