import React, { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MovieDetails from '../MovieDetails/MovieDetails';
import GenreSelect from '../GenreSelect/GenreSelect';
import SortControl from '../SortControl/SortControl';
import MovieTile from '../MovieTile/MovieTile';
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
        async function fetchMyAPI() {
            let apiUrl = 'http://localhost:4000/movies';

            const params = new URLSearchParams();
            params.append('limit', 6);

            if (searchQuery || searchDone) {
                params.append('searchBy', 'title');
                params.append('search', searchQuery);
            }
            switch (sortCriterion) {
                case 'Release Date':
                    params.append('sortBy', 'release_date');
                    params.append('sortOrder', 'asc');
                    break;

                case 'Title':
                    params.append('sortBy', 'title');
                    params.append('sortOrder', 'asc');
                    break;
            }
            if (activeGenre !== 'all') {
                params.append('filter', activeGenre);
            }

            if (params.size) {
                apiUrl += '?' + params.toString();
            }

            try {
                let response = await fetch(apiUrl)
                response = await response.json()
                setMovieList(response.data);
                setTotalMovies(response.totalAmount);
                setSearchDone(true);
            }
            catch (error) {
                console.error(error);
            }
        }

        fetchMyAPI()
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
