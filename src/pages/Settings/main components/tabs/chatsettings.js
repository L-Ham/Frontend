import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/settingsgenericitemright.js';
import {SettingsTabHeading} from '../../general components/text/settingstabheading.js';
import {useEffect, useState} from 'react';
import {axiosInstance} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';
import PropTypes from 'prop-types';


/**
 * ChatSettings function component renders the chat and messaging settings interface.
 * It provides options to control who can send chat requests and private messages to the user,
 * including settings to manage message privacy and notifications.
 *
 * @return {React.Component} A div container with settings to manage chat and messaging preferences.
 */
function ChatSettings({id}) {
    const [chatSettings, setChatSettings] = useState({
        chatRequests: 'Everyone',
        privateMessages: 'Everyone',
    });
    /**
     * Asynchronously updates notification settings using a PATCH request.
     *
     * @param {Object} updatedSettings - The new settings to be updated.
     */
    async function handleUpdateChatSettings(updatedSettings) {
        try {
            await axiosInstance.patch(API_ROUTES.chatSettings, updatedSettings);
        // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            console.error('Failed to update notification settings:', error);
        }
    }/**
 * Changes a specified setting in the feed settings to a new value.
 *
 * @param {string} settingKey - The key of the setting to change.
 * @param {*} value - The new value to set for the specified setting key.
 */
    function changeMenu(settingKey, value) {
        const newValue = value;
        const updatedSettings = {...chatSettings, [settingKey]: newValue};
        setChatSettings(updatedSettings); // Update local state
        handleUpdateChatSettings(updatedSettings); // Send update request
        console.log('send feed settings', updatedSettings);
    }
    useEffect(() => {
        /**
         * ProfileSettings function component renders the profile customization settings.
         *
         * @return {React.Component} A div container with settings to customize the user's profile.
         */
        async function fetchChatSettings() {
            try {
                const response = await axiosInstance.get(API_ROUTES.chatSettings);
                // Directly use response.data since it matches the expected structure
                console.log('feed settings recived:', response.data);

                setChatSettings(response.data);
            } catch (error) {
                console.error('Failed to fetch feed settings:', error);
            }
        }

        fetchChatSettings();
    }, []);
    return (
        <div className='max-w-[688px] flex-auto'>
            <h2
                className='px-0 py-10 text-xl font-medium not-italic leading-6 text-[var(--newCommunityTheme-bodyText)]'
                style={{fontFamily: '"IBM Plex Sans", sans-serif'}}
            >
            Chat & messaging
            </h2>
            <SettingsTabHeading text="MESSAGES" id = '1' />

            <SettingsGenericItemRight head="Who can send you chat requests" thirdComponent={'chatMenu'}
                item = {chatSettings.chatRequests} genericFunction={changeMenu} id = '2'/>
            <SettingsGenericItemRight head="Who can send you private messages" thirdComponent={'privMenu'}
                item = {chatSettings.privateMessages} genericFunction={changeMenu} id = '3' />
            <SettingsGenericItemRight head="Mark all as read" thirdComponent={'mr'} id = '4' />
        </div>
    );
}

ChatSettings.propTypes = {
    id: PropTypes.string,
};
export {ChatSettings};
