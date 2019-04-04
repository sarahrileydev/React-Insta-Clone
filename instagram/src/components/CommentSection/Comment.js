import React from "react";

import styled from 'styled-components';

const CommentStyle = styled.div`
    display: flex;
    width: 90%;

    .username {
      font-weight: bold;
      margin-right: 10px;
    }

`;


const Comment = props => {
  return (
    <CommentStyle>
      <p className="username">{props.username}</p>
      <p className="text">{props.text}</p>
    </CommentStyle>
  );
};

export default Comment;
