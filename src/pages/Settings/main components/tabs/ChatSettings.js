import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/settingsgenericitemright';
import {SettingsTabHeading} from '../../general components/text/settingstabheading';


/**
 * ChatSettings function component renders the chat and messaging settings interface.
 * It provides options to control who can send chat requests and private messages to the user,
 * including settings to manage message privacy and notifications.
 *
 * @return {React.Component} A div container with settings to manage chat and messaging preferences.
 */
function ChatSettings() {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', justifyContent: 'left', marginLeft: '50px'}}>
            <h1 style={{color: 'black', marginBottom:
             '20px', textAlign: 'left', fontWeight: 'bold', fontSize: '20px'}}>Chat & Messaging</h1>
            <SettingsTabHeading text="MESSAGES" />

            <SettingsGenericItemRight head="Who can send you chat requests" thirdComponent={'chatMenu'} />
            <SettingsGenericItemRight head="Who can send you private messages" thirdComponent={'chatMenu'} />
            <SettingsGenericItemRight head="Mark all as read" thirdComponent={'mr'} />
        </div>
    );
}

export {ChatSettings};
