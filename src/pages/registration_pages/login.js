import React, {useEffect} from 'react';
import {Heading} from '../.././generic components/guestpagecomponents/logincomponents/heading';
import {UserAgreement} from '../.././generic components/guestpagecomponents/logincomponents/useragreement';
import {Divider} from '../.././generic components/guestpagecomponents/divider';
import LoginForm from '../.././generic components/guestpagecomponents/mergedtextfields';
import {Forgot} from '../.././generic components/guestpagecomponents/logincomponents/forgot';
import {NewMember} from '../.././generic components/guestpagecomponents/logincomponents/newmember';
import {GoogleButton} from '../.././generic components/guestpagecomponents/signupcomponents/google';
import {useSelector} from 'react-redux';
import {useNavigate, useSearchParams} from 'react-router-dom';
import {axiosInstance as axios} from '../.././requests/axios';
import {API_ROUTES} from '../../requests/routes';
import {useDispatch} from 'react-redux';
import {login, selfInfo} from '../../store/userSlice.js';


const Login = () => {
    const userToken = useSelector((state) => state.user.token);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    // Redirect user if already logged in
    useEffect(() => {
        if (userToken) {
            const redirectUrl = searchParams.get('url') || '/';
            // console.log(redirectUrl);
            navigate(redirectUrl);
        }
    }, [userToken, navigate]);
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
    // Function to handle access token received from GoogleButton
    const handleAccessToken = async (accessToken) => {
        // You can perform further actions with the access token here
        // console.log('Received access token:', accessToken);
        try {
            // Send the access token to the backend
            const response = await axios.post(API_ROUTES.GoogleLogin, {token: accessToken});
            handleUserData(response.data.token);
            // console.log('Token sent to backend:', response.data);
            const redirectUrl = searchParams.get('url') || '/';
            // console.log(redirectUrl);
            navigate(redirectUrl);
        } catch (error) {
            // console.error('Error sending token to backend:', error);
        }
        // console.log(Token);
    };


    return (
        <div className="fixed left-0 top-0 size-full"
            data-testid="login-page"
        >
            <div className="fixed left-0 top-0 size-full">
                <div
                    style={{float: 'left', height: '100%', width: '10%'}}
                >
                    <img
                        src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
                        alt="React Logo"
                        style={{width: '100%', height: '100%'}}
                        data-testid="login-logo"

                    />
                </div>
                <div
                    style={{float: 'right', height: '100%', width: '87%'}}
                    data-testid="login-container"
                >
                    <div style={{marginBottom: '95px'}} />{' '}
                    {/* Spacer above Heading */}
                    <Heading />
                    <div style={{marginBottom: '5px'}} />{' '}
                    {/* Spacer below Heading */}
                    <UserAgreement />
                    <div style={{marginBottom: '50px'}} />{' '}
                    {/* Spacer between components */}
                    <div style={{marginBottom: '20px'}} />{' '}
                    {/* Spacer between components */}
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <GoogleButton onAccessToken={handleAccessToken} />
                        <div style={{marginBottom: '60px'}} />{' '}
                        {/* Spacer between components */}
                        <Divider length={210} />
                        <LoginForm />
                        <div style={{marginBottom: '1px'}} />{' '}
                        {/* Spacer between components */}
                        <Forgot />
                        <div style={{marginBottom: '10px'}} />{' '}
                        {/* Spacer between components */}
                        <NewMember />
                    </div>
                </div>
            </div>
        </div>
    );
};

export {Login};
