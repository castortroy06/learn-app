import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import MovieTile from './MovieTile';

describe('MovieTile', () => {
    it('match snapshot', () => {
        const handleClick = () => {
            
        };

        const options = {
            'name': 'Pulp Fiction',
            'imageUrl': 'pulp-fiction.png',
            'releaseYear': 2004,
            'genres': ['Action & Adventure'],
            'onClick': handleClick(),
        }

        const tree = renderer.create(<MovieTile {...options} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
