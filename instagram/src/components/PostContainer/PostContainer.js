import React from "react";

import Post from "./Post";


import styled from 'styled-components';


const PostStyle = styled.div`
   width: 40%;
`;

const PostContainer = props => {
  return (
    <PostStyle>
      {props.data.map(item => (
        <Post key={item.id} post={item}/>
      ))}
    </PostStyle>
  );
};

export default PostContainer;
