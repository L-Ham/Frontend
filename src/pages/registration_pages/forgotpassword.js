/*eslint-disable*/

import {useState} from 'react';

import '../../App.css';

import {RedditLogo} from '../.././generic components/guestpagecomponents/redditlogo';

import {UserHelp} from '../.././generic components/guestpagecomponents/forgotpasswordcomponents/usernamehelp';
import {Headingpassword} from '../.././generic components/guestpagecomponents/forgotpasswordcomponents/headingpassword';
import {Passwordmessage} from '../.././generic components/guestpagecomponents/forgotpasswordcomponents/passwordmessage';
import PasswordLoginForm from '../.././generic components/guestpagecomponents/forgotpasswordcomponents/passwordfieldsbutton';
import {ForgotUsername} from '../.././generic components/guestpagecomponents/forgotpasswordcomponents/passwordforgotusername';

function ForgotPassword() {
    return (
        <div className="wrap">
            <div className="floatleft">
                <img
                    src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
                    alt="React Logo"
                    style={{width: '100%', height: '100%'}}
                />
            </div>
            <div className="floatright">
                <div style={{marginBottom: '130px'}} /> {/* Spacer above Heading */}
                <RedditLogo />
                <div style={{marginBottom: '50px', display: 'inline-block'}} />{' '}
                <Headingpassword />
                <Passwordmessage />
                <div style={{marginBottom: '5px'}} />
                <PasswordLoginForm />
                {/* Spacer between components */}
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <ForgotUsername />
                    {/* Spacer between components */}
                    <div style={{marginBottom: '10px'}} />{' '}
                    {/* Spacer between components */}
                    <UserHelp />
                    <div style={{marginBottom: '10px'}} />{' '}
                    {/* Spacer between components */}
                </div>
            </div>
        </div>
    );
}

export  {ForgotPassword};
