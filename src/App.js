import './App.scss';
import React, { useState } from 'react';
import Counter from './components/Counter';
import SearchForm from './components/SearchForm';
import GenreSelect from './components/GenreSelect';


const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

function App() {
  const [active, setActive] = useState(genres[0]);
  const callback = (e) => {
    e.preventDefault();
    setActive(e.target.textContent);
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
          <SearchForm />
          <GenreSelect genres={genres} active={active} onSelect={(e) => callback(e)} />
        </div>
      </div>
    </div>
  );
}

export default App;
