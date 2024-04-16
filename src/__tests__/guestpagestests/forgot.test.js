import React from 'react';
import {render, screen} from '@testing-library/react';
import {Forgot} from '../../generic components/guestpagecomponents/logincomponents/forgot';
import {describe, it, expect} from '@jest/globals';

describe('Forgot', () => {
    it('should render the forgot password message with correct styling', () => {
        render(<Forgot />);

        const forgotPasswordElement = screen.getByTestId('forgotpassword10');

        expect(forgotPasswordElement).toBeInTheDocument();
        expect(forgotPasswordElement).toHaveStyle({
            textAlign: 'left',
            color: 'black',
            fontFamily: '"Noto Sans", sans-serif',
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '18px',
        });
    });

    it('should render the username link with correct styling and href', () => {
        render(<Forgot />);

        const usernameLinkElement = screen.getByText('username');

        expect(usernameLinkElement).toBeInTheDocument();
        expect(usernameLinkElement).toHaveStyle({
            color: '#0079d3',
            fontWeight: '400',
        });
        expect(usernameLinkElement).toHaveAttribute('href', '/username');
    });

    it('should render the password link with correct styling and href', () => {
        render(<Forgot />);

        const passwordLinkElement = screen.getByText('password');

        expect(passwordLinkElement).toBeInTheDocument();
        expect(passwordLinkElement).toHaveStyle({
            color: '#0079d3',
            fontWeight: '400',
        });
        expect(passwordLinkElement).toHaveAttribute('href', '/password');
    });
});
