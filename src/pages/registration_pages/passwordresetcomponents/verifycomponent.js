
import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {Passwordinput} from './passwordinput';
// import {Emailinput} from './emailinput';
// import {Usernameinput} from './usernameinput';
/**
 *
 * @return {JSX.Element} Password input field
 */
function Verify({onPasswordChange2}) {
    const [password2, setPassword2] = useState('');
    const [password, setPassword] = useState('');

    let passwordBorderColor2 = '#e2e2e1'; // Default border color
    if ((password2.length < 8 && password2.length !== 0) || (password2!=password && password2.length !== 0) ) {
        passwordBorderColor2 = '#ea0027'; // Red border color when password is less than 8 characters
    } else if (password2.length >= 8) {
        passwordBorderColor2 = '#1976d2'; // Blue border color when password is 8 or more characters
    }
    const handlePasswordChange = (password) => {
        // Here you can access the password data

        // You can also perform any other operations you need with the password data
        setPassword(password);
    };


    const imageStyle = {
        position: 'absolute',
        zIndex: 1,
        right: '14px',
        top: '18px',
        height: '10px',
        width: '12px',
    };
    const checkImage = 'https://www.redditstatic.com/accountmanager/d489caa9704588f7b7e1d7e1ea7b38b8.svg';


    let passwordUrl2 = checkImage;
    const exclamImage = 'https://www.redditstatic.com/accountmanager/90a416eeb64d4d6ecd46c53d4ee11975.svg';
    const inpClassPassword = `inputAnimation pointer-events-none absolute left-3 top-3.5 inline-block origin-[0_50%] 
    align-middle text-[10px] font-semibold uppercase leading-[23px] tracking-[0.5px] text-[#a5a4a4] 
    transition-all duration-[0.2s] ease-[ease-in-out]`;
    const animDot = `after:ml-[7px] after:inline-block
    after:align-top after:text-xl after:font-medium after:leading-6
    after:text-[#24a0ed] after:content-['•']`;
    const fieldStylesPassword = `mt-6 relative m-0 w-[350px] border-[none] p-0`;
    const [isFocusPassword2, setIsFocusPassword2] = React.useState(false);
    const [mouseOverPassword2, setMouseOverPassword2] = React.useState(false);
    const [showInvalidCredentials, setShowInvalidCredentials] = useState(false);

    const [isVisiblePassword2, setIsVisiblePassword2] = useState(false);
    const handleInputChangePassword2 = (event) => {
        setPassword2(event.target.value);
        const newPassword = event.target.value;
        setPassword2(newPassword);
        const passwordMatch = newPassword === password;
        onPasswordChange2(newPassword, passwordMatch); // Pass password2 and passwordMatch to parent component
    };
    let toPutPassword2 = inpClassPassword;
    if (isFocusPassword2 || mouseOverPassword2 || password2.length!=0 ) {
        toPutPassword2 = `${inpClassPassword}`;
    } else {
        toPutPassword2 = `${inpClassPassword} ${animDot}`;
    }
    if (((password2.length < 8) ||password2!=password)) {
        passwordUrl2 = exclamImage;
    } else {
        passwordUrl2 = checkImage;
    }

    if ((password2.length != 0)) {
        if (isVisiblePassword2 == false) {
            setIsVisiblePassword2(true);
        }
    } else {
        if (isVisiblePassword2 == true) {
            setIsVisiblePassword2(false);
            setShowInvalidCredentials(false);
        }
    }
    Verify.propTypes = {
        onPasswordChange2: PropTypes.func.isRequired,
    };
    return (
        <>
            <Passwordinput onPasswordChange={handlePasswordChange} width="350px"
                showInvalidCredentials={showInvalidCredentials} labelText="NEW PASSWORD"/>


            <fieldset className={fieldStylesPassword} id="registerPasswordField2">
                <input
                    id="regPassword-prevent2"
                    className="h-12 w-full appearance-none rounded
                                        border border-solid  bg-[#fcfcfb] px-3 pb-2.5
                                        pr-9 pt-[22px] transition-all duration-[0.2s]
                                         ease-[ease-in-out] hover:bg-[#FFFFFF]"
                    data-hidden=""
                    type="password"
                    name="password-prevent"
                    data-empty="true"
                    value={password2}
                    onChange={handleInputChangePassword2}
                    onFocus={() => setIsFocusPassword2(true)}
                    onBlur={() => {
                        setIsFocusPassword2(false); setMouseOverPassword2(false);
                    }}
                    onMouseOver={() => !isFocusPassword2 && setMouseOverPassword2(true)}
                    onMouseLeave={() => !isFocusPassword2 && setMouseOverPassword2(false)}
                    style={{borderColor: passwordBorderColor2, outline: 'none'}}
                    data-testid="regPassword81"
                />
                {isVisiblePassword2 && <img src={passwordUrl2} alt="Image" style={imageStyle} />}
                <label className={toPutPassword2}
                    data-empty={isFocusPassword2 || mouseOverPassword2 ||password2.length!=0 ? 'false' : 'true'}
                    htmlFor="regPassword"
                    data-testid="regPasswordLabel201"
                >Verify password</label>

                <div className="mt-1 max-h-[1000px] text-xs font-medium leading-4
                        text-[#ea0027] opacity-100 transition-all
                        duration-[0.2s] ease-[ease-in-out]" data-for="password"
                data-testid="passwordmessage501"
                >
                    {((password2.length < 8) && (password2.length != 0) && (password.length == 0)) && (
                        <>Password must be at least 8 characters long</>
                    )}
                    {((password.length != 0) && (password2.length != 0)) && (password2!=password) && (
                        <>Password must match</>
                    )}
                </div>
            </fieldset>
        </>

    );
}
export {Verify};
