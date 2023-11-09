import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import SearchForm from './SearchForm';

describe('SearchForm', () => {
    it('Search input initial value passed', () => {
        const expectedInitialValue = 'My input search value';

        render(<SearchForm />);
        const inputElement = screen.getByTestId('search-input');

        expect(inputElement).toHaveValue(expectedInitialValue);
    });

    it('onChange callback called with a proper value on form Submit', () => {
        const testValue = 'test-value';
        const handleSubmit = jest.fn();
        render(<SearchForm onChange={handleSubmit} />);

        const inputElement = screen.getByTestId('search-input');
        const submitButton = screen.getByTestId('submit-button');

        fireEvent.change(inputElement, { target: { value: testValue } });
        fireEvent.click(submitButton);

        expect(handleSubmit).toHaveBeenCalledWith(testValue);
    });

    it('onChange callback called with a proper value on input Enter click', () => {
        const testValue = 'test-value';
        const handleSubmit = jest.fn();
        render(<SearchForm onChange={handleSubmit} />);

        const inputElement = screen.getByTestId('search-input');

        fireEvent.change(inputElement, { target: { value: testValue } });
        fireEvent.keyDown(inputElement, {  key: 'Enter', code: 'Enter'  });

        expect(handleSubmit).toHaveBeenCalledWith(testValue);
    });
});
