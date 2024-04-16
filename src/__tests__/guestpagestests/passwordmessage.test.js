import React from 'react';
import {render, screen} from '@testing-library/react';
import {Passwordmessage} from '../../generic components/guestpagecomponents/forgotpasswordcomponents/passwordmessage';
import {describe, it, expect} from '@jest/globals';

describe('Passwordmessage', () => {
    it('should render the password message component', () => {
        render(<Passwordmessage />);
        const passwordMessage = screen.getByTestId('passwordmessage2');
        expect(passwordMessage).toBeInTheDocument();
    });

    it('should display the correct text content', () => {
        render(<Passwordmessage />);
        const passwordMessage = screen.getByTestId('passwordmessage2');
        expect(passwordMessage).toHaveTextContent(
            // eslint-disable-next-line max-len
            'Tell us the username and email address associated with your Reddit account, and we\'ll send you an email with a link to reset your password.',
        );
    });

    it('should have the correct styles applied', () => {
        render(<Passwordmessage />);
        const passwordMessage = screen.getByTestId('passwordmessage2');
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
