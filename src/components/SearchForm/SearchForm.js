import React, { useState } from "react";
import { Link, Outlet, useOutletContext, useLocation } from "react-router-dom";
import './search-form.scss';


const SearchForm = ({ searchQuery }) => {
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [onSearch] = useOutletContext();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  };

  return (
    <div className="search-form">
      <Link className="add-movie-btn btn btn-primary" to={{ pathname: '/new', state: { prevPath: location.pathname } }}>+ Add movie</Link>
      <div className="form-holder text-center">
        <h2>FIND YOUR MOVIE</h2>
        <form className="text-start" onSubmit={handleSubmit}>
          <input name="search" className="form-control" id="search"
            data-testid="search-input"
            type="text"
            placeholder="What do you want to watch?"
            value={searchTerm}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button data-testid="submit-button" className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
      <Outlet />
    </div>
  );
};

export default SearchForm;
