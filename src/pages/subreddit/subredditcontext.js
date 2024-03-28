import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

// Define the context
const SubredditContext = createContext();
/* eslint-disable max-len */
const token = `eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzExNzA4NDg1LjY5MzE1MywiaWF0IjoxNzExNjIyMDg1LjY5MzE1MywianRpIjoiak5RU2VHZ1l6dWktY3dzbzkta2QzNVRLLXJkMHB3IiwiY2lkIjoiOXRMb0Ywc29wNVJKZ0EiLCJsaWQiOiJ0Ml9uY2Q1eCIsImFpZCI6InQyX25jZDV4IiwibGNhIjoxNDMxMDIyOTQ3OTk3LCJzY3AiOiJlSnhra2RHT3REQUloZC1sMXo3Ql95cF9OaHRzY1lhc0xRYW9rM243RFZvY2s3MDdjTDRpSFA4bktJcUZMRTJ1QktHa0tXRUZXdE9VTmlMdjU4eTlPWkVGU3lGVFI4NDN5d29rYVVwUFVtTjVweWxSd1daa0xsZmFzVUtEQjZZcFZTNloyMEtQUzV2UTNJMUZ6MDZNcWx4V0h0VFlvM0pwYkdNSzJ4UGp6Y1pxUXlxdXk2bE1ZRmtvbjhXTGZ2eUctdFktZjdiZmhIWXdyS2dLRF9UT3VGeHdZX0hERkhiX25wcjBiRjJ3cUwzWGc5US0xLU4yN2JObW9kbTVfVnpQdnphU2NUbUc1aWZZdjd0LUNSMTQ1SG1aVVFjd1lnMF95ckFqNl9Ddk9vREtCUVdNSlloUEk1QXJsMl9fSmRpdVRmOGF0eWQtLUdiRVRXXzRyUm1vNXhMRW9VX2o2emNBQVBfX1hEX2U0dyIsInJjaWQiOiI0NXVHaDRTVjdQZGRsanlTc0dXcmZWamZwMVhkQ2lJN3BQU2FmZVIxN2t3IiwiZmxvIjoyfQ.i7eVim73CWgcXg3vX9Zew5NpfWLNQRTFIVMlfyBPMmHTTi6CgOF_jb6ZLWtpayYhWw6DSDJVOeNbNu2VrcsW4mu5iaydBk20waVkGNj333Uhg9R8xYKafnKSlaERPSEwT6ABvZE9_Da9s2lDPfpsGWiVlt19XmWUhXmmVqSTWSIaouTZusq8ucyrHM0IqyIeG_3ORLtRR3_1BHrSc2X_-4XGcsuIGmvTwo5fKNEgQrFMVxs1a-c3maQPxrCfL8h1mbEJNjpQVafQTER0VllMK_o-fPE7F-twfw9wu7DZFDi0DkNJfDXCqaJcbFeGgjZ926oTBqeyW-tUdmjmKZ7YOw`;


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
 * @param {string} props.name - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditProvider({children, name}) {
    // const name = 'help';
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

