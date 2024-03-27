import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const UsernameInputField = ({placeholder, id, showError, errorMessage, onChange}) => {
    const [isActive, setIsActive] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleFocus = () => setIsActive(true);
    const handleBlur = () => setIsActive(onChange !== '');

    const handleValidation = (value) => {
        const isValidLength = value.length >= 3 && value.length <= 20;
        setIsValid(isValidLength);
    };

    const handleChange = (e) => {
        const value = e.target.value;
        onChange(value);
        handleValidation(value);
    };

    const styles = {
        container: {
            position: 'relative',
            padding: '5px 0',
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
            top: isActive ? '10px' : '18px',
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
            top: '50%',
            transform: 'translateY(-50%)',
            right: '285px',
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
                id={id}
            />
            <label style={styles.placeholder}>{placeholder}</label>
            <div style={styles.dot}></div>
            <div style={showError ? styles.errorIcon : styles.checkIcon}>{showError ? '!' : '✓'}</div>
            {showError && <div style={styles.errorMessage}>{errorMessage}</div>}
        </div>
    );
};

UsernameInputField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    showError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const EmailInputField = ({placeholder, showError, errorMessage, onChange}) => {
    const [isActive, setIsActive] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const handleFocus = () => setIsActive(true);
    const handleBlur = () => setIsActive(onChange !== '');

    const handleValidation = (value) => {
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
            padding: '10px 0',
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
            top: isActive ? '20px' : '25px',
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
            right: '255px',
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

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);

    const handleLogin = () => {
        if (!username || !email) {
            setShowUsernameError(!username);
            setShowEmailError(!email);
        } else if (username.length >= 3 && username.length <= 20 && /\S+@\S+\.\S+/.test(email)) {
            alert('Sending you an email link');
        } else {
            setShowUsernameError(username.length > 0 && (username.length < 3 || username.length > 20));
            setShowEmailError(!/\S+@\S+\.\S+/.test(email));
        }
    };

    const handleUsernameChange = (value) => {
        setUsername(value);
        setShowUsernameError(value.length > 0 && (value.length < 3 || value.length > 20));
    };

    const handleEmailChange = (value) => {
        setEmail(value);
        setShowEmailError(!/\S+@\S+\.\S+/.test(value));
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    return (
        <div style={containerStyle}>
            <UsernameInputField
                placeholder="Username"
                id="username"
                showError={showUsernameError}
                errorMessage={'Username must be between 3 and 20 characters'}
                onChange={handleUsernameChange}
            />
            <EmailInputField
                placeholder="EMAIL ADDRESS"
                showError={showEmailError}
                errorMessage={'Please enter a valid email'}
                onChange={handleEmailChange}
            />
            <div style={{marginBottom: '15px'}} />
            <Button
                type="submit"
                variant="contained"
                onClick={handleLogin}
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
            >
                RESET PASSWORD
            </Button>
        </div>
    );
};

export default LoginForm;
