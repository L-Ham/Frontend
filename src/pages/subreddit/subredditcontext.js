import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

// Define the context
const SubredditContext = createContext();

const token = `eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnl`+
`sV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxj`+
`dWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZ`+
`XhwIjoxNzExNTc5NjczLjk2ODg1OCwiaWF0IjoxNzExNDkzMjczLj`+
`k2ODg1OCwianRpIjoiOGpJd1k2amd5bWMwZEs1OWpBMlU0SWFjUlp`+
`EMEpnIiwiY2lkIjoiOXRMb0Ywc29wNVJKZ0EiLCJsaWQiOiJ0Ml90`+
`enNoYTkwZTkiLCJhaWQiOiJ0Ml90enNoYTkwZTkiLCJsY2EiOjE3M`+
`Dc2Nzk1MzUwNjMsInNjcCI6ImVKeGtrVkZ1OURBSWhPX2k1NXpndj`+
`hxdnFuSnNzb3RxbXdod1ZudjdpdGhrSV9WdFlMNWdtUHdQTzJKWVF`+
`zd0NHWFVvaHBqREVxQkdMTlpKaVhvekx6SGtqQ3BtRG5vckVUa3M0`+
`WW1peE8td0JNelFGTlZrd1FOcWJQRUJZUW1WY3FLMjRlUFN5cmgySl`+
`piUjhWR1ZjcUZKelEwcTVVWTZwNUEtd2JfWlNYUktnYklOcFJ5M0Rk`+
`TW9YdmhqOTlXMzlQV3pfYzU0UklVS0l2RUIxcGszTS16RWRwakV3OTR`+
`UNVo2ME0yVFJkemxKNldzOWI1ZS1TbUpjalR2R2V2YmFUTWJrSEpxZVV`+
`mX2Q5WXZ4eEQzUHlfVGFnUm1yLTE2NjdWbTdmOVVPVk1yQVVZbWQtRF`+
`FjdVhMNXRsOEM3ZHIwcjNIN3hBN2ZGYW5KRGI4MUhiVmNuRGoxTUw1`+
`LUF3QUFfXzlWZTk3aiIsInJjaWQiOiItR2lqWTl5bEQ2YVlyejhqbG`+
`pTd2ZRWlBTWU9vWHMxQVlQUkVUclJvR2ZVIiwiZmxvIjoyfQ.sDC_5`+
`JT8HoIRTbYGG_9_5q_dgJSQKamlWpOQkHfq_1OAfMd_sbuBXEW3Vh1`+
`vWWgcjpkkMCl84w3CxhNTRTgq-WKSy2kGLJ9hy3AWDRCV4fCVkXhIs`+
`ccITCYzU4Dee0DGciYGLfWTp_RB8R13stNBUlBS5YnByITCU87K3-wV`+
`1CaBp3suru7UTDiM6lOJqKdVsLm6iI2g6lt_n7lxvw_7FS0HLvo24T`+
`e-4MuNlMDqC1OIZ62cmBnEP__oS7xHaWjkQ4UV85RM7A1oVCwiBwevm`+
`fGUKYy5Mjl5G1ZPWgNbrhf6MyOP6mkAoWDHZnL7bGXINIr8cOpxVe-EpLukGYhzzw`;


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
    // const name = 'help';
    const name = 'OnePiece';
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

