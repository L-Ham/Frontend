import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/SettingsGenericItemRight';
import {SettingsGenericItemDown} from '../../generic components/SettingsGenericItemDown';
import {SettingsTabHeading} from '../../general components/text/SettingsTabHeading';
import {ThirdPartyAuthorization} from '../../general components/buttons/ThirdPartyAuthorization';

/**
 * SafetySettings function component renders the safety and privacy settings section.
 * This includes settings for blocking people, muting communities, search result visibility,
 * ad personalization, sensitive advertising categories, and advanced security options like two-factor authentication.
 * It uses `SettingsTabHeading` for section headings, `SettingsGenericItemRight` and
 * `SettingsGenericItemDown` for individual settings, and
 * `ThirdPartyAuthorization` for managing third-party connections.
 *
 * @return {React.Component} A div containing the safety and privacy settings, styled and organized into sections.
 */
function SafetySettings() {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', justifyContent: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Safety & Privacy</h3>

            <SettingsTabHeading text="SAFETY" />

            <SettingsGenericItemDown
                head="People You've Blocked"
                text="Blocked people can’t send you chat requests or private messages"
                thirdComponent={'block'}
            />

            <SettingsGenericItemDown
                head="Communities You've Muted"
                text="Posts from muted communities won't show up in your feeds or recommendations."
                thirdComponent={'block'}
            />

            <SettingsTabHeading text="PRIVACY" />

            <SettingsGenericItemRight
                head="Show up in search results"
                text="Allow search engines like Google to link to your profile in their search results."
                thirdComponent={'Toggle'}
            />

            <SettingsGenericItemRight
                head="Personalize ads on Reddit based on information and activity from our partners."
                text="Allow us to use information from our partners to show you better ads on Reddit."
                thirdComponent={'Toggle'}
            />

            <SettingsTabHeading text="SENSITIVE ADVERTISING CATEGORIES" />

            <SettingsGenericItemRight head="Alcohol" text="Allowed" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Dating" text="Allowed" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Gambling" text="Allowed" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Pregnancy and parenting" text="Allowed" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Weight loss" text="Allowed" thirdComponent={'Toggle'} />

            <SettingsTabHeading text="ADVANCED SECURITY" />

            <SettingsGenericItemRight
                head="Use two-factor authentication"
                text="Help protect your account (even if someone gets
                   your password) by requiring a verification code and a password to log in."
                thirdComponent={'Toggle'}
            />

            <ThirdPartyAuthorization />
        </div>
    );
}

export {SafetySettings};
