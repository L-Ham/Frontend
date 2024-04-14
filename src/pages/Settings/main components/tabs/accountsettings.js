import React from 'react';
import {LanguageSettings} from '../../tab specific components/account tab/bulk components/languagescomponent.js';
import {LocationCustomization} from
    '../../tab specific components/account tab/bulk components/locationcustomization.js';
import {ConnectToTwitter} from '../../tab specific components/account tab/bulk components/connecttotwitter.js';
import {SettingsGenericItemRight} from '../../generic components/settingsgenericitemright.js';
import {SettingsTabHeading} from '../../general components/text/settingstabheading.js';
import {useState, useEffect} from 'react';
import {API_ROUTES} from '../../../../requests/routes'; // Import the API_ROUTES constant
import {axiosInstance} from '../../../../requests/axios';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

/**
 * AccountSettings function component renders the account settings interface.
 * It provides options to customize email address, gender, language preferences, and more.
 * The component utilizes various generic items and tab headings to structure the settings.
 *
 * @return {React.Component} A div container with account settings.
 */


/**
 * AccountSettings function component renders the account settings interface.
 * It provides options to customize email
 *
 * @return {React.Component} A div container with account settings.
 *
 * @example
 * return (
 * <AccountSettings />
 * );
 *
 * */
function AccountSettings({id}) {
    const token = useSelector((state) => state.user.token);
    const leftAlignStyle = {textAlign: 'left'};
    // const email = '';
    const [accSettings, setAccSettings] = useState({
        email: 'yourMail@example.com',
        gender: 'male',
        connectedToGoogle: true,
    });


    useEffect(() => {
        /**
    * ProfileSettings function component renders the profile customization settings.

    *
    * @return {React.Component} A div container with settings to customize the user's profile.
    */
        async function fetchAccountSettings() {
            try {
                const response = await axiosInstance.get(API_ROUTES.accountSettings, {
                    headers: {Authorization: `Bearer ${token}`},
                });
                    // Directly use response.data since it matches the expected structure
                console.log('acc settings recived:', response.data);

                setAccSettings(response.data.accountSettings);
            } catch (error) {
                console.error('Failed to fetch feed settings:', error);
            }
        }
        fetchAccountSettings();
    }, [token]);
    return (
        <div className='max-w-[688px] flex-auto'>
            <h2
                className='px-0 py-10 text-xl font-medium not-italic leading-6 text-[var(--newCommunityTheme-bodyText)]'
                style={{fontFamily: '"IBM Plex Sans", sans-serif'}}
            >
                Account settings
            </h2>


            <SettingsTabHeading text="ACCOUNT PREFERENCES" style={leftAlignStyle} />

            <SettingsGenericItemRight head="Email address" text={accSettings.email}
                thirdComponent={'Change'} style={leftAlignStyle} id = '1' />

            <SettingsGenericItemRight head="Gender" text="This information may be used
             to improve your recommendations and ads." thirdComponent={'GenderMenu'}
            item = {accSettings.gender} style={leftAlignStyle} id = '2' />

            <LanguageSettings style={leftAlignStyle} />

            <SettingsGenericItemRight head="Content Languages" text="Add
             languages you’d like to see posts, community recommendations,
              and other content in" thirdComponent={'Change'} style={leftAlignStyle}
            id = '3' />

            <LocationCustomization id = '4'/>

            <SettingsTabHeading text="Connected Accounts" style={leftAlignStyle}
                id = '5' />

            <ConnectToTwitter id = '6'/>

            <SettingsGenericItemRight head="Connect to Apple" text="Connect
             account to log in to Reddit with Apple" thirdComponent={'Apple'} style={leftAlignStyle}
            id = '7' />

            <SettingsGenericItemRight head="Connect to Google" text="Connect
             account to log in to Reddit with Google" thirdComponent={'Apple'} style={leftAlignStyle}
            id = '8' />

            <SettingsTabHeading text="Beta tests" style={leftAlignStyle}
                id = '9'/>

            <SettingsGenericItemRight head="Opt into beta tests" text="See
             the newest features from Reddit and join the r/beta
             community" thirdComponent={'Toggle'} style={leftAlignStyle}
            id = '10' />

            <SettingsTabHeading text="Delete" style={leftAlignStyle}
                id = '11' />

            <SettingsGenericItemRight head="" text = "" thirdComponent={'Delete'} style={leftAlignStyle}
                id = '12' />
        </div>
    );
}

AccountSettings.propTypes = {
    id: PropTypes.string,
};
export {AccountSettings};
