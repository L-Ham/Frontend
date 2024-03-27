// Remove the unused import statement for React
import React from 'react';
/**
 *
 * @return {JSX.Element} Forgot
 */
function Forgot() {
    return (
        <p
            style={{
                textAlign: 'left',

                color: 'black',
                fontFamily: 'Noto Sans, sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
            }}
        >
      Forgot your{' '}
            <a
                target="_blank"
                href="https://www.reddit.com/username/"
                style={{color: '#0079d3', fontWeight: '400'}} rel="noreferrer"
            >
        username
            </a>{' '}
      or{' '}
            <a
                target="_blank"
                href="https://www.reddit.com/password/"
                style={{color: '#0079d3', fontWeight: '400'}} rel="noreferrer"
            >
        password
            </a>
      ?
        </p>
    );
}
export {Forgot};
