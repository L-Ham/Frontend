import React, {useEffect, useState} from 'react';
import {axiosInstance} from '../../../../requests/axios.js';
import {API_ROUTES} from '../../../../requests/routes.js';
import {SettingsGenericItemRight} from '../../generic components/settingsgenericitemright.js';
import {SettingsTabHeading} from '../../general components/text/settingstabheading.js';
import {ThirdPartyAuthorization} from '../../general components/buttons/thirdpartyauthorization.js';
import {BlockUserComponent} from '../../tab specific components/safety and privacy tab/blockusercomponent.js';
import PropTypes from 'prop-types';
/**
    * ProfileSettings function component renders the profile customization settings.

    *
    * @return {React.Component} A div container with settings to customize the user's profile.
    */
function SafetySettings({id}) {
    const [safetySettings, setSafetySettings] = useState({
        blockUsers: [],
        muteCommunities: [],
    });

    useEffect(() => {
        /**
         * ProfileSettings function component renders the profile customization settings.
         *
         * @return {React.Component} A div container with settings to customize the user's profile.
         */
        async function fetchSafetySettings() {
            try {
                const response = await axiosInstance.get(API_ROUTES.safetySettings);
                // Directly use response.data since it matches the expected structure
                console.log('Safety settings:', response.data);
                const transformedSettings = transformSafetySettings(response.data);
                console.log('Transformed safety settings:', transformedSettings);
                setSafetySettings(transformedSettings);
            } catch (error) {
                console.error('Failed to fetch safety settings:', error);
            }
        }

        fetchSafetySettings();
    }, []);


    /**
 * Calculates the time elapsed since a given date and returns it in human-readable format.
 *
 * @param {Date|string|number} date - The date from which to calculate the elapsed time. Can be a Date object,
 * a string that can be parsed into a Date, or a timestamp.
 * @return {string} The time elapsed since the given date, formatted in a human-readable way (e.g., "2 hours ago").
 */
    function timeSince(date) {
        const seconds = Math.floor((new Date() - new Date(date)) / 1000);
        let interval = seconds / 31536000;

        if (interval > 1) return Math.floor(interval) + ' year(s) ago';
        interval = seconds / 2592000;
        if (interval > 1) return Math.floor(interval) + ' month(s) ago';
        interval = seconds / 86400;
        if (interval > 1) return Math.floor(interval) + ' day(s) ago';
        interval = seconds / 3600;
        if (interval > 1) return Math.floor(interval) + ' hour(s) ago';
        interval = seconds / 60;
        if (interval > 1) return Math.floor(interval) + ' minute(s) ago';
        return 'just now';
    }


    /**
 * Transforms the safety settings by updating the `blockedAt` field of each blocked user
 * to a human-readable format describing how long ago the user was blocked.
 *
 * @param {Object} settings - The safety settings object containing an array of blockUsers.
 * @return {Object} A new object with the transformed blockUsers array.
 */
    function transformSafetySettings(settings) {
        const blockUsers = settings.blockUsers.map((user) => ({
            ...user,
            blockedAt: timeSince(user.blockedAt),
        }));
        return {...settings, blockUsers};
    }


    return (
        <div className='max-w-[688px] flex-auto'>
            <h2 className='px-0 py-10 text-xl font-medium
            not-italic leading-6 text-[var(--newCommunityTheme-bodyText)]'
            style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
                Safety & Privacy
            </h2>
            <p className="mb-10 text-xs font-normal leading-4 text-[color:var(--newCommunityTheme-metaText)]">
                Manage how we use data to personalize your
                 Reddit experience, and control how other redditors interact with you. To learn more, visit our
                <span className="text-[color:var(--newRedditTheme-linkText)]">
                    <a href="https://www.reddithelp.com/en/categories/privacy"
                        rel="noopener noreferrer" target="_blank"> Privacy &amp; Security FAQs
                    </a>
                </span>.
            </p>

            <SettingsTabHeading text="SAFETY" id = '1' />

            <BlockUserComponent id = '2'
                head="People You've Blocked"
                text="Blocked people can’t send you chat requests or private messages"
                blocktext='BLOCK NEW USER'
                list={safetySettings.blockUsers}
                type = 'user'
            />

            <BlockUserComponent id = '3'
                head="Communities You've Muted"
                text="Posts from muted communities won't show up in your feeds or recommendations."
                blocktext='MUTE NEW COMMUNITY'
                list={safetySettings.muteCommunities}
                type = 'community'
            />

            <SettingsTabHeading text="PRIVACY" id = '4' />

            <SettingsGenericItemRight id = '5'
                head="Show up in search results"
                text="Allow search engines like Google to link to your profile in their search results."
                thirdComponent={'Toggle'}
            />

            <SettingsGenericItemRight id = '6'
                head="Personalize ads on Reddit based on information and activity from our partners."
                text="Allow us to use information from our partners to show you better ads on Reddit."
                thirdComponent={'Toggle'}
            />

            <SettingsTabHeading text="SENSITIVE ADVERTISING CATEGORIES" id = '7' />

            <SettingsGenericItemRight head="Alcohol" text="Allowed" thirdComponent={'Toggle'} id = '8' />
            <SettingsGenericItemRight head="Dating" text="Allowed" thirdComponent={'Toggle'} id = '9' />
            <SettingsGenericItemRight head="Gambling" text="Allowed" thirdComponent={'Toggle'} id = '10' />
            <SettingsGenericItemRight head="Pregnancy and parenting" text="Allowed" thirdComponent={'Toggle'}
                id = '11' />
            <SettingsGenericItemRight head="Weight loss" text="Allowed" thirdComponent={'Toggle'}
                id = '12' />

            <SettingsTabHeading text="ADVANCED SECURITY" id = '13' />

            <SettingsGenericItemRight
                head="Use two-factor authentication"
                text="Help protect your account (even if
                    someone gets your password) by requiring a verification code and a password to log in."
                thirdComponent={'Toggle'} id = '14'
            />

            <ThirdPartyAuthorization id = '15'/>
        </div>
    );
}

SafetySettings.propTypes = {
    id: PropTypes.string,
};

export {SafetySettings};
