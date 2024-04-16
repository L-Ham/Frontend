import React from 'react';
import {render, screen} from '@testing-library/react';
import {ThirdPartyAuthorization} from '../../pages/Settings/general components/buttons/thirdpartyauthorization';
import {describe, expect, it} from '@jest/globals';

describe('ThirdPartyAuthorization', () => {
    it('renders without crashing', () => {
        render(<ThirdPartyAuthorization id="1" />);
        expect(screen.getByText('Manage third-party app authorization')).toBeInTheDocument();
    });

    it('contains correct link for managing authorizations', () => {
        render(<ThirdPartyAuthorization id="1" />);
        const manageLink = screen.getByText('Manage third-party app authorization').closest('a');
        expect(manageLink).toHaveAttribute('href', 'https://www.reddit.com/prefs/apps');
    });
});
