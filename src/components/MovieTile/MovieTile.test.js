import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import MovieTile from './MovieTile';

describe('MovieTile', () => {
    it('match snapshot', () => {
        const handleClick = (e) => {

        };

        const options = {
            'title': 'Pulp Fiction',
            'poster_path': 'https://image.tmdb.org/t/p/w500/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg',
            'release_date': 2004,
            'genres': ['Action & Adventure'],
        }

        const tree = renderer.create(<MovieTile onClick={handleClick} {...options} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
