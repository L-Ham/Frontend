// ToggleButton.test.js
import React from 'react';
import {describe, afterEach, beforeEach, jest, it, expect} from '@jest/globals';
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {ToggleButton} from '../pages/Settings/general components/buttons/ToggleButton';

describe('ToggleButton', () => {
    let consoleSpy;

    beforeEach(() => {
        // Set up a spy on console.log before each test
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        // Clean up and restore the original console.log function after each test
        consoleSpy.mockRestore();
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
        expect(consoleSpy).toHaveBeenCalledWith(`${headerMessage} is now on`);
        // Note: If you're testing for specific style changes, ensure your component implementation supports this.

        // Simulate the second click
        fireEvent.click(buttonElement);
        expect(consoleSpy).toHaveBeenCalledWith(`${headerMessage} is now off`);
        // Note: Adjustments might be needed based on how your component handles style changes.
    });

    it('changes the button background color when toggled', () => {
        render(<ToggleButton header="Test Header" />);
        const buttonElement = screen.getByRole('button');

        // The initial and toggled state's background color testing could depend on the implementation
        // This test assumes the button changes its background color based on the toggle state
        // Adjust the expected values according to your component's styling logic

        // Initially
        expect(buttonElement).toHaveStyle(`background-color: #ccc`);

        // After first click
        fireEvent.click(buttonElement);
        // Adjust the expected value according to your toggle "on" state's style
        expect(buttonElement).toHaveStyle(`background-color: #007bff`);

        // After second click
        fireEvent.click(buttonElement);
        // Adjust back to initial state style
        expect(buttonElement).toHaveStyle(`background-color: #ccc`);
    });
});
