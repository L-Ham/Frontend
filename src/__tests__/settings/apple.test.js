import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import {AppleButton} from '../../pages/Settings/tab specific components/account tab/buttons/applebutton.js';
import '@testing-library/jest-dom';
import {describe, expect, it, jest} from '@jest/globals';
describe('AppleButton', () => {
    it('renders correctly', () => {
        render(<AppleButton id="test1" />);
        expect(screen.getByText('Connect to Apple')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveStyle('background-color: #000');
    });

    it('logs the message when clicked', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        render(<AppleButton id="test1" />);
        fireEvent.click(screen.getByText('Connect to Apple'));
        expect(consoleSpy).toHaveBeenCalledWith('apple button clicked');
        consoleSpy.mockRestore(); // Clean up the spy
    });
});
