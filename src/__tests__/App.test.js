import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import App from '../App';
import {test, expect, afterEach, describe} from '@jest/globals';

afterEach(() => {
    cleanup();
});

describe('App', () => {
    test('should render App component', () => {
        render(<App />);
        const linkElement = screen.getByText(/learn react/i);
        expect(linkElement).toBeInTheDocument();
    });

    /* Unit Tests for "App" component go here */
});
