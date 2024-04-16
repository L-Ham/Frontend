import React from 'react';
import {render, screen} from '@testing-library/react';
import {UserAgreementSignup} from '../../generic components/guestpagecomponents/signupcomponents/useragreementsignup';
import {describe, it, expect} from '@jest/globals';


describe('UserAgreementSignup', () => {
    it('should render the user agreement text', () => {
        render(<UserAgreementSignup />);
        const userAgreementText = screen.getByTestId('useragreementsignup35');
        expect(userAgreementText).toBeInTheDocument();
        expect(userAgreementText).toHaveTextContent('By continuing, you are setting up a Reddit');
        expect(userAgreementText).toHaveTextContent('User Agreement');
        expect(userAgreementText).toHaveTextContent('Privacy Policy');
    });

    it('should have the correct links', () => {
        render(<UserAgreementSignup />);
        const userAgreementLink = screen.getByText('User Agreement');
        const privacyPolicyLink = screen.getByText('Privacy Policy');
        expect(userAgreementLink).toHaveAttribute(
            'href',
            'https://www.redditinc.com/policies/user-agreement',
        );
        expect(privacyPolicyLink).toHaveAttribute(
            'href',
            'https://www.redditinc.com/policies/privacy-policy',
        );
    });
});
