import React from 'react';
import {SettingsComponent} from '../../generic components/SettingsComponent';

import {SettingsComponentDown} from '../../generic components/SettingsComponentDown';
import {Header} from '../../general components/text/Header';
import {ThirdPartyAuthorization} from '../../general components/buttons/ThirdPartyAuthorization';

const SafetySettings = () => {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', selfJustify: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Safety & Privacy</h3>
            <Header text="SAFETY" />

            <SettingsComponentDown head="People You've Blocked" text="Blocked people
       can’t send you chat requests or private messages" thirdComponent={'block'} />

            <SettingsComponentDown head="Communities You've Muted" text="Posts from muted
      communities won't
       show up in your feeds or recommendations." thirdComponent={'block'} />

            <Header text="PRIVACY" />

            <SettingsComponent head="Show up in search results"
                text="Allow search engines like Google to link to your profile in their search results.
      " thirdComponent={'Toggle'} />


            <SettingsComponent head="Personalize ads on Reddit based on
       information and activity from our partners." text="Allow us to use information
        from our partners to show you better ads on Reddit.
       " thirdComponent={'Toggle'} />

            <Header text="SENSITIVE ADVERTISING CATEGORIES" />

            <SettingsComponent head="Alchohol" text="Allowed
         " thirdComponent={'Toggle'} />
            <SettingsComponent head="Dating" text="Allowed
         " thirdComponent={'Toggle'} />
            <SettingsComponent head="Gambling" text="Allowed
         " thirdComponent={'Toggle'} />
            <SettingsComponent head="Pregnancy and parenting" text="Allowed
         " thirdComponent={'Toggle'} />
            <SettingsComponent head="Weight loss" text="Allowed
         " thirdComponent={'Toggle'} />

            <Header text="ADVANCED SECURITY" />
            <SettingsComponent head="Use two-factor authentication"
                text="Help protect your account (even if someone gets your password)
     by requiring a verification code and a password to log in.
         " thirdComponent={'Toggle'} />
            <ThirdPartyAuthorization />


        </div>
    );
};

export {SafetySettings};
