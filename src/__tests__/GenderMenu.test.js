// GenderMenu.test.js
import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import {GenderMenu} from '../pages/Settings/tab specific components/account tab/menus/GenderMenu';
// Make sure the path is correct
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {describe, afterEach, beforeEach, jest, it, expect} from '@jest/globals';

describe('GenderMenu', () => {
    let consoleSpy;

    beforeEach(() => {
        // Set up a spy on console.log before each test
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        // Clean up and remove the spy after each test
        jest.clearAllMocks();
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

    it('changes selection and logs a message when a gender option is selected', async () => {
        render(
            <ThemeProvider theme={createTheme()}>
                <GenderMenu />
            </ThemeProvider>,
        );
        // Adjusting to find the combobox instead of a button
        const selectMenu = screen.getByRole('combobox');
        // Open the select menu to view options
        userEvent.click(selectMenu);

        // Note: The following line might not work as expected because userEvent may not fully simulate
        // the select dropdown interactions in a headless environment.
        // You may need to directly set the value of the select element in tests
        // or use fireEvent.change with the select element.

        // Attempt to select the 'Woman' option, note that simulating select options might not work
        // as intended with userEvent in all testing environments.
        const womanOption = await screen.findByText('Woman');
        userEvent.click(womanOption);

        expect(consoleSpy).toHaveBeenCalledWith('Woman is now selected');
    });
});
