import {render, screen, test} from '@testing-library/react';
// Import the 'expect' function from the 'jest-dom' package
import {expect} from '@testing-library/jest-dom';
import App from './App';
import React from 'react';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
