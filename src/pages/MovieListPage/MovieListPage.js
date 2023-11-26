import React, { useEffect, useState } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import GenreSelect from '../../components/GenreSelect/GenreSelect';
import SortControl from '../../components/SortControl/SortControl';
import MovieTile from '../../components/MovieTile/MovieTile';
import { fetchMovies } from '../../api/MovieListAPI';
import './movie-list.scss';

const MovieListPage = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const location = useLocation();

    const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
    const [sortCriterion, setSortCriterion] = useState(searchParams.get('sort') || 'Release Date');
    const [activeGenre, setActiveGenre] = useState(searchParams.get('active-genre') || 'all');

    const [movieList, setMovieList] = useState([]);
    const [totalMovies, setTotalMovies] = useState(0);
    const [searchDone, setSearchDone] = useState(false);

    const genres = ['all', 'documentary', 'comedy', 'horror', 'crime'];

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchMovies(sortCriterion, searchQuery, searchDone, activeGenre);
                setMovieList(response.data);
                setTotalMovies(response.totalAmount);
                setSearchDone(true);
                navigate(`${location.pathname}?search=${searchQuery}&sort=${sortCriterion}&active-genre=${activeGenre}`);
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

    return (
        <div className='movie-list'>
            <Outlet context={[handleSearch]} />
            <div className='movie-list--container'>
                <div className='movie-list--control-panel'>
                    <GenreSelect genres={genres} initialActive={activeGenre} onChange={handleGenreChange} />
                    <SortControl criterion={sortCriterion} onChange={handleSortControlChange} />
                </div>

                <div className='movie-list--total'><h4><strong>{totalMovies}</strong> movies found</h4></div>

                <div className='movie-list--movies'>
                    {movieList.map((movie, key) => (
                        <MovieTile key={key} {...movie} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieListPage;
