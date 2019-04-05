import React from "react";

import styled from 'styled-components';

const SearchBarStyle = styled.div`
    display: flex;
    justify-content: center;
    width: 60%;
    padding: 20px 0px;

    .header {
      display: flex;
      width: 30%;


      h1 {
        font-size: 28px;
        padding-left: 20px;

        span {
          font-weight: 200;
        }
      }

      i {
        font-size: 30px;
      }

    }

    form {
       width: 30%;
       margin: auto;
    }

    .nav-icons {
      width: 30%;
      text-align: center;
      
      i {
        font-size: 28px;
        
        padding: 0 8px;
      }
    }

`;

const SearchBar = props => {
  return (
    <SearchBarStyle>
      <div className="header">
        <i className="fab fa-instagram" />
        <h1><span>|</span> Instagram</h1>
      </div>

      <form>
        <input
          className="input"
          type="text"
          name="username"
          value={props.users.username}
          placeholder="Search"
          onChange={props.search}
        />

        <button className="btn" onClick={props.updateSearch}>
        </button>
      </form>
      <div className="nav-icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </SearchBarStyle>
  );
};

export default SearchBar;
