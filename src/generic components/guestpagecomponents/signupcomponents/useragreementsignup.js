// Remove the unused import statement for React
import React from 'react';
/**
 *
 * @return {JSX.Element} User Agreement Signup
 */
function UserAgreementSignup() {
    return (
        <div
            style={{
                textAlign: 'left',

                color: 'black',
                fontFamily: '"Noto Sans", sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
            }}
            data-testid="useragreementsignup35"
        >
            <div>
                By continuing, you are setting up a Reddit
                <br />
                account and agree to our{' '}
                <a
                    target="_blank"
                    href="https://www.redditinc.com/policies/user-agreement"
                    style={{color: '#0088de', fontWeight: '700'}} rel="noreferrer"
                >
                    User Agreement
                </a>{' '}
                and
            </div>{' '}
            <a
                target="_blank"
                href="https://www.redditinc.com/policies/privacy-policy"
                style={{color: '#0088de', fontWeight: '700'}} rel="noreferrer"
            >
                Privacy Policy
            </a>
            .
        </div>
    );
}
export {UserAgreementSignup};
