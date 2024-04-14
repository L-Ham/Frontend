// Remove the unused import statement for React
import React from 'react';
/**
 *
 * @return {JSX.Element} User Agreement
 */
function UserAgreement() {
    return (
        <p
            style={{
                textAlign: 'left',

                color: 'black',
                fontFamily: '"Noto Sans", sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
            }}
            data-testid="user-agreement"
        >
      By continuing, you agree to our{' '}
            <a
                target="_blank"
                href="https://www.redditinc.com/policies/user-agreement"
                style={{color: '#0079d3', fontWeight: '400'}} rel="noreferrer"
            >
        User Agreement
            </a>{' '}
      and{' '}
            <a
                target="_blank"
                href="https://www.redditinc.com/policies/privacy-policy"
                style={{color: '#0079d3', fontWeight: '400'}} rel="noreferrer"
            >
        Privacy Policy
            </a>
      .
        </p>
    );
}
export {UserAgreement};
