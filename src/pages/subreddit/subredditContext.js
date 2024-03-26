import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

// Define the context
const SubredditContext = createContext();

const token = `eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMj`+
`VmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJ`+
`zdWIiOiJ1c2VyIiwiZXhwIjoxNzExNDkyMzc5LjQ1MjU0MiwiaWF0IjoxNzExNDA1O`+
`Tc5LjQ1MjU0MiwianRpIjoiMEdxOVJaYmVCMEVZbmVBSlRUTGJEOUlOWXZfRERBIiwiY2lk`+
`IjoiOXRMb0Ywc29wNVJKZ0EiLCJsaWQiOiJ0Ml90enNoYTkwZTkiLCJhaWQiOiJ0Ml90enNoYTk`+
`wZTkiLCJsY2EiOjE3MDc2Nzk1MzUwNjMsInNjcCI6ImVKeGtrZEdPdERBSWhkLWwxejdCX3lwX05od`+
`HNjWWFzTFFhb2szbjdEVm9jazcwN2NMNGlIUDhuS0lxRkxFMnVCS0drS1dFRld0T1VOaUx2NTh5OU9aRUZ`+
`TeUZUUjg0M3l3b2thVXBQVW1ONXB5bFJ3V1prTGxmYXNVS0RCNllwVlM2WjIwS1BTNXZRM0kxRnowNk1xbHhX`+
`SHRUWW8zSnBiR01LMnhQanpjWnFReXF1eTZsTVlGa29uOFdMZnZ5Ry10WS1mN2JmaEhZd3JLZ0tEX1RPdUZ4d1lfSE`+
`RGSGJfbnByMGJGMndxTDNYZzlRLTEtTjI3Yk5tb2RtNV9WelB2emFTY1RtRzVpZll2N3QtQ1IxNDVIbVpVUWN3WWcwX3l`+
`yQWo2X0N2T29ES0JRV01KWWhQSTVBcmwyX19KZGl1VGY4YXR5ZC0tR2JFVFdfNHJSbW81eExFb1VfajZ6Y0FBUF9fWERfZTR3`+
`IiwicmNpZCI6Ii1HaWpZOXlsRDZhWXJ6OGpsalN3ZlFaUFNZT29YczFBWVBSRVRyUm9HZlUiLCJmbG8iOjJ9.lQzviN6`+
`dF5eha6Zf-eXolAYedgN8daOF4wmPE7I9UYVZ-qf8k8t1ncLa-sHa7TeWCYx_oB1s5D5OpdOHhbWjJ1ORyn2nRSO`+
`oxXzcIgKtsxrIAAuwdE4i-acxwynHFKVybvOHCSoGntG9fWrY6Wx6AHAGn8dgSH2XNhlJRFawao7ludUs-`+
`EcOSAUIaTDTMpT_nZpJ1y0WmuVnT4vgw0TJGT18r_DGDryh35dL6dumhsAJbtPprLNLN0WejDYSq3BP293`+
`sYbS7BUjntOJv5wQ-KoIDpCw5czVlT`+
`-hV2E6sSndk12Dg3u6fljFXnhyj8kBLpHwuvX2j3n4dAvZ5zYh9pQ`;

const userAgent = `Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 `+
`(KHTML, like Gecko) Chrome/123.0.0.0`;
/**
 * Custom hook for using the subreddit context.
 * @return {Object} The subreddit context.
 */
export function useSubreddit() {
    return useContext(SubredditContext);
}

/**
 * Subreddit provider component.
 * @param {Object} props - The props object.
 * @param {JSX.Element} props.children - The children to render.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditProvider({children}) {
    const name = 'OnePiece';
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

