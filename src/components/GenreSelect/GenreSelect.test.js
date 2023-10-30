import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import GenreSelect from './GenreSelect';

describe('GenreSelect', () => {
    it('renders all genres passed in props', () => {
        const testGenres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

        render(<GenreSelect genres={testGenres} />);

        const genreElements = screen.getAllByTestId('genre-item');

        expect(genreElements.length).toBe(testGenres.length);

        genreElements.forEach((item, index) => {
            expect(item).toHaveTextContent(testGenres[index]);
        });
    });


    it('highlights a selected genre passed in props', () => {
        const testGenres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
        const testSelectedGenre = testGenres[0];

        render(<GenreSelect genres={testGenres} active={testSelectedGenre} />);

        const genreElements = screen.getAllByTestId('genre-item');

        genreElements.forEach((item) => {
            let itm = item.firstChild;
            if (itm.textContent === testSelectedGenre) {
                expect(itm).toHaveClass('active');
            } else {
                expect(itm).not.toHaveClass('active');
            }
        });
    });

    it('highlights a selected genre passed in props', () => {
        const testGenres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
        const testSelectedGenre = testGenres[0];

        render(<GenreSelect genres={testGenres} active={testSelectedGenre} />);

        const genreElements = screen.getAllByTestId('genre-item');

        genreElements.forEach((item) => {
            let itm = item.firstChild;
            if (itm.textContent === testSelectedGenre) {
                expect(itm).toHaveClass('active');
            } else {
                expect(itm).not.toHaveClass('active');
            }
        });
    });


    it('calls the "onChange" callback with the correct genre after a click event on a genre button', () => {
        const testGenres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];
        const handleChange = jest.fn();

        render(<GenreSelect genres={testGenres} onChange={handleChange} />);

        const documentaryButton = screen.getByTestId('genre-link-Documentary');
        fireEvent.click(documentaryButton);

        expect(handleChange).toHaveBeenCalledWith('Documentary');
    });
});
