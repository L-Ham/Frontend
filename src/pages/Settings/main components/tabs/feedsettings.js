import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/settingsgenericitemright.js';
import {SettingsTabHeading} from '../../general components/text/settingstabheading.js';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {axiosInstance} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';

/**
 * FeedSettings function component renders the user's feed settings interface.
 * It provides options to customize the viewing experience on Reddit, including content preferences
 * such as showing mature content, enabling home feed recommendations, autoplaying media, and more.
 * Additionally, it allows users to adjust post preferences and how content is sorted and displayed.
 *
 * @return {React.Component} A div container encompassing various settings to customize the Reddit feed experience.
 */
function FeedSettings() {
    const token = useSelector((state) => state.user.token);
    const [feedSettings, setFeedSettings] = useState({
        showNSFW: true,
        blurNSFW: true,
        enableHomeFeedRecommendations: true,
        autoplayMedia: true,
        reduceAnimations: true,
        communityThemes: true,
        communityContentSort: 'Hot',
        rememberPerCommunity: true,
        globalContentView: 'Card',
        openPostsInNewTab: true,
        defaultToMarkdown: true,
    });
    /**
 * Asynchronously updates feed settings using a PATCH request.
 *
 * @param {Object} updatedSettings - The new settings to be updated.
 */
    async function handleUpdateFeedSettings(updatedSettings) {
        try {
            await axiosInstance.patch(API_ROUTES.feedSettings, updatedSettings, {
                headers: {Authorization: `Bearer ${token}`},
            });
        // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            console.error('Failed to update Feed settings:', error);
        }
    }

    /**
 * Toggles a specified setting key's boolean value in the feed settings.
 *
 * @param {string} settingKey - The key of the setting to toggle.
 */
    function toggleSetting(settingKey) {
        const newValue = !feedSettings[settingKey];
        const updatedSettings = {...feedSettings, [settingKey]: newValue};
        setFeedSettings(updatedSettings); // Update local state
        handleUpdateFeedSettings(updatedSettings); // Send update request
        console.log('send feed settings', updatedSettings);
    }


    /**
 * Changes a specified setting in the feed settings to a new value.
 *
 * @param {string} settingKey - The key of the setting to change.
 * @param {*} value - The new value to set for the specified setting key.
 */
    function changeMenu(settingKey, value) {
        const newValue = value;
        const updatedSettings = {...feedSettings, [settingKey]: newValue};
        setFeedSettings(updatedSettings); // Update local state
        handleUpdateFeedSettings(updatedSettings); // Send update request
        console.log('send feed settings', updatedSettings);
    }


    useEffect(() => {
    /**
* ProfileSettings function component renders the profile customization settings.

*
* @return {React.Component} A div container with settings to customize the user's profile.
*/
        async function fetchFeedSettings() {
            try {
                const response = await axiosInstance.get(API_ROUTES.feedSettings, {
                    headers: {Authorization: `Bearer ${token}`},
                });
                // Directly use response.data since it matches the expected structure
                console.log('feed settings recived:', response.data);

                setFeedSettings(response.data.feedSettings);
            } catch (error) {
                console.error('Failed to fetch feed settings:', error);
            }
        }

        fetchFeedSettings();
    }, [token]);
    return (
        <div className='max-w-[688px] flex-auto'>
            <h2
                className='px-0 py-10 text-xl font-medium not-italic leading-6 text-[var(--newCommunityTheme-bodyText)]'
                style={{fontFamily: '"IBM Plex Sans", sans-serif'}}
            >
            Feed Settings
            </h2>
            <SettingsTabHeading text="CONTENT PREFERENCES" />

            <SettingsGenericItemRight
                head="Show mature (18+) content"
                text="See NSFW (Not Safe for Work) mature and adult
                 images, videos, written content, and other media in your Reddit feeds and search results."
                thirdComponent={'Toggle'} f={() => toggleSetting('showNSFW')} prop = {feedSettings.showNSFW}
            />


            <SettingsGenericItemRight
                head="Enable home feed recommendations"
                text="Allow us to introduce recommended posts in your home feed."
                thirdComponent={'Toggle'} f={() => toggleSetting('enableHomeFeedRecommendations')}
                prop = {feedSettings.enableHomeFeedRecommendations}
            />

            <SettingsGenericItemRight
                head="Autoplay media"
                text="Play videos and gifs automatically when in the viewport."
                thirdComponent={'Toggle'} f={() => toggleSetting('autoplayMedia')} prop = {feedSettings.autoplayMedia}
            />

            <SettingsGenericItemRight
                head="Reduce Animations"
                text="Reduce animations on posts, comments, and feeds."
                thirdComponent={'Toggle'} f={() => toggleSetting('reduceAnimations')}
                prop = {feedSettings.reduceAnimations}
            />

            <SettingsGenericItemRight
                head="Community themes"
                text="Use custom themes for all communities. You can also turn this off on a per community basis."
                thirdComponent={'Toggle'} f={() => toggleSetting('communityThemes')}
                prop = {feedSettings.communityThemes}
            />

            <SettingsGenericItemRight
                head="Community content sort"
                text="Choose how you would like content
                 organized in communities you visit. This will not affect global feeds such as Home, or Popular."
                thirdComponent={'rm'} genericFunction = {changeMenu} menu = {['Hot', 'New', 'Top', 'Rising']
                } prop = {feedSettings.communityContentSort} item = 'communityContentSort'
            />

            <SettingsGenericItemRight
                head="Global content view"
                text="Choose how you would like content displayed in feeds. This control is also found above your feed."
                thirdComponent={'rm'} genericFunction = {changeMenu} menu = {['Card', 'Classic', 'Compact']}
                prop = {feedSettings.globalContentView} item = 'globalContentView'
            />

            <SettingsGenericItemRight
                head="Open posts in new tab"
                text="Enable to always open posts in a new tab."
                thirdComponent={'Toggle'} f={() => toggleSetting('openPostsInNewTab')}
                prop = {feedSettings.openPostsInNewTab}
            />

            <SettingsTabHeading text="POST PREFERENCES" />

            <SettingsGenericItemRight
                head="Default to markdown"
                text="When posting, your input will default to markdown text instead of fancy pants."
                thirdComponent={'Toggle'} f={() => toggleSetting('defaultToMarkdown')}
                prop = {feedSettings.defaultToMarkdown}
            />
        </div>
    );
}

export {FeedSettings};
