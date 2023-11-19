import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import SortControl from './SortControl';

describe('SortControl', () => {
    it('expect click on element expands dropdown', () => {
        render(<SortControl onChange={() => {}} />);

        const sortControlReleaseDateLink = screen.getByTestId('sort-control-Release Date');
        const sortControlReleaseTitle = screen.getByTestId('sort-control-Title');
        const sortControlDropdown = screen.getByTestId('sort-control-dropdown');
      
        // Click the button again and check if the "active" class is removed
        userEvent.click(sortControlReleaseDateLink);
        expect(sortControlDropdown).toHaveClass('expanded');
        expect(sortControlReleaseTitle).toBeVisible();

        userEvent.click(sortControlReleaseTitle);
        expect(sortControlDropdown).not.toHaveClass('expanded');
    });

    it('match snapshot', () => {
        const tree = renderer.create(<SortControl onChange={() => {}} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
