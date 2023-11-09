import React from "react";
import './movie-tile.scss';

const MovieTile = ({ imageUrl, name, releaseYear, genres, onClick }) => {
    return (
        <div className="movie-tile col-4" onClick={onClick}>
            <img data-testid="image" alt={name} src={`/images/movies/${imageUrl}`} />

            <div className="movie-tile--container">
                <h6 data-testid="name" className="movie-tile--name display-6">{name}</h6>
                <p data-testid="year" className="movie-tile--year col-15">{releaseYear}</p>
            </div>

            <p data-testid="categories" className="movie-tile--categories">{genres.join(', ')}</p>
        </div>
    );
};

export default MovieTile;
