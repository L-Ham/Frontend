import React from 'react';
// Remove the unused import statement for React
/**
 * @return {JSX.Element} forgot username component
 */
function ForgotUsername() {
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
            <a
                target="_blank"
                href="https://accounts.reddit.com/username"
                style={{color: '#0088de', fontWeight: '700'}} rel="noreferrer"
            >
    FORGOT USERNAME?
            </a>{' '}
        </p>
    );
}
export {ForgotUsername};