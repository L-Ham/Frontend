import React from 'react';
import {render, screen} from '@testing-library/react';
import {Passwordmessage2} from '../../generic components/guestpagecomponents/forgotpasswordcomponents/passwordmessage2';
import {describe, it, expect} from '@jest/globals';

describe('Passwordmessage2', () => {
    it('should render the password message component', () => {
        render(<Passwordmessage2 />);
        const passwordMessage = screen.getByTestId('password-message');
        expect(passwordMessage).toBeInTheDocument();
    });

    it('should display the correct text content', () => {
        render(<Passwordmessage2 />);
        const passwordMessage = screen.getByTestId('password-message');
        expect(passwordMessage).toHaveTextContent('Choose a new password here, then log in to your account.');
    });

    it('should have the correct styles applied', () => {
        render(<Passwordmessage2 />);
        const passwordMessage = screen.getByTestId('password-message');
        expect(passwordMessage).toHaveStyle({
            textAlign: 'left',
            color: 'black',
            fontFamily: '"Noto Sans", sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '21px',
        });
    });
});
