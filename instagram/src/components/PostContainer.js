import React from 'react';

import CommentSection from "./CommentSection/CommentSection";

const PostContainer = props => {
  return(
    <div className="post-container">
    <h1>Hello, I am the Post Container!</h1>
    <CommentSection />
    </div>
  );
}

export default PostContainer;