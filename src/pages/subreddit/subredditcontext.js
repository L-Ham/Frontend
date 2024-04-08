import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

// Define the context
const SubredditContext = createContext();

/* eslint-disable-next-line*/
const token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzEyNjU1NjkwLjQ2NzQ0MywiaWF0IjoxNzEyNTY5MjkwLjQ2NzQ0MywianRpIjoiZXFSa0pYb005bmRIa0ZXNUFGMWVxQWVOYUktWllRIiwiY2lkIjoiOXRMb0Ywc29wNVJKZ0EiLCJsaWQiOiJ0Ml90enNoYTkwZTkiLCJhaWQiOiJ0Ml90enNoYTkwZTkiLCJsY2EiOjE3MDc2Nzk1MzUwNjMsInNjcCI6ImVKeGtrZEdPdERBSWhkLWwxejdCX3lwX05odHNjWWFzTFFhb2szbjdEVm9jazcwN2NMNGlIUDhuS0lxRkxFMnVCS0drS1dFRld0T1VOaUx2NTh5OU9aRUZTeUZUUjg0M3l3b2thVXBQVW1ONXB5bFJ3V1prTGxmYXNVS0RCNllwVlM2WjIwS1BTNXZRM0kxRnowNk1xbHhXSHRUWW8zSnBiR01LMnhQanpjWnFReXF1eTZsTVlGa29uOFdMZnZ5Ry10WS1mN2JmaEhZd3JLZ0tEX1RPdUZ4d1lfSERGSGJfbnByMGJGMndxTDNYZzlRLTEtTjI3Yk5tb2RtNV9WelB2emFTY1RtRzVpZll2N3QtQ1IxNDVIbVpVUWN3WWcwX3lyQWo2X0N2T29ES0JRV01KWWhQSTVBcmwyX19KZGl1VGY4YXR5ZC0tR2JFVFdfNHJSbW81eExFb1VfajZ6Y0FBUF9fWERfZTR3IiwicmNpZCI6Ii1HaWpZOXlsRDZhWXJ6OGpsalN3ZlFaUFNZT29YczFBWVBSRVRyUm9HZlUiLCJmbG8iOjJ9.W5D3SqsS94IX8PLESZbMfnnWmBSeYWaclw-qLMeWFvTbAdDXikc6zcfcUiGNHsIUcRhmWbwM33o52XEYOkAdBfn5iDFasvC8wCBHgUEasyJwJcrBnMdoyhur3QBSDUBI-kMfFRl57eROh8NLf5uumFKlncQyVq6p70M6Re5eAOoZznH_sxOkvTVtbvU6W-fE9PiFayV6BNTPtc6ijo4YtmbcQVuL7IqLkNt4CAsc4isCmEqSzurV3aVEDwDnYdIoCmrRZyiqQhLy_pIV0fEHLmfabTMvRyH5pv0CwWcxOGQ3dMdlY4uEw2HPSZlC-J2KbGDjHwdU_tXx1EtLtivTow";

const userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 `+
`(KHTML, like Gecko) Chrome/123.0.0.0`;
/**
 * Custom hook for using the subreddit context.
 * @return {Object} The subreddit context.
 */
export function useSubreddit() {
    return useContext(SubredditContext);
}

import {generateColorTones,
    generateNeutralTones,
    generatePrimaryColorTones,
    generateSecondaryColorTones} from '../../generic components/utils';

/**
 * Subreddit provider component.
 * @param {Object} props - The props object.
 * @param {JSX.Element} props.children - The children to render.
 * @param {string} props.name - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditProvider({children, name}) {
    // const name = 'help';
    // const name = 'OnePiece';
    // const name = 'ChatGPT';
    const [loading, setLoading] = useState(true);
    const [about, setAbout] = useState(null);
    const [widgets, setWidgets] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const aboutData = await fetchSubredditAbout(name);
                setAbout(aboutData);

                const widgetsData = await fetchSubredditWidgets(name);
                setWidgets(widgetsData);

                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch subreddit data', error);
                setLoading(false);
            }
        };

        loadData();
    }, [name]);

    useEffect(() => {
        if (!about) return;

        const {data: {primary_color: primaryColor}} = about;
        const isDarkMode = false;

        if (!primaryColor) return;

        let colors = {...generateColorTones(primaryColor, isDarkMode)};
        colors = {...colors, ...generateNeutralTones(primaryColor, isDarkMode)};
        colors = {...colors, ...generatePrimaryColorTones(primaryColor, isDarkMode)};
        colors = {...colors, ...generateSecondaryColorTones(primaryColor, isDarkMode)};

        for (const [key, value] of Object.entries(colors)) {
            document.documentElement.style.setProperty(`--${key}`, value);
        }
    }
    , [about]);


    // The value that will be supplied to any descendants of this provider.
    const value = {
        loading,
        name,
        about,
        widgets,
    };

    return (
        <SubredditContext.Provider value={value}>
            {children}
        </SubredditContext.Provider>
    );
}

SubredditProvider.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
};


/**
 * Fetches the subreddit about from the Reddit API.
 * @param {string} name The name of the subreddit.
 * @return {Promise} The promise object representing the API call.
 * @return {Object} The subreddit about.
 * */
const fetchSubredditAbout = async (name) => {
    const response = await fetch(`https://oauth.reddit.com/r/${name}/about`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User-Agent': userAgent,
        },
    });
    const data = await response.json();
    return data;
};

/**
 * Fetches the subreddit widgets from the Reddit API.
 * @param {string} name The name of the subreddit.
 * @return {Promise} The promise object representing the API call.
 * @return {Object} The subreddit widgets.
 * */
const fetchSubredditWidgets = async (name) => {
    const response = await fetch(`https://oauth.reddit.com/r/${name}/api/widgets`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'User-Agent': userAgent,
        },
    });
    const data = await response.json();
    return data;
};

