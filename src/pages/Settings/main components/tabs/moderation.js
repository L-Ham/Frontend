/*eslint-disable*/
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
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {selfInfo} from '../../../../store/userSlice.js';
import { ThirdPartyAuthorization } from '../../general components/buttons/thirdpartyauthorization.js';
/**
 * AccountSettings function component renders the account settings interface.
 * It provides options to customize email address, gender, language preferences, and more.
 * The component utilizes various generic items and tab headings to structure the settings.
 *
 * @return {React.Component} A div container with account settings.
 *
 * @example
 * return (
 * <AccountSettings />
 * );
 *
 */
function ModerationSettings() {
    const leftAlignStyle = {textAlign: 'left'};
    // const email = '';
    const [accSettings, setAccSettings] = useState({
        email: 'yourMail@example.com',
        gender: 'male',
        connectedToGoogle: true,
    });

    function f()
    {
        console.log('clicked');
    }
    
   
    return (
        <div className='max-w-[688px] flex-auto w-full ml-[40px] mt-[20px]'>
            <h2
                className='px-0 py-10 text-xl font-medium not-italic leading-6 text-[var(--newCommunityTheme-bodyText)]'
                style={{fontFamily: '"IBM Plex Sans", sans-serif'}}
            >
                Post and Comment settings
            </h2>


            <SettingsTabHeading text="Posts" style={leftAlignStyle} />

            <SettingsGenericItemRight head="Post type options" text={''}
                thirdComponent={'mm'} style={leftAlignStyle} id = '1' f = {f}  />

            <SettingsGenericItemRight head="Allow crossposting of posts.
" text="" thirdComponent={'Toggle'} f = {f}
            item = {accSettings.gender} style={leftAlignStyle} id = '2' />
            <SettingsGenericItemRight head="Archive posts
" text="Don’t allow commenting or voting on posts older than 6 months" f = {f}  thirdComponent={'Toggle'}
            item = {accSettings.gender} style={leftAlignStyle} id = '2' />
            <SettingsGenericItemRight head="Enable spoiler tag
" text="Media on posts with the spoiler tag are blurred" f = {f}  thirdComponent={'Toggle'}
            item = {accSettings.gender} style={leftAlignStyle} id = '2' />
            <SettingsGenericItemRight head="Allow image uploads and links to image hosting sites
" text=""  thirdComponent={'Toggle'} f = {f}
            item = {accSettings.gender} style={leftAlignStyle} id = '2' />

            <SettingsGenericItemRight f = {f} head="Allow multiple images per post" text="" thirdComponent={'Toggle'} style={leftAlignStyle}
            id = '3' />
            <SettingsGenericItemRight f = {f} head="Allow polls" text="" thirdComponent={'Toggle'} style={leftAlignStyle}
            id = '3' />

<SettingsGenericItemRight f = {f} head="Posts" text="" thirdComponent={'mm2'} style={leftAlignStyle}
            id = '3' />

<SettingsGenericItemRight f = {f} head="Links" text="" thirdComponent={'mm2'} style={leftAlignStyle}
            id = '3' />
            <SettingsGenericItemRight f = {f} head="Comments" text="" thirdComponent={'mm2'} style={leftAlignStyle}
            id = '3' />

<SettingsTabHeading text="Comments" style={leftAlignStyle}
                id = '9'/>

<SettingsGenericItemRight f = {f} head="Suggested sort" text="All comment feeds in community will default to this sort setting" thirdComponent={'mm2'} style={leftAlignStyle}
            id = '3' />

<SettingsGenericItemRight f = {f} head="Collapse deleted and removed comments
" text=""  thirdComponent={'Toggle'}
            item = {accSettings.gender} style={leftAlignStyle} id = '2' />

            <SettingsTabHeading f = {f} text="Media in comments" style={leftAlignStyle}
                id = '9'/>

<SettingsGenericItemRight f = {f} head="GIFs from GIPHY" text="Allow comments with GIFs from GIPHY." thirdComponent={'Toggle'} style={leftAlignStyle}
            id = '3' />

<SettingsGenericItemRight f = {f} head="Collectible Expressions" text="Allow comments with Collectible Expressions." thirdComponent={'Toggle'} style={leftAlignStyle}
            id = '3' />

<SettingsGenericItemRight f = {f} head="Images" text="Allow comments with uploaded images." thirdComponent={'Toggle'} style={leftAlignStyle}
            id = '3' />
            <SettingsGenericItemRight f = {f} head="GIFs" text="Allow comments with uploaded GIFs.


" thirdComponent={'Toggle'} style={leftAlignStyle}
            id = '3' />
            <SettingsTabHeading text="ADVANCED SETTINGS" style={leftAlignStyle}
                id = '9'/>
                <ThirdPartyAuthorization />
        </div>
    );
}

export {ModerationSettings};
