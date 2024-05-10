import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {ClearHistory} from '../../pages/Settings/tab specific components/profile tab/buttons/clearhistory.js';
import '@testing-library/jest-dom';
import {describe, expect, it, jest} from '@jest/globals';

describe('ClearHistory', () => {
    it('renders the button with correct text', () => {
        render(<ClearHistory id="123" />);
        const button = screen.getByText('Clear history');
        expect(button).toBeInTheDocument();
    });

    it('logs a message when clicked', () => {
        console.log = jest.fn(); // Mock console.log to check if it is called

        render(<ClearHistory id="123" />);
        const button = screen.getByText('Clear history');
        fireEvent.click(button); // Simulate button click

        expect(console.log).toHaveBeenCalledWith('Change Button clicked');
    });
});
