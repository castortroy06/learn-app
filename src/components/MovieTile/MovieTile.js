import React from 'react';
import PropTypes from 'prop-types';
import './movie-tile.scss';

const MovieTile = ({ imageUrl, name, releaseYear, genres, onClick }) => {
    return (
        <div className="movie-tile col-20" onClick={onClick}>
            <img data-testid="image" alt={name} src={`/images/movies/${imageUrl}`} />

            <div className="movie-tile--container">
                <h6 data-testid="name" className="movie-tile--name display-6">{name}</h6>
                <p data-testid="year" className="movie-tile--year">{releaseYear}</p>
            </div>

            <p data-testid="categories" className="movie-tile--categories">{genres.join(', ')}</p>
        </div>
    );
};

MovieTile.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default MovieTile;
