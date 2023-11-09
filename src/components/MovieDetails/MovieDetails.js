import React, { useState } from "react";
import './movie-details.scss';

const MovieDetails = ({ imageUrl, name, releaseYear, duration, genres, description, rate, onClick }) => {

    return (
        <div className="movie-details row">
            <img className="col-4" data-testid="image" alt={name} src={`/images/movies/${imageUrl}`} />
            <div className="movie-details--container col-8">
                <h2 data-testid="name" className="movie-details--name">{name}<span className="movie-details--rate">{rate}</span></h2>
                <p data-testid="categories" className="movie-details--categories">{genres.join(', ')}</p>
                <p className="movie-details--year-duration">
                    <span data-testid="year" className="movie-details--year">{releaseYear}</span>
                    <span data-testid="duration" className="movie-details--duration">{duration}</span>
                </p>
                <p data-testid="description" className="movie-details--description">{description}</p>

            </div>
        </div>
    );
};

export default MovieDetails;
