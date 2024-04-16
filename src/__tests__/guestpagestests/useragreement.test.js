import React from 'react';
import {render, screen} from '@testing-library/react';
import {UserAgreement} from '../../generic components/guestpagecomponents/logincomponents/useragreement';
import {describe, it, expect} from '@jest/globals';

describe('UserAgreement', () => {
    it('should render the user agreement text', () => {
        render(<UserAgreement />);
        const userAgreementElement = screen.getByTestId('user-agreement');
        expect(userAgreementElement).toBeInTheDocument();
        expect(userAgreementElement).toHaveTextContent('By continuing, you agree to our');
    });

    it('should render the user agreement link', () => {
        render(<UserAgreement />);
        const userAgreementLink = screen.getByText('User Agreement');
        expect(userAgreementLink).toBeInTheDocument();
        expect(userAgreementLink).toHaveAttribute('href', 'https://www.redditinc.com/policies/user-agreement');
    });

    it('should render the privacy policy link', () => {
        render(<UserAgreement />);
        const privacyPolicyLink = screen.getByText('Privacy Policy');
        expect(privacyPolicyLink).toBeInTheDocument();
        expect(privacyPolicyLink).toHaveAttribute('href', 'https://www.redditinc.com/policies/privacy-policy');
    });
    it('should not be null', () => {
        render(<UserAgreement />);
        const userAgreementElement = screen.getByTestId('user-agreement');
        expect(userAgreementElement).not.toBeNull();
    });

    it('should have the correct tag', () => {
        render(<UserAgreement />);
        const userAgreementElement = screen.getByTestId('user-agreement');
        expect(userAgreementElement.tagName).toBe('P');
    });


    it('should be visible', () => {
        render(<UserAgreement />);
        const userAgreementElement = screen.getByTestId('user-agreement');
        expect(userAgreementElement).toBeVisible();
    });
});
