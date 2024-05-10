import React from 'react';
import {render, screen} from '@testing-library/react';
import {ErrorPage} from '../../pages/ErrorPage/errorpage.js';
import {describe, it, expect} from '@jest/globals';
import {BrowserRouter as Router} from 'react-router-dom';

describe('ErrorPage', () => {
    it('should render the error page with the correct elements', () => {
        render(
            <Router>
                <ErrorPage />
            </Router>,
        );

        expect(screen.getByTestId('error-page')).toBeInTheDocument();
        expect(screen.getByTestId('dizzy-snoo-icon')).toBeInTheDocument();
        expect(screen.getByTestId('error-message')).toHaveTextContent('Something went wrong');
        expect(screen.getByTestId('go-home-link')).toHaveAttribute('href', '/');
        expect(screen.getByTestId('go-home-link')).toHaveTextContent('Go home');
    });
});
