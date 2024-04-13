
import React, {useState} from 'react';

import Button from '@mui/material/Button';

import {Emailinput} from '../../../pages/registration_pages/passwordresetcomponents/emailinput';
import PropTypes from 'prop-types';

const EmailLoginForm = ({onFormSubmit}) => {
    const [email, setEmail] = useState('');
    const [emptyemail, setEmptyemail] = useState(false);
    const [validEmail, setValidEmail] = useState(false);

    const handleContinue = () => {
        const isValidEmail = /\S+@\S+\.\S+/.test(email);
        setValidEmail(isValidEmail); // Update state with the validation result
        onFormSubmit(isValidEmail, email); // Pass the updated state value to onFormSubmit
        console.log(validEmail);
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
        <div style={{width: '280px'}}
            data-testid="emailloginform2"
        >
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
                data-testid="resetpasswordbutton20"
            >
                CONTINUE
            </Button>
        </div>
    );
};
EmailLoginForm.propTypes = {
    onFormSubmit: PropTypes.func, // Ensure onFormSubmit is a function and required
};

export default EmailLoginForm;
