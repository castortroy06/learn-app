import MovieTile from './MovieTile';

export default {
    title: 'Movie Tile',
}

const handleClick = () => {

};

const movieTile = {
    'title': 'Pulp Fiction',
    'poster_path': 'https://image.tmdb.org/t/p/w500/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg',
    'release_date': 2004,
    'genres': ['Action & Adventure'],
}

export const Default = () => <MovieTile onClick={handleClick} {...movieTile} />
