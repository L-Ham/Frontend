// Remove the unused import statement for React
import React from 'react';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function UserHelp() {
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
            data-testid="userhelp"
        >
      Don&apos;t have an email or need assistance logging in?{' '}
            <a
                target="_blank"
                href="https://support.reddithelp.com/hc/en-us/sections/360008917491-Account-Security"
                style={{color: '#0088de', fontWeight: '700'}} rel="noreferrer"
            >
        GET HELP
            </a>{' '}
            <div style={{marginBottom: '1px'}} />{' '}
            {/* Spacer between components */}
            <br />
            <div style={{marginBottom: '3px'}} />{' '}
            <a
                href="/login"
                style={{color: '#0088de', fontWeight: '700'}} rel="noreferrer"
            >
         LOG IN •{' '}
            </a>
            <a
                href="/register"
                style={{color: '#0088de', fontWeight: '700'}} rel="noreferrer"
            >
                {' '}
        SIGN UP
            </a>
        </div>
    );
}
export {UserHelp};
