import React from 'react';
import {SettingsComponent} from '../../generic components/SettingsComponent';
import {Header} from '../../general components/text/Header';


const ChatSettings = () => {
    return (
        <div style={{backgroundColor: 'white', maxWidth: '600px', selfJustify: 'left', marginLeft: '50px'}}>
            <h3 style={{color: 'black'}}>Chat & Messaging</h3>
            <Header text="MESSAGES" />

            <SettingsComponent head="Who can send you chat
       requests" text="" thirdComponent={'Gender'} />

            <SettingsComponent head="Who can send you private messages
" text="Heads up—Reddit admins and moderators of communities you’ve joined
 can message you even if
  they’re not approved" thirdComponent={'Gender'} />


            <SettingsComponent head="Mark all as read
      " text="Mark all conversations and invites as read.

      " thirdComponent={'mr'} />


        </div>
    );
};

export {ChatSettings};
