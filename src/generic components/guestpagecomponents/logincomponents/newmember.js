// Remove the unused import statement for React
import React from 'react';
/**
 *
 * @return {JSX.Element} New member
 */
function NewMember() {
    return (
        <p
            style={{
                textAlign: 'left',

                color: 'black',
                fontFamily: '"Noto Sans",sans-serif',
                fontSize: '12px',
                fontWeight: 400,
                lineHeight: '18px',
                marginTop: '8px',
            }}
            data-testid="newmember"
        >
      New to Reddit?{' '}
            <a
                href="/register"
                style={{color: '#0088de', fontWeight: '700', fontSize: '12px'}} rel="noreferrer"
            >
        SIGN UP
            </a>{' '}
        </p>
    );
}
export {NewMember};
