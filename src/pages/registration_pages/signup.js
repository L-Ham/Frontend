/*eslint-disable*/
import React from 'react';
import {useState} from 'react';


import '../.././App.css';

import { GoogleLogin } from '@react-oauth/google';

import {SignUpWithGoogleButton} from "../.././generic components/guestpagecomponents/signupcomponents/google";

import {Divider} from "../.././generic components/guestpagecomponents/divider";

import {HeadingSignUp} from '../.././generic components/guestpagecomponents/signupcomponents/headingsignup';
import {UserAgreementSignup} from '../.././generic components/guestpagecomponents/signupcomponents/useragreementsignup';
import EmailLoginForm from '../.././generic components/guestpagecomponents/signupcomponents/emailtextfield';

import {ExistingMember} from '../.././generic components/guestpagecomponents/signupcomponents/existingmember';
/**
 *
 * @return {JSX.Element} App
 */
function SignUp() {
    return (
        <div className="wrap">
            <div className="wrap">
                <div className="floatleft">
                    <img
                        src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
                        alt="React Logo"
                        style={{width: '100%', height: '100%'}}
                    />
                </div>
                <div className="floatright">
                    <div style={{marginBottom: '128px'}} /> {/* Spacer above Heading */}
                    <HeadingSignUp />
                    <div style={{marginBottom: '5px'}} /> {/* Spacer below Heading */}
                    <UserAgreementSignup />
                    <div style={{marginBottom: '50px'}} />{' '}
                    {/* Spacer between components */}
                   
                    <div style={{marginBottom: '5px'}} />{' '}
                    {/* Spacer between components */}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <SignUpWithGoogleButton />
                        <div style={{marginBottom: '35px'}} />{' '}
                        <Divider length={210} /> 
                        {/* Spacer between components */}
                        <EmailLoginForm />
                        <div style={{marginBottom: '1px'}} />{' '}
                        {/* Spacer between components */}
                        <ExistingMember />
                        <div style={{marginBottom: '10px'}} />{' '}
                        {/* Spacer between components */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export  {SignUp};