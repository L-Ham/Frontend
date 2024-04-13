// Remove the unused import statement for React

import React from 'react';
/**
 *
 * @return {JSX.Element} User message
 */
function Usermessage() {
    return (
        <div
            style={{
                textAlign: 'left',

                color: 'black',
                fontFamily: '"IBM Plex Sans", sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                lineHeight: '21px',
            }}
            data-testid="usermessage5"
        >
            {' '}
            <div>
        Tell us the email address associated with your Reddit
                <br />
        account, and we’ll send you an email with your username.{' '}
            </div>{' '}
        </div>
    );
}
export {Usermessage};
