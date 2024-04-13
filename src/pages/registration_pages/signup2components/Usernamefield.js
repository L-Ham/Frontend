import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
/**
 *
 * @return {JSX.Element} Password input field
 */
function Usernamefield({onusernameChange, suggestedUsername}) {
    const [username, setUsername] = useState(suggestedUsername);
    const checkImage = 'https://www.redditstatic.com/accountmanager/d489caa9704588f7b7e1d7e1ea7b38b8.svg';

    let imageUrl = checkImage;
    const exclamImage = 'https://www.redditstatic.com/accountmanager/90a416eeb64d4d6ecd46c53d4ee11975.svg';
    const imageStyle = {
        position: 'absolute',
        zIndex: 1,
        right: '14px',
        top: '18px',
        height: '10px',
        width: '12px',
    };
    const animDot = `after:ml-[7px] after:inline-block
    after:align-top after:text-xl after:font-medium after:leading-6
    after:text-[#24a0ed] after:content-['•']`;
    const fieldSetStylesRed = `relative m-0 w-[350px]  p-0 border-red border-solid`;
    const inpClass = `inputAnimation pointer-events-none absolute left-3 top-3.5 inline-block origin-[0_50%] 
    align-middle text-[10px] font-semibold uppercase leading-[23px] tracking-[0.5px] text-[#a5a4a4] 
    transition-all duration-[0.2s] ease-[ease-in-out]`;
    const [isFocus, setIsFocus] = React.useState(false);
    const [mouseOver, setMouseOver] = React.useState(false);
    const [isVisible, setIsVisible] = useState(false);
    Usernamefield.propTypes = {
        onusernameChange: PropTypes.func.isRequired,
        suggestedUsername: PropTypes.string,
    };
    const fieldSetStyles = `relative m-0 w-[350px] border-[none] p-0`;

    let fieldClass = fieldSetStyles;
    if ((username.length != 0)) {
        if (isVisible == false) {
            setIsVisible(true);
        }
    } else {
        if (isVisible == true) {
            setIsVisible(false);
        }
    }
    if (((username.length < 3 || username.length > 20))) {
        imageUrl = exclamImage;
        fieldClass = fieldSetStylesRed;
    } else {
        imageUrl = checkImage;
        fieldClass = fieldSetStyles;
    }
    let toPut = inpClass;
    if (isFocus || mouseOver || username.length!=0) {
        toPut = `${inpClass}`;
    } else {
        toPut = `${inpClass} ${animDot}`;
    }
    let usernameBorderColor = '#fcfcfb'; // Default border color
    if ((username.length < 3 || username.length > 20) && (username.length !== 0)) {
        usernameBorderColor = '#ea0027'; // Red border color when username is less than 3 or more than 20 characters
    } else if (username.length >= 3 && username.length <= 20) {
        usernameBorderColor= '#1976d2'; // Blue border color when username is between 3 and 20 characters
    }
    const handleInputChange = (event) => {
        setUsername(event.target.value);


        const newUsername = event.target.value;
        setUsername(newUsername);
        // Call the function passed from the parent with the new password
        onusernameChange(newUsername);
    };

    return (
        <fieldset className={fieldClass}>

            <input
                id="regUsername"
                className="h-12 w-full appearance-none rounded
                                        border border-solid  bg-[#fcfcfb] px-3
                                        pb-2.5 pr-9 pt-[22px] transition-all duration-[0.2s] ease-[ease-in-out]"


                type="text"
                name="username"
                data-empty="true"
                value={username} // Bind the input value to the state
                onChange={handleInputChange}
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                    setIsFocus(false); setMouseOver(false);
                }}
                onMouseOver={() => !isFocus && setMouseOver(true)}
                onMouseLeave={() => !isFocus && setMouseOver(false)}
                style={{borderColor: usernameBorderColor, outline: 'none'}}
                data-testid="username-input-tag"
            />
            {isVisible && <img src={imageUrl} alt="Image" style={imageStyle} />}
            <label className={toPut}
                htmlFor="regUsername"
                style={{fontFamily: '"IBM Plex Sans", sans-serif'}}
                data-empty={isFocus || mouseOver || username.length!=0 ? 'false' : 'true'}
                data-testid="username-label123"
            >
                {' '}Choose a Username{' '}
            </label>
            <div className="mt-1 max-h-[1000px] text-xs font-medium leading-4
                                     text-[#ea0027] opacity-100 transition-all duration-[0.2s]
                                      ease-[ease-in-out]" data-for="username"
            data-testid="username-error-message10"
            >
                {((username.length < 3 || username.length > 20) && (username.length != 0)) && (
                    <>Username must be between 3 and 20 characters</>
                )}
            </div>
        </fieldset>

    );
}
export {Usernamefield};
