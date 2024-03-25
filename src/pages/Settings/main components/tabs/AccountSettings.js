import React from 'react';
import {LanguageSettings} from '../../tab specific components/account tab/bulk components/LanguagesComponent';
import {SettingsComponentDown} from '../../generic components/SettingsComponentDown';
import {SettingsComponent} from '../../generic components/SettingsComponent';
import {Header} from '../../general components/text/Header';

const AccountSettings = () => {
    const leftAlignStyle = {textAlign: 'left'};

    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', selfJustify: 'left',
            marginLeft: '50px', ...leftAlignStyle}}>
            <h3 style={{color: 'black', ...leftAlignStyle}}>Account Settings</h3>
            <Header text="Account Preferences" style={leftAlignStyle} />

            <SettingsComponent head="Email Address" text="yourEmail@gmail.com"
                thirdComponent={'Change'} style={leftAlignStyle} />

            <SettingsComponent head="Gender" text="This information may be used
             to improve your recommendations and ads." thirdComponent={'GenderMenu'} style={leftAlignStyle} />

            <LanguageSettings style={leftAlignStyle} />

            <SettingsComponent head="Content Languages" text="Add
             languages you’d like to see posts, community recommendations,
              and other content in" thirdComponent={'Change'} style={leftAlignStyle} />

            <SettingsComponent head="Location Customization" text="Specify a
             location to customize your recommendations and feed. Reddit does
              not track your precise geolocation data." thirdComponent={'Languages'} style={leftAlignStyle} />

            <Header text="Connected Accounts" style={leftAlignStyle} />

            <SettingsComponentDown head="Connect to twitter" text="Connect
            a Twitter account to enable the choice to tweet your new posts
             and display a link on your profile. We will never post to
              Twitter without your permission." thirdComponent={'Twitter'} style={leftAlignStyle} />

            <SettingsComponent head="Connect to Apple" text="Connect
             account to log in to Reddit with Apple" thirdComponent={'Apple'} style={leftAlignStyle} />

            <SettingsComponent head="Connect to Google" text="Connect
             account to log in to Reddit with Google" thirdComponent={'Apple'} style={leftAlignStyle} />

            <Header text="Beta tests" style={leftAlignStyle} />

            <SettingsComponent head="Opt into beta tests" text="See
             the newest features from Reddit and join the r/beta
             community" thirdComponent={'Toggle'} style={leftAlignStyle} />

            <SettingsComponent head="Opt into beta tests" text="
            See the newest features from Reddit and join the r/beta community"
            thirdComponent={'Toggle'} style={leftAlignStyle} />

            <Header text="Delete" style={leftAlignStyle} />

            <SettingsComponent head="" text = "" thirdComponent={'Delete'} style={leftAlignStyle} />
        </div>
    );
};

export {AccountSettings};
