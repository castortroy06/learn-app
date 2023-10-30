import React, { useState } from 'react';
import '../sass/components/search-form.scss';


const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('My input search value');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform the search or any other action here
    console.log('Search term:', searchTerm);
  };

  return (
    <div className="form-holder text-center">
      <h2 className='text-center'>Ticket 2: Form</h2>
      <form className="text-start" onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="search">Search</label>
        <input name="search" className="form-control" id="search"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
};


export default SearchForm;
