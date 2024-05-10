import React from 'react';
import {render, screen} from '@testing-library/react';
import {HeadingUserName} from '../../generic components/guestpagecomponents/forgotusernamecomponents/headingusername';
import {describe, it, expect} from '@jest/globals';

describe('HeadingUserName', () => {
    it('should render the heading with the correct text', () => {
        render(<HeadingUserName />);
        const headingElement = screen.getByTestId('headingusername10');
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent('Recover your username');
    });

    it('should have the correct styles applied', () => {
        render(<HeadingUserName />);
        const headingElement = screen.getByTestId('headingusername10');
        expect(headingElement).toHaveStyle({
            textAlign: 'left',
            fontSize: '18px',
            fontWeight: 500,
            color: '#1a1a1b',
            fontFamily: '"IBM Plex Sans", sans-serif',
        });
    });
    it('should not be null', () => {
        render(<HeadingUserName />);
        const headingElement = screen.getByTestId('headingusername10');
        expect(headingElement).not.toBeNull();
    });

    it('should have the correct tag', () => {
        render(<HeadingUserName />);
        const headingElement = screen.getByTestId('headingusername10');
        expect(headingElement.tagName).toBe('H1');
    });


    it('should be visible', () => {
        render(<HeadingUserName />);
        const headingElement = screen.getByTestId('headingusername10');
        expect(headingElement).toBeVisible();
    });
});
