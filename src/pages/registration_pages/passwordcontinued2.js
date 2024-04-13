

import {useState, useEffect} from 'react';
import React from 'react';
import {RedditLogo} from '../.././generic components/guestpagecomponents/redditlogo';
import Button from '@mui/material/Button';

import {Headingpassword} from '../.././generic components/guestpagecomponents/forgotpasswordcomponents/headingpassword';
import {Passwordmessage2}
    from '../.././generic components/guestpagecomponents/forgotpasswordcomponents/passwordmessage2';

import {Verify} from './passwordresetcomponents/verifycomponent';
import {Links} from './passwordresetcomponents/otherlinks';
import {Checkbox} from './passwordresetcomponents/checkbox';
import {axiosInstance as axios} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
import {useSearchParams, useNavigate} from 'react-router-dom';

/**
 *
 * @return {JSX.Element} JSX Element
 */
function ForgotPassword2() {
    const [passwordfinal, setPasswordfinal] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (!searchParams.get('token')) {
            navigate('/login');
        }
    }, [searchParams, navigate]);
    /**
     * Handles the login process.
     *
     * @return {void}
     */
    async function handleUpdatePwd() {
        if (passwordfinal.length >= 8 && passwordMatch) {
            try {
                const response = await axios.patch(API_ROUTES.updatepassword,
                    {
                        password: passwordfinal,
                        passwordConfirm: passwordfinal,
                    },
                    {
                        headers: {Authorization: `Bearer ${searchParams.get('token')}`},
                    },
                );
                console.log(response);
                console.log('password reset!');
                navigate('/login');
            } catch (e) {
                console.log(e);
                console.log('Failed');
            }
        } else {
            alert('Failed');
        }
    }


    const handlePasswordChangefinal = (newPassword, newMatch) => {
        setPasswordfinal(newPassword);
        setPasswordMatch(newMatch);
    };

    return (
        <div className="fixed left-0 top-0 size-full"
            data-testid="forgotpasswordform12"
        >
            <div className="fixed left-0 top-0 size-full">
                <div className="float-left h-full w-[10%]">
                    <img
                        src="https://www.redditstatic.com/accountmanager/bbb584033aa89e39bad69436c504c9bd.png"
                        alt="React Logo"
                        style={{width: '100%', height: '100%'}}
                        data-testid="redditpic19"
                    />
                </div>
                <div className="float-right h-full w-[87%]">
                    <div style={{marginBottom: '130px'}} /> {/* Spacer above Heading */}
                    <RedditLogo />
                    <div style={{marginBottom: '50px', display: 'inline-block'}} />{' '}
                    <Headingpassword />
                    <Passwordmessage2 />
                    <div style={{marginBottom: '5px'}} />

                    <Verify onPasswordChange2={handlePasswordChangefinal} />


                    <div style={{marginBottom: '20px'}} />
                    <Checkbox />
                    <div style={{marginBottom: '20px'}} />

                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={handleUpdatePwd}
                            role="button"
                            sx={{
                                'backgroundColor': '#1976d2',
                                'fontFamily': 'IBMPlexSans, sans-serif',
                                'fontSize': '14px',
                                'fontWeight': 600,
                                'width': '100%',
                                'maxWidth': '175px',
                                'mb': '15px',
                                '&:hover': {
                                    backgroundColor: '#0095ff',
                                },
                            }}
                            data-testid="zehe2t"
                        >
                SET PASSWORD
                        </Button>


                    </div>
                    <Links />
                </div>
            </div>
        </div>
    );
}

export {ForgotPassword2};
