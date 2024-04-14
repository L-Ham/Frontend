import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
{/* import {useToggle} from '../../pop ups/togglecontext';*/}
import {SettingsGenericItemDown} from '../../generic components/settingsgenericitemdown.js';
import {SettingsGenericItemRight} from '../../generic components/settingsgenericitemright.js';
import {SettingsTabHeading} from '../../general components/text/settingstabheading.js';
import {axiosInstance} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';
import PropTypes from 'prop-types';
/**
 * ProfileSettings function component renders the profile customization settings.
 * It allows users to set and modify their profile information such as display name, about section,
 * social links, avatar and banner images, and various privacy and visibility settings.
 * The component utilizes `SettingsTabHeading` for section headings, `SettingsGenericItemRight`,
 * and `SettingsGenericItemDown` for individual settings options.
 *
 * @return {React.Component} A div container with settings to customize the user's profile.
 */
function ProfileSettings({id}) {
    {/* const {toggleNfsw} = useToggle();*/}
    const token = useSelector((state) => state.user.token);
    const [profileSettings, setProfileSettings] = useState({
        displayName: '',
        about: '',
        socialLinks: [],
        avatarImage: '',
        bannerImage: '',
        NSFW: false,
        allowFollow: true,
        contentVisibility: true,
        communitiesVisibility: true,
        clearHistory: false,
    });

    /**
 * ProfileSettings function component renders the profile customization settings.

 *
 * @return {React.Component} A div container with settings to customize the user's profile.
 */
    async function fetchProfileSettings() {
        try {
            const response = await axiosInstance.get(API_ROUTES.profileSettings, {
                headers: {Authorization: `Bearer ${token}`},
            });
            setProfileSettings(response.data.profileSettings);
        } catch (error) {
            console.error('Failed to fetch profile settings:', error);
        }
    }
    useEffect(() => {
        fetchProfileSettings();
    }, [token]);

    /**
 * Asynchronously updates profile settings using a PATCH request and logs the response.
 *
 * @param {Object} updatedSettings - The new settings to be updated.
 */
    async function handleUpdateProfileSettings(updatedSettings) {
        try {
            const response = await axiosInstance.patch(API_ROUTES.profileSettings, updatedSettings, {
                headers: {Authorization: `Bearer ${token}`},
            });
            console.log('Profile updated:', response.data);
        // Optionally refresh the profile settings or indicate success to the user
        } catch (error) {
            console.error('Failed to update profile settings:', error);
        }
    }


    /**
 * Toggles a boolean setting in the profile settings object.
 *
 * @param {string} settingKey - The key of the setting to toggle.
 */
    function toggleSetting(settingKey) {
        const newValue = !profileSettings[settingKey];
        const updatedSettings = {...profileSettings, [settingKey]: newValue};
        setProfileSettings(updatedSettings); // Update local state
        handleUpdateProfileSettings(updatedSettings); // Send update request
        console.log('updated', updatedSettings);
    }

    /**
 * Updates a specific setting in the profile settings with a new text value.
 *
 * @param {string} settingKey - The key of the setting to update.
 * @param {string} value - The new text value to set for the specified setting key.
 */
    function changeTextSetting(settingKey, value) {
        const updatedSettings = {...profileSettings, [settingKey]: value};
        setProfileSettings(updatedSettings); // Update local state
        handleUpdateProfileSettings(updatedSettings); // Send update request
        console.log('updated', updatedSettings);
    }

    /**
 * Updates social links settings within the profile settings.
 *
 * @param {string} settingKey - The key of the setting to update.
 * @param {string} value - The new value to set for the specified setting key.
 */
    function changeSocialLinks(settingKey, value) {
        const updatedSettings = {...profileSettings, [settingKey]: value};
        setProfileSettings(updatedSettings); // Update local state
        handleUpdateProfileSettings(updatedSettings); // Send update request
        console.log('updated', updatedSettings);
    }


    return (
        <div className='max-w-[688px] flex-auto'>
            <h2 className='px-0 py-10 text-xl font-medium
             not-italic leading-6 text-[var(--newCommunityTheme-bodyText)]'
            style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
                Customize profile
            </h2>
            {/* Profile information settings */}
            <SettingsTabHeading text="PROFILE INFORMATION " id = '1' />
            <SettingsGenericItemDown head="Display name
             (optional)" text="Set display name" thirdComponent={'text30'} id = '2'
            prop={profileSettings.displayName} genericFunction = {changeTextSetting} />
            <SettingsGenericItemDown head="About (optional)"
                text="A brief description of yourself shown on your
              profile." thirdComponent={'text200'} genericFunction = {changeTextSetting} id = '3'
                prop ={profileSettings.about} />
            <SettingsGenericItemDown head="Social links (5 max)"
                text="People who visit your profile will see your social
             links." thirdComponent={'social'} prop={profileSettings.socialLinks} genericFunction={changeSocialLinks}
                id = '4'

            />

            {/* Images settings */}
            <SettingsTabHeading text="Images" id = '5' />
            <SettingsGenericItemDown head="Avatar and banner image"
                text="Images must be .png or .jpg format" thirdComponent={'2images'} id = '6' />

            {/* Profile category settings */}
            <SettingsTabHeading text="PROFILE CATEGORY" id = '7' />
            <SettingsGenericItemRight head="NSFW" text="This content
             is NSFW (may contain nudity, pornography, profanity, or
              inappropriate content for those under 18)" thirdComponent={'Toggle'} id = '8'
            f={() => toggleSetting('NSFW')} prop={profileSettings.NSFW} />

            {/* Advanced settings */}
            <SettingsTabHeading text="Advanced" id = '9' />
            <SettingsGenericItemRight head="People to follow you"
                text="Followers will be notified about posts you make
             to your profile and see them in their home feed." id = '10'
                thirdComponent={'Toggle'} f={() => toggleSetting('allowFollow') }
                prop={profileSettings.allowFollow} />
            <SettingsGenericItemRight head="Control visibility"
                text="Posts to this profile can appear in r/all and
              your profile can be discovered in /users" id = '11'
                thirdComponent={'Toggle'} f={() => toggleSetting('contentVisibility')}
                prop={profileSettings.contentVisibility} />
            <SettingsGenericItemRight head="Active in communities visibility"
                text="Show which communities I am active in on my profile." id = '12'
                thirdComponent={'Toggle'} f={() => toggleSetting('communitiesVisibility')}
                prop={profileSettings.communitiesVisibility} />
            <SettingsGenericItemRight head="Clear history" text="Delete
             your post views history." thirdComponent={'clearhistory'} id = '13' />

            {/* Profile moderation link */}
            <SettingsTabHeading text="PROFILE MODERATION" id = '14' />
            <div className="text-[color:var(--newCommunityTheme-bodyText)]">
                For moderation tools please visit our <a href="/user/Accomplished-Sky5845/about/edit/moderation"
                    className="text-[color:var(--newRedditTheme-linkText)] underline">Profile Moderation page</a>
            </div>
        </div>
    );
}

ProfileSettings.propTypes = {
    id: PropTypes.string,
};

export {ProfileSettings};
