import React from 'react';
import {useState} from 'react';


import {SignUpWithGoogleButton} from '../.././generic components/guestpagecomponents/signupcomponents/google';

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
/**
 *
 * @return {JSX.Element} App
 */
function SignUp() {
    const [Token, setToken] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAccessToken = async (accessToken) => {
        setToken(accessToken);
        // You can perform further actions with the access token here
        console.log('Received access token:', accessToken);
        try {
            // Send the access token to the backend
            const response = await axios.post(API_ROUTES.GoogleSignUp, {token: accessToken});
            if (response.data.token) {
                dispatch(login({token: response.data.token}));
                const selfInfoResponse = await axios.get(API_ROUTES.userSelfInfo, {
                    headers: {
                        Authorization: `Bearer ${response.data.token}`,
                    },
                });
                dispatch(selfInfo(selfInfoResponse.data.user));
            }
            console.log('Token sent to backend:', response.data);
            navigate('/');
        } catch (error) {
            if (error.response.data.message === 'Email already Exists') {
                try {
                    const response = await axios.post(API_ROUTES.GoogleLogin, {token: accessToken});
                    if (response.data.token) {
                        dispatch(login({token: response.data.token}));
                        const selfInfoResponse = await axios.get(API_ROUTES.userSelfInfo, {
                            headers: {
                                Authorization: `Bearer ${response.data.token}`,
                            },
                        });
                        dispatch(selfInfo(selfInfoResponse.data.user));
                    }
                } catch (error) {
                    if (error.response.data.message === 'User didn\'t signup using google signup') {
                        navigate('/login');
                    }
                    console.error('Error sending token to backend:', error);
                }
            }
            console.error('Error sending token to backend:', error);
        }
        console.log(Token);
    };
    return (
        <div className="fixed left-0 top-0 size-full">
            <div className="fixed left-0 top-0 size-full">
                <div style={{float: 'left', height: '100%', width: '10%'}}>
                    <img
                        src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
                        alt="React Logo"
                        style={{width: '100%', height: '100%'}}
                    />
                </div>
                <div style={{float: 'right', height: '100%', width: '87%'}}>
                    <div style={{marginBottom: '128px'}} /> {/* Spacer above Heading */}
                    <HeadingSignUp />
                    <div style={{marginBottom: '5px'}} /> {/* Spacer below Heading */}
                    <UserAgreementSignup />
                    <div style={{marginBottom: '50px'}} />{' '}
                    {/* Spacer between components */}

                    <div style={{marginBottom: '5px'}} />{' '}
                    {/* Spacer between components */}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <SignUpWithGoogleButton onAccessToken={handleAccessToken} />
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

export {SignUp};
