import React from "react";


import Post from "./Post";

const PostContainer = props => {
  return (
    <div className="post-container">
      {props.data.map(item => (
        <Post key={item.id} post={item}/>
      ))}
    </div>
  );
};

export default PostContainer;
