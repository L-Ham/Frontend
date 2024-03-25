import React from 'react';
import {SettingsComponent} from '../../generic components/SettingsComponent';

import {Header} from '../../general components/text/Header';


const NotificationSettings = () => {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', selfJustify: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Notification settings</h3>
            <Header text="MESSAGES" />

            <SettingsComponent head="Private messages" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Chat messages" text="" thirdComponent={'Toggle'} />


            <SettingsComponent head="Chat requests" text="" thirdComponent={'Toggle'} />

            <Header text="ACTIVITY" />

            <SettingsComponent head="Mentions of u/username" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Comments on your posts" text="" thirdComponent={'Toggle'} />


            <SettingsComponent head="Upvotes on your posts" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Upvotes on your comments" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Replies to your comments" text="" thirdComponent={'Toggle'} />


            <SettingsComponent head="Activity on your comments" text="" thirdComponent={'Toggle'} />


            <SettingsComponent head="Activity on chat posts you're in

" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="New followers" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Awards you receive" text="" thirdComponent={'Toggle'} />


            <SettingsComponent head="Posts you follow" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Comments you follow" text="" thirdComponent={'Toggle'} />

            <Header text="RECOMMENDATIONS" />

            <SettingsComponent head="Trending posts" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Community recommendations" text="" thirdComponent={'Toggle'} />


            <SettingsComponent head="ReReddit" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Featured content" text="" thirdComponent={'Toggle'} />

            <Header text="UPDATES" />
            <SettingsComponent head="Reddit announcements" text="" thirdComponent={'Toggle'} />

            <SettingsComponent head="Cake day" text="" thirdComponent={'Toggle'} />


        </div>
    );
};

export {NotificationSettings};
