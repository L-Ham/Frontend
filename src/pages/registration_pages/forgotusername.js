/*eslint-disable*/
import {useState} from 'react';


import {HeadingUserName} from '../.././generic components/guestpagecomponents/forgotusernamecomponents/headingusername';
import {Usermessage} from '../.././generic components/guestpagecomponents/forgotpasswordcomponents/usernamemessage';
import {RedditLogo} from '../.././generic components/guestpagecomponents/redditlogo';
import EmailLoginForm from '../.././generic components/guestpagecomponents/forgotusernamecomponents/emailusername';
import {UserHelp} from '../.././generic components/guestpagecomponents/forgotpasswordcomponents/usernamehelp';


function ForgotUsername() {
    return (
        <div className="fixed w-full h-full left-0 top-0"
            data-testid="forgotusername1234"
        >
            <div className="fixed w-full h-full left-0 top-0">
                <div className="float-left h-full w-[10%]">
                    <img
                        src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
                        alt="React Logo"
                        style={{width: '100%', height: '100%'}}
                        data-testid="redditpic2"
                    />
                </div>
                <div className="float-right h-full w-[87%]"
                    data-testid="forgotusername200"
                >
                    <div style={{marginBottom: '180px'}} /> {/* Spacer above Heading */}
                    <RedditLogo />
                    <div style={{marginBottom: '50px', display: 'inline-block'}} />{' '}
                    {/* Spacer below Heading */}
                    <HeadingUserName />
                    <Usermessage />
                
                    {/* Spacer between components */}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        
                        {/* Spacer between components */}
                        <EmailLoginForm />
                        <div style={{marginBottom: '1px'}} />{' '}
                        {/* Spacer between components */}
                        <UserHelp />
                        <div style={{marginBottom: '10px'}} />{' '}
                        {/* Spacer between components */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export  {ForgotUsername};