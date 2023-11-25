import React from 'react';
import MovieListPage from './components/MovieListPage/MovieListPage';
import './App.scss';

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

function App() {  
  const callback = (value) => {

  };
  
  const handleSubmit = (value) => {

  };
  
  return (
    <div className="app">
      <MovieListPage />
    </div>
  );
}

export default App;
