
import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {DeleteAccountButton} from
    '../../pages/Settings/tab specific components/account tab/buttons/deleteaccountbutton';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {describe, afterEach, beforeEach, jest, it, expect} from '@jest/globals';


describe('DeleteAccountButton', () => {
    let consoleSpy;

    beforeEach(() => {
        // Set up a spy on console.log before each test
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        // Clean up and remove the spy after each test
        jest.clearAllMocks();
    });

    it('renders the delete account button', () => {
        render(
            <ThemeProvider theme={createTheme()}>
                <DeleteAccountButton />
            </ThemeProvider>,
        );
        // Check if the button with the text 'DELETE ACCOUNT' is in the document
        const buttonElement = screen.getByRole('button', {name: 'DELETE ACCOUNT'});
        expect(buttonElement).toBeInTheDocument();
    });

    it('logs a message when clicked', () => {
        render(
            <ThemeProvider theme={createTheme()}>
                <DeleteAccountButton />
            </ThemeProvider>,
        );
        const buttonElement = screen.getByRole('button', {name: 'DELETE ACCOUNT'});
        fireEvent.click(buttonElement);
        // Verify the console log output upon click
        expect(consoleSpy).toHaveBeenCalledWith('delete button is clicked');
    });
});
