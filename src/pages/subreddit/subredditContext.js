import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';

// Define the context
const SubredditContext = createContext();

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
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // post
    const [submitText, setSubmitText] = useState(''); // post submit text
    const [submitTextHtml, setSubmitTextHtml] = useState(''); // post submit text
    // styles
    const [primaryColor, setPrimaryColor] = useState('#aa9655');

    // widgets

    // user
    const [userIsMuted, setUserIsMuted] = useState(false);
    const [userIsContributor, setUserIsContributor] = useState(false);
    const [userIsBanned, setUserIsBanned] = useState(false);
    const [userIsSubscriber, setUserIsSubscriber] = useState(false);
    const [userIsModerator, setUserIsModerator] = useState(false);
    const [userHasFavorited, setUserHasFavorited] = useState(false);

    // subreddit data
    const [title, setTitle] = useState(''); // ex: One Piece
    const [displayName, setDisplayName] = useState(''); // ex: OnePiece
    const [displayNamePrefixed, setDisplayNamePrefixed] = useState(''); // ex: r/OnePiece
    const [publicDescription, setPublicDescription] = useState('');
    const [descriptionHtml, setDescriptionHtml] = useState(''); // subreddit description
    const [communityIcon, setCommunityIcon] = useState(''); // subreddit icon
    const [activeUserCount, setActiveUserCount] = useState(0);
    const [subscribers, setSubscribers] = useState(0);
    const [name, setName] = useState(''); // ex: t5_2qh0u
    const [id, setId] = useState('2qh0u');
    // banner
    const [bannerBackgroundImage, setBannerBackgroundImage] = useState(''); // subreddit banner

    const [submitText, setSubmitText] = useState('');
    const [descriptionHtml, setDescriptionHtml] = useState('');
    // other msh 3arf h7tago wla l2 LSA:
    const [hasMenuWidget, setHasMenuWidget] = useState(false);
    const [publicDescriptionHtml, setPublicDescriptionHtml] = useState('');
    // key color is for join buttons and links


    useEffect(() => {
        const loadData = async () => {
            try {
                const subredditAboutData = await fetchSubredditAbout();


                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch subreddit data', error);
                setError(error);
                setLoading(false);
            }
        };

        loadData();
    }, []);

    // The value that will be supplied to any descendants of this provider.
    const value = {
        Loading,
        Error,
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

const numberToString = (number) => {
    if (number > 1000000) {
        return `${(number / 1000000).toFixed(1)}M`;
    } else if (number > 1000) {
        return `${(number / 1000).toFixed(1)}k`;
    }
    return number.toString();
};

/**
 * Fetches the subreddit about from the Reddit API.
 * @param {string} subredditName The name of the subreddit.
 * @return {Promise} The promise object representing the API call.
 * @return {Object} The subreddit about.
 * */
const fetchSubredditAbout = async (subredditName) => {
    const response = await fetch(`https://oauth.reddit.com/r/${subredditName}/about`);
    const data = await response.json();
    return data;
};

