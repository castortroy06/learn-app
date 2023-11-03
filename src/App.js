import React from 'react';
import './App.scss';
import Counter from './components/Counter/Counter';
import SearchForm from './components/SearchForm/SearchForm';
import GenreSelect from './components/GenreSelect/GenreSelect';


const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

function App() {  
  const callback = (value) => {

  };
  
  const handleSubmit = (value) => {

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
          <GenreSelect genres={genres} initialActive={genres[0]} onChange={callback} />
        </div>
      </div>
    </div>
  );
}

export default App;
