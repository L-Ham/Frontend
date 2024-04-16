import React from 'react';
import {render, screen} from '@testing-library/react';
import {ExistingMember} from '../../generic components/guestpagecomponents/signupcomponents/existingmember';
import {describe, it, expect} from '@jest/globals';

describe('ExistingMember', () => {
    it('should render the component with the correct text', () => {
        render(<ExistingMember />);
        const existingMemberElement = screen.getByTestId('existingmember');
        expect(existingMemberElement).toBeInTheDocument();
        expect(existingMemberElement).toHaveTextContent('Already a redditor?');
    });

    it('should render the component with a login link', () => {
        render(<ExistingMember />);
        const loginLinkElement = screen.getByText('LOG IN');
        expect(loginLinkElement).toBeInTheDocument();
        expect(loginLinkElement).toHaveAttribute('href', '/login');
        expect(loginLinkElement).toHaveStyle({color: '#0088de', fontWeight: '700'});
    });
    it('should not be null', () => {
        render(<ExistingMember />);
        const existingMemberElement = screen.getByTestId('existingmember');
        expect(existingMemberElement).not.toBeNull();
    });


    it('should be visible', () => {
        render(<ExistingMember />);
        const existingMemberElement = screen.getByTestId('existingmember');
        expect(existingMemberElement).toBeVisible();
    });

    it('should have only one child', () => {
        render(<ExistingMember />);
        const existingMemberElement = screen.getByTestId('existingmember');
        expect(existingMemberElement.children.length).toBe(1);
    });
});
