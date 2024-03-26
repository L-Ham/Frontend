import React from 'react';
import {LanguageSettings} from '../../tab specific components/account tab/bulk components/languagescomponent';
import {SettingsGenericItemDown} from '../../generic components/settingsgenericitemdown';
import {SettingsGenericItemRight} from '../../generic components/settingsgenericitemright';
import {SettingsTabHeading} from '../../general components/text/settingstabheading';

/**
 * AccountSettings function component renders the account settings interface.
 * It provides options to customize email address, gender, language preferences, and more.
 * The component utilizes various generic items and tab headings to structure the settings.
 *
 * @return {React.Component} A div container with account settings.
 */
function AccountSettings() {
    const leftAlignStyle = {textAlign: 'left'};

    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', marginLeft: '50px', ...leftAlignStyle}}>
            <h1 style={{color: 'black', marginBottom:
             '20px', textAlign: 'left', fontWeight: 'bold', fontSize: '20px'}}>Account Settings</h1>


            <SettingsTabHeading text="Account Preferences" style={leftAlignStyle} />

            <SettingsGenericItemRight head="Email Address" text="yourEmail@gmail.com"
                thirdComponent={'Change'} style={leftAlignStyle} />

            <SettingsGenericItemRight head="Gender" text="This information may be used
             to improve your recommendations and ads." thirdComponent={'GenderMenu'} style={leftAlignStyle} />

            <LanguageSettings style={leftAlignStyle} />

            <SettingsGenericItemRight head="Content Languages" text="Add
             languages you’d like to see posts, community recommendations,
              and other content in" thirdComponent={'Change'} style={leftAlignStyle} />

            <SettingsGenericItemRight head="Location Customization" text="Specify a
             location to customize your recommendations and feed. Reddit does
              not track your precise geolocation data." thirdComponent={'Languages'} style={leftAlignStyle} />

            <SettingsTabHeading text="Connected Accounts" style={leftAlignStyle} />

            <SettingsGenericItemDown head="Connect to twitter" text="Connect
            a Twitter account to enable the choice to tweet your new posts
             and display a link on your profile. We will never post to
              Twitter without your permission." thirdComponent={'Twitter'} style={leftAlignStyle} />

            <SettingsGenericItemRight head="Connect to Apple" text="Connect
             account to log in to Reddit with Apple" thirdComponent={'Apple'} style={leftAlignStyle} />

            <SettingsGenericItemRight head="Connect to Google" text="Connect
             account to log in to Reddit with Google" thirdComponent={'Apple'} style={leftAlignStyle} />

            <SettingsTabHeading text="Beta tests" style={leftAlignStyle} />

            <SettingsGenericItemRight head="Opt into beta tests" text="See
             the newest features from Reddit and join the r/beta
             community" thirdComponent={'Toggle'} style={leftAlignStyle} />

            <SettingsTabHeading text="Delete" style={leftAlignStyle} />

            <SettingsGenericItemRight head="" text = "" thirdComponent={'Delete'} style={leftAlignStyle} />
        </div>
    );
}

export {AccountSettings};
