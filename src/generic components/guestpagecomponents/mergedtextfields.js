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

    // Styles
    const styles = {
        container: {
            position: 'relative',
            padding: '5px 0', // Adjusted padding to bring fields closer together
            width: '100%',
            maxWidth: '275px', // Set max-width to 275px
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
            right: '185px',
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

const PasswordInputField = ({placeholder, id, showError, errorMessage, onChange}) => {
    const [isActive, setIsActive] = useState(false);

    const handleFocus = () => setIsActive(true);
    const handleBlur = () => setIsActive(onChange !== '');

    // Styles
    const styles = {
        container: {
            position: 'relative',
            padding: '5px 0', // Adjusted padding to bring fields closer together
            width: '100%',
            maxWidth: '275px', // Set max-width to 275px
            textAlign: 'left',
        },
        input: {
            width: '100%',
            border: showError ? '1px solid red' : '1px solid #ccc',
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
            right: '185px',
            width: '6px',
            height: '6px',
            background: '#24a0ed',
            borderRadius: '50%',
            transition: 'opacity 0.3s',
            opacity: isActive ? 0 : 1,
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
                type="password"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={(e) => onChange(e.target.value)}
                required
                style={styles.input}
                id={id}
            />
            <label style={styles.placeholder}>{placeholder}</label>
            <div style={styles.dot}></div>
            <div
                style={styles.errorIcon}>{showError && '!'}</div>
            {showError && <div style={styles.errorMessage}>{errorMessage}</div>}
        </div>
    );
};

PasswordInputField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    showError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showInvalidCredentials, setShowInvalidCredentials] = useState(false);

    const handleLogin = () => {
        if (username === 'john' && password === '123') {
            alert('Logging in');
        } else {
            setShowInvalidCredentials(true);
            setShowUsernameError(true);
            setShowPasswordError(true);
        }
    };

    const handleUsernameChange = (value) => {
        setUsername(value);
        setShowUsernameError(value.length > 0 && (value.length < 3 || value.length > 20));
    };

    const handlePasswordChange = (value) => {
        setPassword(value);
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
                showError={showInvalidCredentials || showUsernameError}
                errorMessage={
                    showInvalidCredentials ?
                        'Incorrect username or password' :
                        'Username must be between 3 and 20 characters'
                }
                onChange={handleUsernameChange}
            />
            <PasswordInputField
                placeholder="Password"
                id="password"
                showError={showInvalidCredentials || showPasswordError}
                errorMessage={
                    showInvalidCredentials ?
                        'Incorrect username or password' :
                        'Password must be between 3 and 20 characters'
                }
                onChange={handlePasswordChange}
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
                    'maxWidth': '275px',
                    'mb': '15px',
                    '&:hover': {
                        backgroundColor: '#0095ff',
                    },
                }}
            >
     LOG IN
            </Button>

        </div>
    );
};

export default LoginForm;
