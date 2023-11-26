import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MovieListPage from './pages/MovieListPage/MovieListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

import SearchForm from './components/SearchForm/SearchForm';
import MovieDetails from './components/MovieDetails/MovieDetails';
import AddMovieForm from './components/AddMovieForm/AddMovieForm';

import './App.scss';

function App() {
  const handleSubmit = (value) => {

  };

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieListPage />} >
            <Route path='/' element={<SearchForm searchQuery='' onSearch={handleSubmit} />} >
              <Route path='/new' element={<AddMovieForm open={true} />} />
            </Route>
            <Route path='/:movieId' element={<MovieDetails />} />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
