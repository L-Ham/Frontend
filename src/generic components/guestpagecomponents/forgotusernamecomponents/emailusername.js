
import React, {useState} from 'react';

import Button from '@mui/material/Button';
import {axiosInstance as axios} from '../../../requests/axios';
import {API_ROUTES} from '../../../requests/routes';
import {Emailinput} from '../../../pages/registration_pages/passwordresetcomponents/emailinput';


const ForgotLoginForm = () => {
    const [email, setEmail] = useState('');


    const [isclicked, setisclicked] = useState(false);
    const [emptyemail, setEmptyemail] = useState(false);
    /**
     * Handle continue button click
     * Validate email
     *
     */
    async function handleContinue() {
        if (/\S+@\S+\.\S+/.test(email)) {
            try {
                console.log(email);
                const response = await axios.post(API_ROUTES.forgotusername, {
                    email: email,

                });
                console.log(response);

                setisclicked(true);
            } catch (error) {
                if (error.response) {
                    console.log(error.response.message);
                    setisclicked(true);
                }
            }
        }
        if (!email) {
            setEmptyemail(true);
        }
    }

    const handleEmailChange = (value) => {
        setEmail(value);
        if (email) {
            setEmptyemail(false);
        }
    };


    return (
        <div style={{width: '392px'}} >
            <Emailinput onEmailChange={handleEmailChange} width="392px"
                labelText="EMAIL ADDRESS" emptyemail={emptyemail} />
            <div style={{marginBottom: '20px'}} />{' '}
            <Button
                variant="contained"
                onClick={handleContinue}
                sx={{
                    'backgroundColor': '#1976d2',
                    'fontFamily': '"IBM Plex Sans", sans-serif',
                    'fontSize': '14px',
                    'fontWeight': 600,
                    'width': '100%', // Adjusting button width
                    'maxWidth': '170px',
                    'mb': '15px',
                    '&:hover': {
                        backgroundColor: '#0095ff',
                    },
                }}
            >
                EMAIL ME
            </Button>


            <div className="ml-1.5 pt-0.5 align-top text-xs font-medium leading-5 text-[#24a0ed]" data-for="username"
                style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
                {(isclicked) && (
                    <>Thanks! If there are any Reddit accounts associated with that email <br/>
                     address, you&apos;ll get an email with your username(s) shortly.</>
                )}

            </div>


        </div>
    );
};

export default ForgotLoginForm;
