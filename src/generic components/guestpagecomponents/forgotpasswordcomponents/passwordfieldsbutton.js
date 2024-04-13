/*eslint-disable */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { forgotPasswordClasses } from './forgotpassword.styles';
import { Emailinput } from '../../../pages/registration_pages/passwordresetcomponents/emailinput';
import { Usernameinput } from '../../../pages/registration_pages/passwordresetcomponents/usernameinput';
import { Email } from '@mui/icons-material';
// Remove the unused import statement for React


/**
 *
  @return {JSX.Element} Heading for password reset page
 */

function UsernameInputField({placeholder, id, showError, errorMessage, onChange}) {
    const [isActive, setIsActive] = useState(false);
    const [isValid, setIsValid] = useState(false);

    function handleFocus() {
        setIsActive(true);
    }

    function handleBlur() {
        setIsActive(onChange !== '');
    }

    function handleValidation(value) {
        const isValidLength = value.length >= 3 && value.length <= 20;
        setIsValid(isValidLength);
    }

    function handleChange(e) {
        const value = e.target.value;
        onChange(value);
        handleValidation(value);
    }

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
        <div className={forgotPasswordClasses.container}>
            <input
                className={forgotPasswordClasses.input}
                style={{
                    background: isActive ? '#fff' : '#fcfcfb',
                    outline: 'none' ,
                    border: showError ? '1px solid red' : (isValid ? '1px solid #24a0ed' : '1px solid #ccc'),
                }}
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                id={id}
            />

            <label className={placeholder}
            style={{
                position: 'absolute',
                top: isActive ? '10px' : '18px',
                left: isActive ? '10px' : '10px',
            color: isActive ? '#999' : '#999',
            fontSize: isActive ? '8px' : '12px',
            }}
            >
                {placeholder}
                </label>
            <div style={styles.dot}></div>
            <div style={showError ? styles.errorIcon : styles.checkIcon}>{showError ? '!' : '✓'}</div>
            {showError && <div style={styles.errorMessage}>{errorMessage}</div>}
        </div>
    );
}

UsernameInputField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    showError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

function EmailInputField({placeholder, showError, errorMessage, onChange}) {
    const [isActive, setIsActive] = useState(false);
    const [isValid, setIsValid] = useState(false);

    function handleFocus() {
        setIsActive(true);
    }

    function handleBlur() {
        setIsActive(onChange !== '');
    }

    function handleValidation(value) {
        const isValidEmail = /\S+@\S+\.\S+/.test(value);
        setIsValid(isValidEmail);
    }

    function handleChange(e) {
        const value = e.target.value;
        onChange(value);
        handleValidation(value);
    }

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
        <div className={forgotPasswordClasses.container}>
            <input className={forgotPasswordClasses.input}
                type="text"
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
                required
                style={{
                    background: isActive ? '#fff' : '#fcfcfb',
                    outline: 'none' ,
                    border: showError ? '1px solid red' : (isValid ? '1px solid #24a0ed' : '1px solid #ccc'),
                }}
            />
            <label className={forgotPasswordClasses.placeholder}
                 style={{color: isActive ? '#999' : '#999',
                 fontSize: isActive ? '8px' : '12px',
                 top: isActive ? '10px' : '20px',
                 left: isActive ? '10px' : '10px',
                }}
            >{placeholder}</label>
            <div style={styles.dot}></div>
            <div style={showError ? styles.errorIcon : styles.checkIcon}>{showError ? '!' : '✓'}</div>
            {showError && <div style={styles.errorMessage}>{errorMessage}</div>}
        </div>
    );
}

EmailInputField.propTypes = {
    placeholder: PropTypes.string.isRequired,
    showError: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

function LoginForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [showUsernameError, setShowUsernameError] = useState(false);
    const [showEmailError, setShowEmailError] = useState(false);
    const[isclicked, setIsclicked] = useState(false);

    function handleLogin() {
        if (!username || !email) {
            setShowUsernameError(!username);
            setShowEmailError(!email);
        } else if (username.length >= 3 && username.length <= 20 && /\S+@\S+\.\S+/.test(email)) {
            setIsclicked(true);
        } else {
            setShowUsernameError(username.length > 0 && (username.length < 3 || username.length > 20));
            setShowEmailError(!/\S+@\S+\.\S+/.test(email));
        }
    }

    function handleUsernameChange(value) {
        setUsername(value);
        setShowUsernameError(value.length > 0 && (value.length < 3 || value.length > 20));
    }

    function handleEmailChange(value) {
        setEmail(value);
        setShowEmailError(!/\S+@\S+\.\S+/.test(value));
    }

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    return (
        <div style={{width:'392px'}}>
           <Usernameinput onUsernameChange={handleUsernameChange}   width="392px" showInvalidCredentials={showUsernameError} />
           <Emailinput onEmailChange={handleEmailChange} width="392px" showInvalidCredentials={showEmailError} labelText="EMAIL ADDRESS" />
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
            >
                RESET PASSWORD
            </Button>
            <div className="ml-1.5 pt-0.5 align-top text-xs font-medium leading-5 text-[#24a0ed]"
             data-for="username" style={{fontFamily: '"IBM Plex Sans", sans-serif'}}>
                {(isclicked) && (
                    <>Thanks! If your Reddit username and email address match, you&apos;ll get<br/>
                     an email with a link to reset your password shortly.</>
                )}

            </div>
        </div>
    );
}

export default LoginForm;
