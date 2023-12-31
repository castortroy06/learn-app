import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './movie-tile.scss';

const MovieTile = (props) => {
    return (
        <div className="movie-tile col-20">
            <Link to={`/${props.id}`}>
                <img data-testid="image" alt={props.title} src={props.poster_path} />

                <div className="movie-tile--container">
                    <h6 data-testid="name" className="movie-tile--name display-6">{props.title}</h6>
                    <p data-testid="year" className="movie-tile--year">{props.release_date}</p>
                </div>

                <p data-testid="categories" className="movie-tile--categories">{props.genres.join(', ')}</p>
            </Link>
        </div>
    );
};

MovieTile.propTypes = {
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
};

export default MovieTile;
