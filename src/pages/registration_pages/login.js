import React, {useState, useEffect} from 'react';
import {Heading} from '../.././generic components/guestpagecomponents/logincomponents/heading';
import {UserAgreement} from '../.././generic components/guestpagecomponents/logincomponents/useragreement';
import {Divider} from '../.././generic components/guestpagecomponents/divider';
import LoginForm from '../.././generic components/guestpagecomponents/mergedtextfields';
import {Forgot} from '../.././generic components/guestpagecomponents/logincomponents/forgot';
import {NewMember} from '../.././generic components/guestpagecomponents/logincomponents/newmember';
import {SignUpWithGoogleButton} from '../.././generic components/guestpagecomponents/signupcomponents/google';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {axiosInstance as axios} from '../.././requests/axios';
import {API_ROUTES} from '../../requests/routes';

const Login = () => {
    const user = useSelector((state) => state.user);
    const [Token, setToken] = useState('');
    const navigate = useNavigate();
    // Redirect user if already logged in
    useEffect(() => {
        if (user.token) {
            navigate('/');
        }
    }, [user, navigate]);

    // Function to handle access token received from SignUpWithGoogleButton
    const handleAccessToken = async (accessToken) => {
        setToken(accessToken);
        // You can perform further actions with the access token here
        console.log('Received access token:', accessToken);
        try {
            // Send the access token to the backend
            const response = await axios.post(API_ROUTES.GoogleLogin, {token: accessToken});
            console.log('Token sent to backend:', response.data);
            navigate('/');
        } catch (error) {
            console.error('Error sending token to backend:', error);
        }
        console.log(Token);
    };

    return (
        <div className="fixed left-0 top-0 size-full">
            <div className="fixed left-0 top-0 size-full">
                <div
                    style={{float: 'left', height: '100%', width: '10%'}}
                >
                    <img
                        src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
                        alt="React Logo"
                        style={{width: '100%', height: '100%'}}
                    />
                </div>
                <div
                    style={{float: 'right', height: '100%', width: '87%'}}
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
                        <SignUpWithGoogleButton onAccessToken={handleAccessToken} />
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
