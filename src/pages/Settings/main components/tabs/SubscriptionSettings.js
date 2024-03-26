import React from 'react';
import {SettingsTabHeading} from '../../general components/text/SettingsTabHeading';
import {ThirdPartyAuthorization} from '../../general components/buttons/ThirdPartyAuthorization';

/**
 * SubscriptionSettings function component renders the subscription settings section for a user's account.
 * It displays the heading for the Reddit Premium service, the subscription status using a custom `SettingsTabHeading`
 * component, and a `ThirdPartyAuthorization` button component that likely manages third-party service connections.
 *
 * @return {React.Component} A div containing the subscription settings components with styled elements.
 */
function SubscriptionSettings() {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', justifyContent: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Reddit Premium</h3>

            <SettingsTabHeading text="SUBSCRIPTION STATUS" />

            <ThirdPartyAuthorization />
        </div>
    );
}

export {SubscriptionSettings};
