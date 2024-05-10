import React from 'react';
import {render, screen} from '@testing-library/react';
import {Heading} from '../../generic components/guestpagecomponents/logincomponents/heading';
import {describe, it, expect} from '@jest/globals';
describe('Heading', () => {
    it('should render the heading with the correct text', () => {
        render(<Heading />);
        const headingElement = screen.getByTestId('login-heading');
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent('Log in');
    });

    it('should have the correct styles applied', () => {
        render(<Heading />);
        const headingElement = screen.getByTestId('login-heading');
        expect(headingElement).toHaveStyle({
            textAlign: 'left',
            fontSize: '18px',
            fontWeight: '500',
            color: '#1a1a1b',
            fontFamily: '"IBM Plex Sans",sans-serif',
        });
    });
    it('should not be null', () => {
        render(<Heading />);
        const headingElement = screen.getByTestId('login-heading');
        expect(headingElement).not.toBeNull();
    });

    it('should have the correct tag', () => {
        render(<Heading />);
        const headingElement = screen.getByTestId('login-heading');
        expect(headingElement.tagName).toBe('H1');
    });


    it('should be visible', () => {
        render(<Heading />);
        const headingElement = screen.getByTestId('login-heading');
        expect(headingElement).toBeVisible();
    });
});
