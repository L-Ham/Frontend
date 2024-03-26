// Remove the unused import statement for React

import React from 'react';
/**
 *
 * @return {JSX.Element} Password message
 */
/**
 * Renders a paragraph with a message for resetting the password.
 * @return {JSX.Element} The rendered paragraph element.
 */
function Passwordmessage() {
    return (
        <p
            style={{
                textAlign: 'left',

                color: 'black',
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '21px',
            }}
        >
            <div>
        Tell us the username and email address associated with
                <br />
        your Reddit account, and we’ll send you an email with a link
                <br />
        to reset your password.
            </div>{' '}
        </p>
    );
}


export {Passwordmessage};
