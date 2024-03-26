// Adjust the import path according to your project structure
import React from 'react';
import {describe, afterEach, beforeEach, jest, it, expect} from '@jest/globals';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {ToggleButton} from '../pages/Settings/general components/buttons/ToggleButton';

describe('ToggleButton', () => {
    let consoleSpy;

    beforeEach(() => {
        // Clear all previous mocks and set up a spy on console.log
        consoleSpy = jest.spyOn(console, 'log');
    });

    afterEach(() => {
        // Clean up after each test
        jest.clearAllMocks();
    });

    it('renders the toggle button', () => {
        render(<ToggleButton header="Test Header" />);
        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
    });

    it('toggles the state and logs the correct message on click', () => {
        const headerMessage = 'Test Header';
        render(<ToggleButton header={headerMessage} />);
        const buttonElement = screen.getByRole('button');

        // Simulate the first click
        fireEvent.click(buttonElement);
        expect(consoleSpy).toHaveBeenCalledWith(`${headerMessage} is now true`);
        expect(buttonElement).toHaveStyle('background-color: #007bff');

        // Simulate the second click
        fireEvent.click(buttonElement);
        expect(consoleSpy).toHaveBeenCalledWith(`${headerMessage} is now false`);
        expect(buttonElement).toHaveStyle('background-color: #ccc');
    });

    it('changes the button background color when toggled', () => {
        render(<ToggleButton header="Test Header" />);
        const buttonElement = screen.getByRole('button');

        // Initially, the button should have a background color of '#ccc'
        expect(buttonElement).toHaveStyle('background-color: #ccc');

        // After the first click, the background color should change to '#007bff'
        fireEvent.click(buttonElement);
        expect(buttonElement).toHaveStyle('background-color: #007bff');

        // After the second click, the background color should change back to '#ccc'
        fireEvent.click(buttonElement);
        expect(buttonElement).toHaveStyle('background-color: #ccc');
    });
});
