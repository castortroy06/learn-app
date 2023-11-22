import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';

import MovieDetails from './MovieDetails';

describe('MovieDetails', () => {
    it('match snapshot', () => {
        const handleClick = () => {
            
        };

        const details = {
            'title': 'Pulp Fiction',
            'poster_path': 'https://image.tmdb.org/t/p/w500/bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg',
            'release_date': 2004,
            'runtime': '2h 34m',
            'genres': ['Action & Adventure'],
            'overview': 'Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra',
            'vote_average': 8.9,
            'onClick': handleClick(),
        }

        const tree = renderer.create(<MovieDetails {...details} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
