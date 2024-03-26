import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {describe, expect, test} from '@jest/globals';
import {SocialLinksButton} from '../pages/Settings/tab specific components/profile tab/buttons/sociallinksbutton';


/**
 * Unit test for SocialLinksButton component
 */
describe('SocialLinksButton', () => {
    test('renders SocialLinksButton component', () => {
        render(<SocialLinksButton />);

        // Check if the button is in the document.
        const buttonElement = screen.getByRole('button', {name: /add social link/i});
        expect(buttonElement).toBeInTheDocument();

        // Check for the presence of the AddIcon inside the button.
        // This assumes that the icon is rendered with a text alternative or title.
        expect(buttonElement).toContainElement(screen.getByTestId('AddIcon'));
    });
});
