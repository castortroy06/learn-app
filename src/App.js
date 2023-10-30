import React, { useState } from 'react';
import './App.scss';
import Counter from './components/Counter/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';


const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

function App() {
  const [active, setActive] = useState(genres[0]);
  
  const callback = (value) => {
    //console.log(value);
    setActive(value);
  };
  
  const handleSubmit = (value) => {
    //console.log(value);
  };
  
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-link">
          Lesson 1
        </h1>
      </header>

      <div className="main-content">
        <div className="container">
          <Counter />
          <SearchForm onChange={handleSubmit} />
          <GenreSelect genres={genres} active={active} onChange={callback} />
        </div>
      </div>
    </div>
  );
}

export default App;
