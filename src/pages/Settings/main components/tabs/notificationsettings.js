import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/settingsgenericitemright.js';
import {SettingsTabHeading} from '../../general components/text/settingstabheading.js';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {axiosInstance} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';
import PropTypes from 'prop-types';
/**
 * NotificationSettings function component renders the notification settings for a user.
 * This includes toggles for various types of notifications such as messages, activity updates,
 * recommendations, and more. Each setting allows the user to control whether they receive
 * specific types of notifications.
 *
 * @return {React.Component} A div container with notification settings organized into categories.
 */
function NotificationSettings({id}) {
    const token = useSelector((state) => state.user.token);
    const [notificationSettings, setNotificationSettings] = useState({
        inboxMessage: false,
        chatMessages: true,
        chatRequest: false,
        mentions: false,
        comments: true,
        upvotesToPosts: true,
        upvotesToComments: true,
        repliesToComments: true,
        newFollowers: true,
        modNotifications: true,
    });
    /**
 * Asynchronously updates notification settings using a PATCH request.
 *
 * @param {Object} updatedSettings - The new settings to be updated.
 */
    async function handleUpdateNotificationSettings(updatedSettings) {
        try {
            await axiosInstance.patch(API_ROUTES.notificationSettings, updatedSettings, {
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
        const newValue = !notificationSettings[settingKey];
        const updatedSettings = {...notificationSettings, [settingKey]: newValue};
        setNotificationSettings(updatedSettings); // Update local state
        handleUpdateNotificationSettings(updatedSettings); // Send update request
        console.log('send notification settings', updatedSettings);
    }

    useEffect(() => {
        /**
    * ProfileSettings function component renders the profile customization settings.

    *
    * @return {React.Component} A div container with settings to customize the user's profile.
    */
        async function fetchNotificationSettings() {
            try {
                const response = await axiosInstance.get(API_ROUTES.notificationSettings, {
                    headers: {Authorization: `Bearer ${token}`},
                });
                    // Directly use response.data since it matches the expected structure
                console.log('feed settings recived:', response.data);

                setNotificationSettings(response.data.notificationSettings);
            } catch (error) {
                console.error('Failed to fetch feed settings:', error);
            }
        }

        fetchNotificationSettings();
    }, [token]);
    return (
        <div className='max-w-[688px] flex-auto'>
            <h2
                className='px-0 py-10 text-xl font-medium not-italic leading-6 text-[var(--newCommunityTheme-bodyText)]'
                style={{fontFamily: '"IBM Plex Sans", sans-serif'}}
            >
            Notification Settings
            </h2>
            <SettingsTabHeading text="MESSAGES" id = '1' />

            <SettingsGenericItemRight head="Private messages" text="" thirdComponent={'Toggle'} id = '2'
                f={() => toggleSetting('inboxMessage')} prop = {notificationSettings.inboxMessage} />
            <SettingsGenericItemRight head="Chat messages" text="" thirdComponent={'Toggle'} id = '3'
                f={() => toggleSetting('chatMessages')} prop = {notificationSettings.chatMessages} />
            <SettingsGenericItemRight head="Chat requests" text="" thirdComponent={'Toggle'} id = '4'
                f={() => toggleSetting('chatRequest')} prop = {notificationSettings.chatRequest} />

            <SettingsTabHeading text="ACTIVITY" id = '4' />

            <SettingsGenericItemRight head="Mentions of u/username" text="" thirdComponent={'Toggle'}
                f={() => toggleSetting('mentions')} prop = {notificationSettings.mentions} id = '5' />
            <SettingsGenericItemRight head="Comments on your posts" text="" thirdComponent={'Toggle'}
                f={() => toggleSetting('comments')} prop = {notificationSettings.comments} id = '6' />
            <SettingsGenericItemRight head="Upvotes on your posts" text="" thirdComponent={'Toggle'} id = '7'
                f={() => toggleSetting('upvotesToPosts')} prop = {notificationSettings.upvotesToPosts} />
            <SettingsGenericItemRight head="Upvotes on your comments" text="" thirdComponent={'Toggle'} id = '8'
                f={() => toggleSetting('upvotesToComments')} prop = {notificationSettings.upvotesToComments} />
            <SettingsGenericItemRight head="Replies to your comments" text="" thirdComponent={'Toggle'} id = '9'
                f={() => toggleSetting('repliesToComments')} prop = {notificationSettings.repliesToComments} />
            <SettingsGenericItemRight head="Activity on your comments" text="" thirdComponent={'Toggle'} id = '10' />
            <SettingsGenericItemRight head="Activity on chat posts you're in" text=""
                thirdComponent={'Toggle'} id = '11' />
            <SettingsGenericItemRight head="New followers" text="" thirdComponent={'Toggle'} id = '12'
                f={() => toggleSetting('newFollowers')} prop = {notificationSettings.newFollowers} />
            <SettingsGenericItemRight head="Awards you receive" text="" thirdComponent={'Toggle'} id = '13' />
            <SettingsGenericItemRight head="Posts you follow" text="" thirdComponent={'Toggle'} id = '14' />
            <SettingsGenericItemRight head="Comments you follow" text="" thirdComponent={'Toggle'} id = '15' />

            <SettingsTabHeading text="RECOMMENDATIONS" />

            <SettingsGenericItemRight head="Trending posts" text="" thirdComponent={'Toggle'} id = '16' />
            <SettingsGenericItemRight head="Community recommendations" text="" thirdComponent={'Toggle'} id = '17' />
            <SettingsGenericItemRight head="ReReddit" text="" thirdComponent={'Toggle'} id = '18' />
            <SettingsGenericItemRight head="Featured content" text="" thirdComponent={'Toggle'} id = '19' />

            <SettingsTabHeading text="UPDATES" id = '20' />

            <SettingsGenericItemRight head="Reddit announcements" text="" thirdComponent={'Toggle'} id = '21' />
            <SettingsGenericItemRight head="Cake day" text="" thirdComponent={'Toggle'} id = '22' />
        </div>
    );
}

NotificationSettings.propTypes = {
    id: PropTypes.number,
};


export {NotificationSettings};
