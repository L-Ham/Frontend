import React from 'react';
import {render, screen} from '@testing-library/react';
import {NewMember} from '../../generic components/guestpagecomponents/logincomponents/newmember';
import {describe, it, expect} from '@jest/globals';

describe('NewMember', () => {
    it('should render the component', () => {
        render(<NewMember />);
        const newMemberElement = screen.getByTestId('newmember');
        expect(newMemberElement).toBeInTheDocument();
    });

    it('should have the correct text content', () => {
        render(<NewMember />);
        const newMemberElement = screen.getByTestId('newmember');
        expect(newMemberElement).toHaveTextContent('New to Reddit? SIGN UP');
    });

    it('should have a link to the registration page', () => {
        render(<NewMember />);
        const signUpLink = screen.getByText('SIGN UP');
        expect(signUpLink).toBeInTheDocument();
        expect(signUpLink).toHaveAttribute('href', '/register');
    });

    it('should have the correct styles', () => {
        render(<NewMember />);
        const newMemberElement = screen.getByTestId('newmember');
        expect(newMemberElement).toHaveStyle({
            textAlign: 'left',
            color: 'black',
            fontFamily: '"Noto Sans",sans-serif',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '18px',
            marginTop: '8px',
        });
    });


    it('should not be null', () => {
        render(<NewMember />);
        const newMemberElement = screen.getByTestId('newmember');
        expect(newMemberElement).not.toBeNull();
    });


    it('should be visible', () => {
        render(<NewMember />);
        const newMemberElement = screen.getByTestId('newmember');
        expect(newMemberElement).toBeVisible();
    });
});
