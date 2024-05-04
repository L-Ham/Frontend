/*eslint-disable*/
import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {axiosInstance as axios} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
import { useNotifications } from '../../generic components/Notifications/notificationsContext.js';

const CreatePostPageContext = createContext();

/**
 * Custom hook for using the subreddit context.
 * @return {Object} The subreddit context.
 */
export function useCreatePostPage() {
    return useContext(CreatePostPageContext);
}

/**
 * Subreddit provider component.
 * @param {Object} props - The props object.
 * @param {JSX.Element} props.children - The children to render.
 * @param {string} props.name - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function CreatePostPageProvider({children, name}) {
    const [loading, setLoading] = useState(true);
    const [about, setAbout] = useState(null);
    const [rules, setRules] = useState(null);
    const [isCommunityTheme, setIsCommunityTheme] = useState(false);
    const [isError, setIsError] = useState(false);
    const {addNotification} = useNotifications();
    const [isScheduleFormVisble, setIsScheduleFormVisble] = useState(false);

    useEffect(() => {
        if(!name) return;
        const loadData = async () => {
            try {
                const aboutData = await fetchSubredditAbout(name);
                setAbout(aboutData);

                const rulesData = await fetchSubredditRules(aboutData.communityDetails.subredditId);
                setRules(rulesData);

                console.log('rules data', rulesData)

                setLoading(false);
            } catch (error) {
                addNotification({type: 'failure', message: 'Failed to fetch subreddit data, please try again later'});
                console.error('Failed to fetch subreddit data', error);
                setLoading(false);
                setIsError(true);
            }
        };

        loadData();
    }, [name]);

    // The value that will be supplied to any descendants of this provider.
    const value = {
        loading,
        name,
        about,
        rules,
        isCommunityTheme, setIsCommunityTheme,
        isError,
        isScheduleFormVisble, setIsScheduleFormVisble,
    };

    return (
        <CreatePostPageContext.Provider value={value}>
            {children}
        </CreatePostPageContext.Provider>
    );
}

CreatePostPageProvider.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
};


const fetchSubredditAbout = async (name) => {
    const response = await axios.get(API_ROUTES.communityDetails(name));
    const data = response.data;
    return data;
};


const fetchSubredditRules = async (id) => {
    const response = await axios.get(API_ROUTES.subredditRules(id));
    const data = response.data.rules.ruleList;
    return data;
};