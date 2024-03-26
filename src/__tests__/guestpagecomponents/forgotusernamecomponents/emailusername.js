import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const EmailInputField = ({placeholder, showError, errorMessage, onChange}) => {
    const [isActive, setIsActive] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleFocus = () => setIsActive(true);
    const handleBlur = () => setIsActive(onChange !== '');

    const handleValidation = (value) => {
        // Basic email format validation
        const isValidEmail = /\S+@\S+\.\S+/.test(value);
        setIsValid(isValidEmail);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        onChange(value);
        handleValidation(value);
    };

    const styles = {
        container: {
            position: 'relative',
            padding: '25px 0',
            width: '100%',
            maxWidth: '370px',
            textAlign: 'left',
        },
        input: {
            width: '100%',
            border: showError ? '1px solid red' : (isValid ? '1px solid #24a0ed' : '1px solid #ccc'),
            borderRadius: '5px',
            background: isActive ? '#fff' : '#fcfcfb',
            padding: '10px',
            outline: 'none',
            transition: 'background-color 0.3s, border-color 0.3s',
            boxSizing: 'border-box',
            position: 'relative',
        },
        placeholder: {
            position: 'absolute',
            top: isActive ? '33px' : '41px',
            left: isActive ? '10px' : '10px',
            transition: 'top 0.3s, left 0.3s',
            color: isActive ? '#999' : '#999',
            fontSize: isActive ? '8px' : '12px',
            pointerEvents: 'none',
            paddingRight: '20px',
            maxWidth: 'calc(100% - 20px)',
        },
        dot: {
            position: 'absolute',
            top: '55%',
            transform: 'translateY(-50%)',
            right: '260px',
            width: '6px',
            height: '6px',
            background: '#24a0ed',
            borderRadius: '50%',
            transition: 'opacity 0.3s',
            opacity: isActive ? 0 : 1,
        },
        checkIcon: {
            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            right: '8px',
            color: '#24a0ed',
            opacity: isValid && isActive ? 1 : 0,
            transition: 'opacity 0.3s',
            fontSize: '16px',
        },
        errorIcon: {
            position: 'absolute',
            top: '35%',
            transform: 'translateY(-50%)',
            right: '8px',
            color: 'red',
            opacity: showError ? 1 : 0,
            transition: 'opacity 0.3s',
            fontSize: '16px',
        },
        errorMessage: {
            color: 'red',
            fontSize: '12px',
            marginTop: '5px',
        },
    };

    return (
        <div style={styles.container}>
            <input
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                style={styles.input}
            />
            <label style={styles.placeholder}>{placeholder}</label>
            <div style={styles.dot}></div>
            <div style={showError ? styles.errorIcon : styles.checkIcon}>{showError ? '!' : '✓'}</div>
            {showError && <div style={styles.errorMessage}>{errorMessage}</div>}
        </div>
    );
};

EmailInputField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    showError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const ForgotLoginForm = () => {
    const [email, setEmail] = useState('');
    const [showEmailError, setShowEmailError] = useState(false);
    const [clickedContinue, setClickedContinue] = useState(false);

    const handleContinue = () => {
        if (/\S+@\S+\.\S+/.test(email)) {
            alert('Sending you an email with your username');
        } else {
            setShowEmailError(true);
            setClickedContinue(true);
        }
    };

    const handleEmailChange = (value) => {
        setEmail(value);
        setShowEmailError(!/\S+@\S+\.\S+/.test(value) && !clickedContinue);
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    return (
        <div style={containerStyle}>
            <EmailInputField
                placeholder="EMAIL ADDRESS"
                showError={showEmailError}
                errorMessage={clickedContinue ? 'That email is invalid' : 'Please fix your email to continue'}
                onChange={handleEmailChange}
            />
            <Button
                variant="contained"
                onClick={handleContinue}
                sx={{
                    'backgroundColor': '#1976d2',
                    'fontFamily': 'IBMPlexSans, sans-serif',
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
        </div>
    );
};

export default ForgotLoginForm;
