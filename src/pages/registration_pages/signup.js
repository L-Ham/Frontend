import React from 'react';
import {useState} from 'react';


import {GoogleButton} from '../.././generic components/guestpagecomponents/signupcomponents/google';

import {Divider} from '../.././generic components/guestpagecomponents/divider';

import {HeadingSignUp} from '../.././generic components/guestpagecomponents/signupcomponents/headingsignup';
import {UserAgreementSignup} from '../.././generic components/guestpagecomponents/signupcomponents/useragreementsignup';
import EmailLoginForm from '../.././generic components/guestpagecomponents/signupcomponents/emailtextfield';

import {ExistingMember} from '../.././generic components/guestpagecomponents/signupcomponents/existingmember';
import {axiosInstance as axios} from '../.././requests/axios';
import {API_ROUTES} from '../../requests/routes';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {login, selfInfo} from '../../store/userSlice.js';
import {SignUpContinued} from './signupcontinued.js';

/**
 *
 * @return {JSX.Element} App
 */
function SignUp() {
    const [validEmail, setValidEmail] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    /**
     * Takes in token for user and retrieve user info
     * @param {string} token
     * @return {Promise<void>}
     */
    async function handleUserData(token) {
        if (token) {
            dispatch(login({token: token}));
            try {
                const selfInfoResponse = await axios.get(API_ROUTES.userSelfInfo);
                dispatch(selfInfo(selfInfoResponse.data.user));
            } catch (error) {
                // console.error('Error retrieving user info:', error);
            }
        }
    }
    /**
     * Performs google login for user given access token
     * @param {string} accessToken
     * @return {Promise<void>}
     */
    async function googleLoginUser(accessToken) {
        try {
            const response = await axios.post(API_ROUTES.GoogleLogin, {token: accessToken});
            handleUserData(response.data.token);
            navigate('/');
        } catch (error) {
            if (error.response.data.message === 'User didn\'t signup using google signup') {
                navigate('/login');
            } else {
                // console.error('Error sending token to backend:', error);
            }
        }
    }
    /**
     * Given Access token handles user sign up and login if user already exists
     * @param {string} accessToken
     * @return {Promise<void>}
     */
    async function handleAccessToken(accessToken) {
        // You can perform further actions with the access token here
        // console.log('Received access token:', accessToken);
        try {
            const response = await axios.post(API_ROUTES.GoogleSignUp, {token: accessToken});
            handleUserData(response.data.token);
            // console.log('Token sent to backend:', response.data);
            navigate('/');
        } catch (error) {
            if (error.response.data.message === 'Email already Exists') {
                // If user exists then log in the user
                googleLoginUser(accessToken);
            } else {
                // console.error('Error sending token to backend:', error);
            }
        }
        // console.log(Token);
    }

    const handleEmailFormSubmit = (isValidEmail, userEmail) => {
        setValidEmail(isValidEmail);
        setEmail(userEmail);
        // console.log('Email:', userEmail);
        // console.log('Valid Email:', isValidEmail);
    };
    return (

        <>
            {!validEmail && (
                <div className="fixed left-0 top-0 size-full"
                    data-testid="signup-page"
                >
                    <div className="fixed left-0 top-0 size-full">
                        <div style={{float: 'left', height: '100%', width: '10%'}}>
                            <img
                                src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
                                alt="React Logo"
                                style={{width: '100%', height: '100%'}}
                                data-testid="signup-logo"
                            />
                        </div>
                        <div style={{float: 'right', height: '100%', width: '87%'}}
                            data-testid="signup-page2"
                        >
                            <div style={{marginBottom: '128px'}} /> {/* Spacer above Heading */}
                            <HeadingSignUp />
                            <div style={{marginBottom: '5px'}} /> {/* Spacer below Heading */}
                            <UserAgreementSignup />
                            <div style={{marginBottom: '50px'}} />{' '}
                            {/* Spacer between components */}

                            <div style={{marginBottom: '5px'}} />{' '}
                            {/* Spacer between components */}
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <GoogleButton onAccessToken={handleAccessToken} />
                                <div style={{marginBottom: '35px'}} />{' '}
                                <Divider length={210} />
                                {/* Spacer between components */}
                                <EmailLoginForm onFormSubmit={handleEmailFormSubmit} />
                                <div style={{marginBottom: '1px'}} />{' '}
                                {/* Spacer between components */}
                                <ExistingMember />
                                <div style={{marginBottom: '10px'}} />{' '}
                                {/* Spacer between components */}
                            </div>
                        </div>
                    </div>
                </div> )}
            {validEmail && (
                <SignUpContinued email={email} />
            )}


        </>

    );
}

export {SignUp};
