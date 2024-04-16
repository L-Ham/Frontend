import React from 'react';
import {render, screen} from '@testing-library/react';
import {SubscriptionSettings} from '../../pages/Settings/main components/tabs/subscriptionsettings.js';
import '@testing-library/jest-dom';
import {describe, expect, it} from '@jest/globals';

describe('SubscriptionSettings Component', () => {
    it('renders the subscription settings', () => {
        render(<SubscriptionSettings />);

        // Check for main heading presence
        expect(screen.getByText('Reddit Premium')).toBeInTheDocument();

        // Check for the description text presence

        // Check for settings tab heading
        expect(screen.getByText('SUBSCRIPTION STATUS')).toBeInTheDocument();

        // Check for the subscription offer text
        expect(screen.getByText(/Get Reddit Premium and help support Reddit./i))
            .toBeInTheDocument();

        // Check for the presence of the ThirdPartyAuthorization component
    });
});
