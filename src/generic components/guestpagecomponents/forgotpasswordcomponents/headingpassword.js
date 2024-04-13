
import React from 'react';
import {forgotPasswordClasses} from './forgotpassword.styles';
/**
 * @return {JSX.Element} Heading for password reset page
 */
function Headingpassword() {
    return (
        <h1 className={forgotPasswordClasses.heading}
            style={{fontFamily: '"IBM Plex Sans", sans-serif'}}
        >
      Reset your password
        </h1>
    );
}
export {Headingpassword};
