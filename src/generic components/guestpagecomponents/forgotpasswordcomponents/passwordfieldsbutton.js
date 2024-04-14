
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import {Emailinput} from '../../../pages/registration_pages/passwordresetcomponents/emailinput';
import {Usernameinput} from '../../../pages/registration_pages/passwordresetcomponents/usernameinput';

import {axiosInstance as axios} from '../../../requests/axios';
import {API_ROUTES} from '../../../requests/routes';
// Remove the unused import statement for React


/**
 *
  @return {JSX.Element} reset
 */
function LoginForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [showEmailError, setShowEmailError] = useState(false);
    const [isclicked, setIsclicked] = useState(false);
    const [showfakeuser, setshowfakeuser] = useState(false);
    const [emptyusername, setEmptyusername] = useState(false);
    const [emptyemail, setEmptyemail] = useState(false);
    /**
     * Handles the login process.
     */
    async function handleLogin() {
        if (!username ) {
            setEmptyusername(true);
            console.log(emptyusername);
        } else {
            setEmptyusername(false);
        }
        if (!email) {
            setShowEmailError(false);
            setEmptyemail(true);
        } else {
            setEmptyemail(false);
        }

        if (username.length >= 3 && username.length <= 20 && /\S+@\S+\.\S+/.test(email)) {
            setIsclicked(true);
            console.log('Username:', username);
            console.log('Email:', email);
            try {
                const response = await axios.post(API_ROUTES.forgotpassword, {

                    email: email,
                });
                console.log(response);
                console.log('real user');
                setshowfakeuser(false);
            } catch (e) {
                console.log(e);
                console.log('fake user');
                setshowfakeuser(true);
                console.log(showfakeuser);
            }
        } else {
            setShowEmailError(!/\S+@\S+\.\S+/.test(email));
        }
    }

    /**
     *
     * @param {string} value
     * @return {void}
     */
    function handleUsernameChange(value) {
        setUsername(value);
        if (username) {
            setEmptyusername(false);
        }
    }
    /**
     *
     * @param {string} value
     * @return {void}
     */
    function handleEmailChange(value) {
        setEmail(value);
        setShowEmailError(!/\S+@\S+\.\S+/.test(value));
        if (email) {
            setEmptyemail(false);
        }
    }


    return (
        <div style={{width: '392px'}}>
            <Usernameinput onUsernameChange={handleUsernameChange}
                width="392px" showInvalidCredentials={false} showfakeaccount={showfakeuser}
                emptyusername={emptyusername} />
            <Emailinput onEmailChange={handleEmailChange}
                width="392px" showInvalidCredentials={showEmailError}
                labelText="EMAIL ADDRESS" emptyemail={emptyemail} />
            <div style={{marginBottom: '15px'}} />
            <Button
                type="submit"
                variant="contained"
                onClick={handleLogin}
                role="button"
                sx={{
                    'backgroundColor': '#1976d2',
                    'fontFamily': 'IBM Plex Sans, sans-serif',
                    'fontSize': '14px',
                    'fontWeight': 600,
                    'width': '100%',
                    'maxWidth': '175px',
                    'mb': '15px',
                    '&:hover': {
                        backgroundColor: '#0095ff',
                    },
                }}
                data-testid="resetpasswordbutton"
            >
                RESET PASSWORD
            </Button>
            <div className="ml-1.5 pt-0.5 align-top text-xs font-medium leading-5 text-[#24a0ed]"
                data-for="username" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}
                data-testid="resetpasswordmessage">
                {(isclicked &&(!showfakeuser)) && (
                    <>Thanks! If your Reddit username and email address match, you&apos;ll get<br/>
                     an email with a link to reset your password shortly.</>
                )}

            </div>
        </div>
    );
}

export default LoginForm;
