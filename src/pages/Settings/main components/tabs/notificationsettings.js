import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/settingsgenericitemright';
import {SettingsTabHeading} from '../../general components/text/settingstabheading';

/**
 * NotificationSettings function component renders the notification settings for a user.
 * This includes toggles for various types of notifications such as messages, activity updates,
 * recommendations, and more. Each setting allows the user to control whether they receive
 * specific types of notifications.
 *
 * @return {React.Component} A div container with notification settings organized into categories.
 */
function NotificationSettings() {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', justifyContent: 'left', marginLeft: '50px'}}>
            <h1 style={{color: 'black', marginBottom:
             '20px', textAlign: 'left', fontWeight: 'bold', fontSize: '20px'}}>Notification settings</h1>
            <SettingsTabHeading text="MESSAGES" />

            <SettingsGenericItemRight head="Private messages" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Chat messages" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Chat requests" text="" thirdComponent={'Toggle'} />

            <SettingsTabHeading text="ACTIVITY" />

            <SettingsGenericItemRight head="Mentions of u/username" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Comments on your posts" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Upvotes on your posts" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Upvotes on your comments" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Replies to your comments" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Activity on your comments" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Activity on chat posts you're in" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="New followers" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Awards you receive" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Posts you follow" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Comments you follow" text="" thirdComponent={'Toggle'} />

            <SettingsTabHeading text="RECOMMENDATIONS" />

            <SettingsGenericItemRight head="Trending posts" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Community recommendations" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="ReReddit" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Featured content" text="" thirdComponent={'Toggle'} />

            <SettingsTabHeading text="UPDATES" />

            <SettingsGenericItemRight head="Reddit announcements" text="" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Cake day" text="" thirdComponent={'Toggle'} />
        </div>
    );
}

export {NotificationSettings};
