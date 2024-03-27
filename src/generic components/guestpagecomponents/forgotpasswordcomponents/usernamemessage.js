// Remove the unused import statement for React

import React from 'react';
/**
 *
 * @return {JSX.Element} User message
 */
function Usermessage() {
    return (
        <p
            style={{
                textAlign: 'left',

                color: 'black',
                fontFamily: 'IBMPlexSans, sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '21px',
            }}
        >
            {' '}
            <div>
        Tell us the email address associated with your Reddit
                <br />
        account, and we’ll send you an email with your username.{' '}
            </div>{' '}
        </p>
    );
}
export {Usermessage};
