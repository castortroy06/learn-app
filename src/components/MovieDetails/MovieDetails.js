import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../../api/MovieAPI';
import './movie-details.scss';

const MovieDetails = () => {
    const { movieId } = useParams();
    const [props, setProps] = useState({});

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchMovie(movieId);
                setProps(response);

            } catch (e) {

            }
        };

        loadData();
    }, [movieId]);

    return (
        <div className="movie-details row">
            <img className="col-4" data-testid="image" alt={props.title} src={props.poster_path} />
            <div className="movie-details--container col-8">
                <h2 data-testid="name" className="movie-details--name">{props.title}<span className="movie-details--rate">{props.vote_average}</span></h2>
                <p data-testid="categories" className="movie-details--categories">{props['genres'] !== undefined ? props.genres.join(', ') : ''}</p>
                <p className="movie-details--year-duration">
                    <span data-testid="year" className="movie-details--year">{props.release_date}</span>
                    <span data-testid="duration" className="movie-details--duration">{props.runtime}</span>
                </p>
                <p data-testid="description" className="movie-details--description">{props.overview}</p>
            </div>
        </div>
    );
};

export default MovieDetails;
