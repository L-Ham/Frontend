import React from 'react';
import {render, screen} from '@testing-library/react';
// eslint-disable-next-line max-len
import {ForgotUsername} from '../../generic components/guestpagecomponents/forgotpasswordcomponents/passwordforgotusername';
import {describe, it, expect} from '@jest/globals';


describe('ForgotUsername', () => {
    it('should render the component', () => {
        render(<ForgotUsername />);
        const forgotUsernameElement = screen.getByTestId('forgotusername');
        expect(forgotUsernameElement).toBeInTheDocument();
    });

    it('should have the correct text content', () => {
        render(<ForgotUsername />);
        const forgotUsernameElement = screen.getByTestId('forgotusername');
        expect(forgotUsernameElement).toHaveTextContent('FORGOT USERNAME?');
    });

    it('should have the correct link', () => {
        render(<ForgotUsername />);
        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveAttribute('href', '/username');
    });

    it('should have the correct link color', () => {
        render(<ForgotUsername />);
        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveStyle({color: '#0088de'});
    });

    it('should have the correct link font weight', () => {
        render(<ForgotUsername />);
        const linkElement = screen.getByRole('link');
        expect(linkElement).toHaveStyle({fontWeight: '700'});
    });
});
