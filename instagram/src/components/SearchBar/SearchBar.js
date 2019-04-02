import React from 'react'; 

const SearchBar = () => {
  return(
    <div className="search-bar">
    <div className="header">
        <i className="fab fa-instagram" />
        <h1>Instagram</h1>
      </div>

      <form className="search-bar">
        <input className="searchBox" placeholder="Search" />
      </form>
      <div className="nav-icons">
        <i className="far fa-compass" />
        <i className="far fa-heart" />
        <i className="far fa-user" />
      </div>
    </div>
  );
}

export default SearchBar;