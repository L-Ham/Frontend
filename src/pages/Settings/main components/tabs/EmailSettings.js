import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/SettingsGenericItemRight';
import {SettingsTabHeading} from '../../general components/text/SettingsTabHeading';


const EmailSettings = () => {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', selfJustify: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Manage Emails</h3>
            <SettingsTabHeading text="MESSAGES" />

            <SettingsGenericItemRight head="Private messages" text="" thirdComponent={'Toggle'} />

            <SettingsGenericItemRight head="Chat requests" text="" thirdComponent={'Toggle'} />

            <SettingsTabHeading text="ACTIVITY" />
            <SettingsGenericItemRight head="New user welcome

" text="" thirdComponent={'Toggle'} />


            <SettingsGenericItemRight head="Comments on your posts" text="" thirdComponent={'Toggle'} />

            <SettingsGenericItemRight head="Replies to your comments" text="" thirdComponent={'Toggle'} />


            <SettingsGenericItemRight head="Upvotes on your posts" text="" thirdComponent={'Toggle'} />

            <SettingsGenericItemRight head="Upvotes on your comments" text="" thirdComponent={'Toggle'} />

            <SettingsGenericItemRight head="Username mentions" text="" thirdComponent={'Toggle'} />


            <SettingsGenericItemRight head="New followers" text="" thirdComponent={'Toggle'} />

            <SettingsTabHeading text="NEWSLETTERS" />


            <SettingsGenericItemRight head="Daily Digest
" text="" thirdComponent={'Toggle'} />

            <SettingsGenericItemRight head="Unsubscribe from all emails" text="" thirdComponent={'Toggle'} />


        </div>
    );
};

export {EmailSettings};
