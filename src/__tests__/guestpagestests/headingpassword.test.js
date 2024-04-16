import React from 'react';
import {render, screen} from '@testing-library/react';
import {Headingpassword} from '../../generic components/guestpagecomponents/forgotpasswordcomponents/headingpassword';
import {describe, it, expect} from '@jest/globals';


describe('Headingpassword', () => {
    it('should render the heading with the correct text', () => {
        render(<Headingpassword />);
        const headingElement = screen.getByTestId('headingpassword1');
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent('Reset your password');
    });


    it('should have the correct font family', () => {
        render(<Headingpassword />);
        const headingElement = screen.getByTestId('headingpassword1');
        expect(headingElement).toHaveStyle({fontFamily: '"IBM Plex Sans", sans-serif'});
    });
});
