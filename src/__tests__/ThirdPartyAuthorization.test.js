import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import {ThirdPartyAuthorization} from '../pages/Settings/general components/buttons/thirdpartyauthorization';
import {describe, test, beforeEach, afterEach, jest} from '@jest/globals';


describe('ThirdPartyAuthorization', () => {
    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        console.log.mockRestore();
    });
    test('Typography click triggers navigation', () => {
        render(<ThirdPartyAuthorization />);

        // Assuming the text is unique enough to identify the Typography component
        const typographyElement = screen.getByText(/Manage third-party app authorization/i);
        fireEvent.click(typographyElement);

    // Test for expected outcomes here
    });

    test('IconButton click triggers navigation', () => {
        render(<ThirdPartyAuthorization />);

        const iconButtonElement = screen.getByRole('button');
        fireEvent.click(iconButtonElement);

    // Test for expected outcomes here
    });
});
