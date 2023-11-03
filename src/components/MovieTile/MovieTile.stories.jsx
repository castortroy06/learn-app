import MovieTile from './MovieTile';

export default {
    title: 'Movie Tile',
}

const handleClick = () => {
    
};

const movieTile = {
    'name': 'Pulp Fiction',
    'imageUrl': 'pulp-fiction.png',
    'releaseYear': 2004, 
    'genres': ['Action & Adventure'],
    'onClick': handleClick(),
}

export const Default = () => <MovieTile {...movieTile} />