import React from 'react';
/**
 *
 * @return {JSX.Element} RedditLogo

 */
const RedditLogo = () => (
    <img
        src="https://www.redditstatic.com/accountmanager/favicon/favicon-512x512.png"
        alt="React Logo"
        style={{width: '40px', height: '40px', float: 'left', display: 'block'}}
        data-testid="redditlogo"
    />
);

export {RedditLogo};
