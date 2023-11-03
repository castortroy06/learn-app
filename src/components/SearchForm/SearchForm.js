import React, { useState } from "react";
import './search-form.scss';


const SearchForm = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState('My input search value');

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(searchTerm);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onChange(e.target.value);
    }
  };

  return (
    <div className="form-holder text-center">
      <h2 className='text-center'>Ticket 2: Form</h2>
      <form className="text-start" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="search">Search</label>
        <input name="search" className="form-control" id="search"
          data-testid="search-input"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => { setSearchTerm(e.target.value) }}
          onKeyDown={handleKeyDown}
        />
        <button data-testid="submit-button" className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SearchForm;
