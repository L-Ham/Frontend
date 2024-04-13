
import React, {useState} from 'react';

import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {Emailinput} from '../../../pages/registration_pages/passwordresetcomponents/emailinput';


const EmailLoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [emptyemail, setEmptyemail] = useState(false);

    const handleContinue = () => {
        if (/\S+@\S+\.\S+/.test(email)) {
            navigate(`/register/continue?email=${encodeURIComponent(email)}`);
        }
        if (!email) {
            setEmptyemail(true);
        }
    };

    const handleEmailChange = (value) => {
        setEmail(value);
        if (email) {
            setEmptyemail(false);
        }
    };


    return (
        <div style={{width: '280px'}}>
            <Emailinput onEmailChange={handleEmailChange} labelText="EMAIL" emptyemail={emptyemail } />
            <div style={{marginBottom: '20px'}} />{' '}
            <Button
                variant="contained"
                onClick={handleContinue}
                sx={{
                    'backgroundColor': '#1976d2',
                    'fontFamily': 'IBM Plex Sans, sans-serif',
                    'fontSize': '14px',
                    'fontWeight': 600,
                    'width': '100%',
                    'maxWidth': '275px',
                    'mb': '15px',
                    '&:hover': {
                        backgroundColor: '#0095ff',
                    },
                }}
            >
                CONTINUE
            </Button>
        </div>
    );
};

export default EmailLoginForm;
