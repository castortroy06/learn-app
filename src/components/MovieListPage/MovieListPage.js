import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MovieDetails from '../MovieDetails/MovieDetails';
import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from '../SortControl/SortControl';
import MovieTile from '../MovieTile/MovieTile';
import { fetchMovies } from '../../api/MovieListAPI';
import './movie-list.scss';

const MovieListPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [sortCriterion, setSortCriterion] = useState('Release Date');
    const [activeGenre, setActiveGenre] = useState('all');
    const [movieList, setMovieList] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [totalMovies, setTotalMovies] = useState(0);
    const [searchDone, setSearchDone] = useState(false);

    const genres = ['all', 'documentary', 'comedy', 'horror', 'crime'];

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchMovies(sortCriterion, searchQuery, searchDone, activeGenre);
                console.log(response);
                setMovieList(response.data);
                setTotalMovies(response.totalAmount);
                setSearchDone(true);
            } catch (e) {

            }
        };

        loadData();
    }, [searchQuery, sortCriterion, activeGenre]);

    const handleSearch = (searchValue) => {
        setSearchQuery(searchValue);
    };

    const handleGenreChange = (genre) => {
        setActiveGenre(genre);
    }

    const handleSortControlChange = (criterion) => {
        setSortCriterion(criterion);
    }

    const handleMovieClick = (props) => {
        setSelectedMovie(props);
    }

    return (
        <div className='movie-list'>
            {!!selectedMovie ? <MovieDetails onClick={handleMovieClick} {...selectedMovie} /> : <SearchForm searchQuery={searchQuery} onSearch={handleSearch} />}
            <div className='movie-list--container'>
                <div className='movie-list--control-panel'>
                    <GenreSelect genres={genres} initialActive={activeGenre} onChange={handleGenreChange} />
                    <SortControl criterion={sortCriterion} onChange={handleSortControlChange} />
                </div>

                <div className='movie-list--total'><h4><strong>{totalMovies}</strong> movies found</h4></div>

                <div className='movie-list--movies'>
                    {movieList.map((movie, key) => (
                        <MovieTile key={key} onClick={handleMovieClick} {...movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieListPage;
