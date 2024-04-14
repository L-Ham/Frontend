
import React, {useState} from 'react';

import Button from '@mui/material/Button';
import {axiosInstance as axios} from '../../requests/axios.js';
import {API_ROUTES} from '../../requests/routes.js';
import {useDispatch} from 'react-redux';
import {login, selfInfo} from '../../store/userSlice.js';
import {Passwordinput} from '../../pages/registration_pages/passwordresetcomponents/passwordinput.js';
import {Usernameinput} from '../../pages/registration_pages/passwordresetcomponents/usernameinput.js';


const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showInvalidCredentials, setShowInvalidCredentials] = useState(false);
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
                console.error('Error retrieving user info:', error);
            }
        }
    }
    /**
     * Handles the login process
     */
    async function handleLogin() {
        try {
            const response = await axios.post(API_ROUTES.login, {
                userName: username,
                password: password,
            });
            console.log(response);
            handleUserData(response.data.token);
        } catch (e) {
            console.log(e);
            setShowInvalidCredentials(true);
            console.log(showInvalidCredentials);
        }
    }

    const handleUsernameChange = (username) => {
        setUsername(username);
    };

    const handlePasswordChange = (password) => {
        setPassword(password);
    };


    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    return (
        <div style={containerStyle}

            data-testid="loginform200"
        >
            <Usernameinput onUsernameChange={handleUsernameChange}
                width="280px" showInvalidCredentials={showInvalidCredentials} />
            <Passwordinput onPasswordChange={handlePasswordChange}
                width="280px" showInvalidCredentials={showInvalidCredentials} labelText="PASSWORD"/>
            <div style={{marginBottom: '15px'}} />
            <Button
                type="submit"
                variant="contained"
                onClick={handleLogin}
                role="button"
                sx={{
                    'backgroundColor': '#1976d2',
                    'fontFamily': '"IBM Plex Sans", sans-serif',
                    'fontSize': '14px',
                    'fontWeight': 600,
                    'width': '100%',
                    'maxWidth': '275px',
                    'mb': '15px',
                    '&:hover': {
                        backgroundColor: '#0095ff',
                    },
                }}
                data-testid="loginbutton50"
            >
     LOG IN
            </Button>

        </div>
    );
};

export default LoginForm;
