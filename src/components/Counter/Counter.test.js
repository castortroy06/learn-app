import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Counter from './Counter';

describe('Counter', () => {
  it('initial value should be equal to 0', () => {
    render(<Counter />);
    const valueElement = screen.getByTestId('counter-value');
    expect(valueElement).toHaveTextContent('0');
  });

  it('decrements the displayed value when the "decrement" button is clicked', () => {
    render(<Counter />);

    const decrementButton = screen.getByTestId('decrement-btn');
    const valueElement = screen.getByTestId('counter-value');

    // Ensure the initial value is 0
    expect(valueElement).toHaveTextContent('0');
    fireEvent.click(decrementButton);

    // Ensure the value has been decremented
    expect(valueElement).toHaveTextContent('-1');
  });

  it('incrementss the displayed value when the "increment" button is clicked', () => {
    render(<Counter />);

    const incrementButton = screen.getByTestId('increment-btn');
    const valueElement = screen.getByTestId('counter-value');

    // Ensure the initial value is 0
    expect(valueElement).toHaveTextContent('0');
    fireEvent.click(incrementButton);

    // Ensure the value has been incremented
    expect(valueElement).toHaveTextContent('1');
  });

});
