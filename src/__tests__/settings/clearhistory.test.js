import React from 'react';
import {render, screen} from '@testing-library/react';
import {ClearHistory} from '../../pages/Settings/tab specific components/profile tab/buttons/clearhistory.js';
import '@testing-library/jest-dom';
import {describe, expect, it} from '@jest/globals';

describe('ClearHistory', () => {
    it('renders the button with correct text', () => {
        render(<ClearHistory id="123" />);
        const button = screen.getByText('Clear history');
        expect(button).toBeInTheDocument();
    });
});
