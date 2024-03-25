import React from 'react';
import {SettingsComponent} from '../../generic components/SettingsComponent';
import {Header} from '../../general components/text/Header';


const EmailSettings = () => {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', selfJustify: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Manage Emails</h3>
            <Header text="MESSAGES" />

            <SettingsComponent head="Private messages" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Chat requests" text="" thirdComponent={'Toggle'} />

            <Header text="ACTIVITY" />
            <SettingsComponent head="New user welcome

" text="" thirdComponent={'Toggle'} />


            <SettingsComponent head="Comments on your posts" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Replies to your comments" text="" thirdComponent={'Toggle'} />


            <SettingsComponent head="Upvotes on your posts" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Upvotes on your comments" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Username mentions" text="" thirdComponent={'Toggle'} />


            <SettingsComponent head="New followers" text="" thirdComponent={'Toggle'} />

            <Header text="NEWSLETTERS" />


            <SettingsComponent head="Daily Digest
" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Unsubscribe from all emails" text="" thirdComponent={'Toggle'} />


        </div>
    );
};

export {EmailSettings};
