import React from 'react';

import {SettingsTabHeading} from '../../general components/text/SettingsTabHeading';
import {ThirdPartyAuthorization} from '../../general components/buttons/ThirdPartyAuthorization';

const SubscriptionSettings = () => {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', selfJustify: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Reddit Premium</h3>

            <SettingsTabHeading text="SUBSCRIPTION STATUS" />

            <ThirdPartyAuthorization/>


        </div>
    );
};

export {SubscriptionSettings};
