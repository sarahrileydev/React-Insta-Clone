import React from "react";

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div className="header">
        <i className="fab fa-instagram" />
        <h1>Instagram</h1>
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

        <button class="btn" onClick={props.updateSearch}>
          Search...
        </button>
      </form>
      <div className="nav-icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;
