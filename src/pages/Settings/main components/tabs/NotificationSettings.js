import React from 'react';
import {SettingsGenericItemRight} from '../../generic components/SettingsGenericItemRight';

import {SettingsTabHeading} from '../../general components/text/SettingsTabHeading';


const NotificationSettings = () => {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', selfJustify: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Notification settings</h3>
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


            <SettingsGenericItemRight head="Activity on chat posts you're in

" text="" thirdComponent={'Toggle'} />

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
};

export {NotificationSettings};
