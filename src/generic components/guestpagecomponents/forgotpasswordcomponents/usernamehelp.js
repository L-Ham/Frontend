// Remove the unused import statement for React
import React from 'react';
/**
 *
 * @return {JSX.Element} UserHelp
 */
function UserHelp() {
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
                target="_blank"
                href="https://accounts.reddit.com/account/login/"
                style={{color: '#0088de', fontWeight: '700'}} rel="noreferrer"
            >
        LOG IN.{' '}
            </a>
            <a
                target="_blank"
                href="https://accounts.reddit.com/account/register/"
                style={{color: '#0088de', fontWeight: '700'}} rel="noreferrer"
            >
                {' '}
        SIGN UP
            </a>
        </p>
    );
}
export {UserHelp};