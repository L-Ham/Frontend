import React from 'react';
import {SettingsTabHeading} from '../../general components/text/settingstabheading';
import {ThirdPartyAuthorization} from '../../general components/buttons/thirdpartyauthorization';

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
            <h1 style={{color: 'black', marginBottom:
             '20px', textAlign: 'left', fontWeight: 'bold', fontSize: '20px'}}>Reddit Premium</h1>

            <h3 style={{color: 'black', marginBottom:
             '20px', textAlign: 'left',

            fontSize: '13px'}}>Reddit Premium is a
               subscription membership that upgrades your account with extra features.</h3>

            <SettingsTabHeading text="SUBSCRIPTION STATUS" />

            <h3 style={{color: 'black', marginBottom:
             '20px', textAlign: 'left',

            fontSize: '13px'}}>Get Reddit Premium and help support Reddit.</h3>

            <ThirdPartyAuthorization />
        </div>
    );
}

export {SubscriptionSettings};
