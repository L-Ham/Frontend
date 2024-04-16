import React from 'react';
import {render, screen} from '@testing-library/react';
import {HeadingSignUp} from '../../generic components/guestpagecomponents/signupcomponents/headingsignup';
import {describe, it, expect} from '@jest/globals';

describe('HeadingSignUp', () => {
    it('should render the heading with the correct text', () => {
        render(<HeadingSignUp />);
        const headingElement = screen.getByTestId('headingsignup100');
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent('Sign up');
    });

    it('should have the correct styles applied', () => {
        render(<HeadingSignUp />);
        const headingElement = screen.getByTestId('headingsignup100');
        expect(headingElement).toHaveStyle({
            textAlign: 'left',
            fontSize: '18px',
            fontWeight: 500,
            color: '#1a1a1b',
            fontFamily: '"IBM Plex Sans", sans-serif',
        });
    });
    it('should not be null', () => {
        render(<HeadingSignUp />);
        const headingElement = screen.getByTestId('headingsignup100');
        expect(headingElement).not.toBeNull();
    });

    it('should have the correct tag', () => {
        render(<HeadingSignUp />);
        const headingElement = screen.getByTestId('headingsignup100');
        expect(headingElement.tagName).toBe('H1');
    });


    it('should be visible', () => {
        render(<HeadingSignUp />);
        const headingElement = screen.getByTestId('headingsignup100');
        expect(headingElement).toBeVisible();
    });
});
