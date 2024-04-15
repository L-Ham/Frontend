import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {axiosInstance as axios} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
import {useNavigate} from 'react-router-dom';

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
 * @param {string} props.name - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditProvider({children, name}) {
    const [loading, setLoading] = useState(true);
    const [about, setAbout] = useState(null);
    const [widgets, setWidgets] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSubredditData = async (subredditName) => {
            try {
                const aboutData = await fetchSubredditAbout(subredditName);
                const widgetsData = await fetchSubredditWidgets(aboutData.communityDetails.subredditId);
                return {aboutData, widgetsData};
            } catch (error) {
                console.error('Failed to fetch subreddit data:', error);
                navigate('/page-not-found');
                throw error;
            }
        };

        const processData = async (widgetsData) =>{
            const updatedTextWidgets = Object.values(widgetsData.textWidgets).reduce((acc, widget) => {
                return {...acc, [widget._id]: {...widget, kind: 'textarea'}};
            }, {});

            return {
                'message': widgetsData.message,
                '1': {...widgetsData.communityDetails, kind: 'id-card'},
                '2': {moderators: [...widgetsData.moderators], kind: 'moderators'},
                'order': ['1', ...widgetsData.orderWidget, '2'],
                ...updatedTextWidgets,
                ...widgetsData,
            };
        };

        const loadData = async () => {
            setLoading(true);
            const {aboutData, widgetsData} = await fetchSubredditData(name);
            const structuredWidgetsData = await processData(widgetsData);
            setAbout(aboutData);
            setWidgets(structuredWidgetsData);
            setLoading(false);
        };

        loadData().catch(() => setLoading(false));
    }, [name, navigate, setAbout, setWidgets, setLoading]);

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

const fetchSubredditAbout = async (name) => {
    const response = await axios.get(API_ROUTES.communityDetails(name));
    const data = response.data;
    return data;
};

const fetchSubredditWidgets = async (id) => {
    const response = await axios.get(API_ROUTES.widgets(id));
    const data = await response.data;
    return data;
};


