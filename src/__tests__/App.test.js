import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import App from '../App';
import {test, expect, afterEach} from '@jest/globals';

afterEach(() => {
    cleanup();
});


test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
