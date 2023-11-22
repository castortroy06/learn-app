import React from 'react';
import './movie-details.scss';

const MovieDetails = (props) => {

    const handleClick = (e) => {
        console.log(props);
    
    }

    return (
        <div className="movie-details row" onClick={handleClick}>
            <img className="col-4" data-testid="image" alt={props.title} src={props.poster_path} />
            <div className="movie-details--container col-8">
                <h2 data-testid="name" className="movie-details--name">{props.title}<span className="movie-details--rate">{props.vote_average}</span></h2>
                <p data-testid="categories" className="movie-details--categories">{props.genres.join(', ')}</p>
                <p className="movie-details--year-duration">
                    <span data-testid="year" className="movie-details--year">{props.release_date}</span>
                    <span data-testid="duration" className="movie-details--duration">{props.runtime}</span>
                </p>
                <p data-testid="description" className="movie-details--description">{props.overview}</p>
            </div>
        </div>
    );
};

MovieDetails.defaultProps = {
    genres: ['Adventures', 'Comedy'],
}

export default MovieDetails;
