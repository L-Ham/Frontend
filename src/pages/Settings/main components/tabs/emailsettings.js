import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/settingsgenericitemright';
import {SettingsTabHeading} from '../../general components/text/settingstabheading';

/**
 * EmailSettings function component renders the email management settings interface.
 * It allows users to toggle their preferences for various types of email notifications,
 * including private messages, chat requests, post and comment interactions, and newsletters.
 *
 * @return {React.Component} A div container with settings to manage email preferences.
 */
function EmailSettings() {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', justifyContent: 'left', marginLeft: '50px'}}>
            <h1 style={{color: 'black', marginBottom:
             '20px', textAlign: 'left', fontWeight: 'bold', fontSize: '20px'}}>Manage Emails</h1>
            <SettingsTabHeading text="MESSAGES" />

            <SettingsGenericItemRight head="Private messages" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Chat requests" thirdComponent={'Toggle'} />

            <SettingsTabHeading text="ACTIVITY" />
            <SettingsGenericItemRight head="New user welcome" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Comments on your posts" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Replies to your comments" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Upvotes on your posts" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Upvotes on your comments" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Username mentions" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="New followers" thirdComponent={'Toggle'} />

            <SettingsTabHeading text="NEWSLETTERS" />
            <SettingsGenericItemRight head="Daily Digest" thirdComponent={'Toggle'} />
            <SettingsGenericItemRight head="Unsubscribe from all emails" thirdComponent={'Toggle'} />
        </div>
    );
}

export {EmailSettings};
