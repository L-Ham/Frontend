import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {describe, afterEach, beforeEach, jest, it, expect} from '@jest/globals';
import {ChangeButton} from '../pages/Settings/general components/buttons/ChangeButton';
import {createTheme, ThemeProvider} from '@mui/material/styles';

describe('ChangeButton', () => {
    let consoleSpy;

    beforeEach(() => {
        // Set up a spy on console.log before each test
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        // Clean up and remove the spy after each test
        jest.clearAllMocks();
    });

    it('renders the Change button', () => {
        render(
            <ThemeProvider theme={createTheme()}>
                <ChangeButton />
            </ThemeProvider>,
        );
        const buttonElement = screen.getByRole('button', {name: 'Change'});
        expect(buttonElement).toBeInTheDocument();
    });

    it('logs a message when clicked', () => {
        render(
            <ThemeProvider theme={createTheme()}>
                <ChangeButton />
            </ThemeProvider>,
        );
        const buttonElement = screen.getByRole('button', {name: 'Change'});
        fireEvent.click(buttonElement);
        expect(consoleSpy).toHaveBeenCalledWith('Change Button clicked');
    });
});
