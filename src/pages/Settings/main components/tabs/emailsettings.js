import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/settingsgenericitemright.js';
import {SettingsTabHeading} from '../../general components/text/settingstabheading.js';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {axiosInstance} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';

/**
 * EmailSettings function component renders the email management settings interface.
 * It allows users to toggle their preferences for various types of email notifications,
 * including private messages, chat requests, post and comment interactions, and newsletters.
 *
 * @return {React.Component} A div container with settings to manage email preferences.
 */
function EmailSettings() {
    const token = useSelector((state) => state.user.token);
    const [mailSettings, setmailSettings] = useState({
        privateMessages: false,
        chatRequests: true,
        newUserWelcome: false,
        commentOnPost: false,
        repliesToComments: true,
        upvotesOnPosts: true,
        upvotesOnComments: true,
        usernameMentions: true,
        newFollowers: true,
        unsubscribeFromEmail: true,
    });
    /**
 * Asynchronously updates notification settings using a PATCH request.
 *
 * @param {Object} updatedSettings - The new settings to be updated.
 */
    async function handleUpdateEmailSettings(updatedSettings) {
        try {
            await axiosInstance.patch(API_ROUTES.emailSettings, updatedSettings, {
                headers: {Authorization: `Bearer ${token}`},
            });
        // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            console.error('Failed to update notification settings:', error);
        }
    }
    /**
 * Toggles a specified setting key's boolean value in the notification settings.
 *
 * @param {string} settingKey - The key of the setting to toggle.
 */
    function toggleSetting(settingKey) {
        const newValue = !mailSettings[settingKey];
        const updatedSettings = {...mailSettings, [settingKey]: newValue};
        setmailSettings(updatedSettings); // Update local state
        handleUpdateEmailSettings(updatedSettings); // Send update request
        console.log('send notification settings', updatedSettings);
    }
    useEffect(() => {
        /**
    * ProfileSettings function component renders the profile customization settings.

    *
    * @return {React.Component} A div container with settings to customize the user's profile.
    */
        async function fetchEmailSettings() {
            try {
                const response = await axiosInstance.get(API_ROUTES.emailSettings, {
                    headers: {Authorization: `Bearer ${token}`},
                });
                    // Directly use response.data since it matches the expected structure
                console.log('feed settings recived:', response.data);

                setmailSettings(response.data.emailSettings);
            } catch (error) {
                console.error('Failed to fetch feed settings:', error);
            }
        }

        fetchEmailSettings();
    }, [token]);
    return (
        <div className='max-w-[688px] flex-auto'>
            <h2
                className='px-0 py-10 text-xl font-medium not-italic leading-6 text-[var(--newCommunityTheme-bodyText)]'
                style={{fontFamily: '"IBM Plex Sans", sans-serif'}}
            >
            Email Settings
            </h2>
            <SettingsTabHeading text="MESSAGES" />

            <SettingsGenericItemRight head="Private messages" thirdComponent={'Toggle'}
                f={() => toggleSetting('privateMessages')} prop = {mailSettings.privateMessages} />
            <SettingsGenericItemRight head="Chat requests" thirdComponent={'Toggle'}
                f={() => toggleSetting('chatRequests')} prop = {mailSettings.chatRequests} />

            <SettingsTabHeading text="ACTIVITY" />
            <SettingsGenericItemRight head="New user welcome" thirdComponent={'Toggle'}
                f={() => toggleSetting('newUserWelcome')} prop = {mailSettings.newUserWelcome} />
            <SettingsGenericItemRight head="Comments on your posts" thirdComponent={'Toggle'}
                f={() => toggleSetting('commentOnPost')} prop = {mailSettings.commentOnPost} />
            <SettingsGenericItemRight head="Replies to your comments" thirdComponent={'Toggle'}
                f={() => toggleSetting('repliesToComments')} prop = {mailSettings.repliesToComments}/>
            <SettingsGenericItemRight head="Upvotes on your posts" thirdComponent={'Toggle'}
                f={() => toggleSetting('upvotesOnPosts')} prop = {mailSettings.upvotesOnPosts}/>
            <SettingsGenericItemRight head="Upvotes on your comments" thirdComponent={'Toggle'}
                f={() => toggleSetting('upvotesOnComments')} prop = {mailSettings.upvotesOnComments} />
            <SettingsGenericItemRight head="Username mentions" thirdComponent={'Toggle'}
                f={() => toggleSetting('usernameMentions')} prop = {mailSettings.usernameMentions} />
            <SettingsGenericItemRight head="New followers" thirdComponent={'Toggle'}
                f={() => toggleSetting('newFollowers')} prop = {mailSettings.newFollowers} />

            <SettingsTabHeading text="NEWSLETTERS" />
            <SettingsGenericItemRight head="Daily Digest" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Unsubscribe from all emails" thirdComponent={'Toggle'}
                f={() => toggleSetting('unsubscribeFromEmail')} prop = {mailSettings.unsubscribeFromEmail} />
        </div>
    );
}

export {EmailSettings};
