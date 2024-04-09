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
function Passwordmessage2() {
    return (
        <p
            style={{
                textAlign: 'left',

                color: 'black',
                fontFamily: '"Noto Sans", sans-serif',
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '21px',
            }}
        >
            <div>
            Choose a new password here, then log in to your account.

            </div>{' '}
        </p>
    );
}


export {Passwordmessage2};
