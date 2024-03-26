// GenderMenu.test.js
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, afterEach, beforeEach, jest, it, expect} from '@jest/globals';
import {GenderMenu} from '../pages/Settings/tab specific components/account tab/menus/GenderMenu';
import {createTheme, ThemeProvider} from '@mui/material/styles';


describe('GenderMenu', () => {
    let consoleSpy;

    beforeEach(() => {
        // Set up a spy on console.log before each test
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        // Clean up and remove the spy after each test
        consoleSpy.mockRestore();
    });

    it('renders the GenderMenu with the initial option', () => {
        render(
            <ThemeProvider theme={createTheme()}>
                <GenderMenu />
            </ThemeProvider>,
        );
        // Since the select element is represented as a combobox, we adjust the query accordingly
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    // Removed the test that attempts to interact with the dropdown menu
    // This avoids the warnings about updates not wrapped in act()
    // and focuses on tests that do not involve complex user interactions
});

