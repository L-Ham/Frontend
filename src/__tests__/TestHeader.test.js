import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import TestHeader from '../TestHeader';
import {test, expect, afterEach, describe} from '@jest/globals';

afterEach(() => {
    cleanup();
});

describe('TestHeader', () => {
    test('should render TestHeader component', () => {
        render(<TestHeader />);
        const headerElement = screen.getByTestId('header-1');
        expect(headerElement).toBeInTheDocument();
        expect(headerElement).toHaveTextContent('Edit src/App.js and save to reload.');
    });

    /* Unit Tests for "TestHeader" component go here */
});
