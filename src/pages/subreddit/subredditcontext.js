import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {axiosInstance as axios} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
import {useNavigate} from 'react-router-dom';
import {useNotifications} from '../../generic components/Notifications/notificationsContext';

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
 * @param {boolean} props.style - The style of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function SubredditProvider({children, name, style}) {
    const [loading, setLoading] = useState(true);
    const [about, setAbout] = useState(null);
    const [widgets, setWidgets] = useState(null);
    const navigate = useNavigate();
    const {addNotification} = useNotifications();
    const isModerator = true;
    const [isAppearanceSettingsVisible, setIsAppearanceSettingsVisible] = useState(style === 'true');
    const [isUploadBannerVisible, setIsUploadBannerVisible] = useState(false);
    const [isUploadAvatarVisible, setIsUploadAvatarVisible] = useState(false);
    // forms
    const [isBookmarksFormVisible, setIsBookmarksFormVisible] = useState(false);
    const [isCommunityDetailsFormVisible, setIsCommunityDetailsFormVisible] = useState(false);
    const [isTextWidgetFormVisible, setIsTextWidgetFormVisible] = useState(false);
    // currentyl editing
    const [textWidgetId, setTextWidgetId] = useState(null);
    const [textWidget, setTextWidget] = useState({});
    const [bookmarkWidgetId, setBookmarkWidgetId] = useState(null);
    const [isAddNewWidgetsVisible, setIsAddNewWidgetsVisible] = useState(false);

    // editing the subreddit


    useEffect(() => {
        loadData(name, navigate, setAbout, setWidgets, setLoading, isModerator, addNotification);
    }, [name, navigate, setAbout, setWidgets, setLoading]);

    // The value that will be supplied to any descendants of this provider.
    const value = {
        loading, setLoading,
        name,
        about, setAbout,
        widgets, setWidgets,
        isModerator,
        isAppearanceSettingsVisible,
        setIsAppearanceSettingsVisible,
        isUploadBannerVisible,
        setIsUploadBannerVisible,
        isUploadAvatarVisible,
        setIsUploadAvatarVisible,
        isBookmarksFormVisible,
        setIsBookmarksFormVisible,
        isCommunityDetailsFormVisible,
        setIsCommunityDetailsFormVisible,
        isTextWidgetFormVisible,
        setIsTextWidgetFormVisible,
        textWidgetId,
        setTextWidgetId,
        bookmarkWidgetId,
        setBookmarkWidgetId,
        textWidget,
        setTextWidget,
        isAddNewWidgetsVisible,
        setIsAddNewWidgetsVisible,
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
    style: PropTypes.bool,
};

export const fetchSubredditAbout = async (name) => {
    const response = await axios.get(API_ROUTES.communityDetails(name));
    const data = response.data;
    return data;
};

export const fetchSubredditWidgets = async (id) => {
    const response = await axios.get(API_ROUTES.widgets(id));
    const data = await response.data;
    return data;
};

const fetchSubredditData = async (subredditName, addNotification) => {
    try {
        const aboutData = await fetchSubredditAbout(subredditName);
        const widgetsData = await fetchSubredditWidgets(aboutData.communityDetails.subredditId);
        return {aboutData, widgetsData};
    } catch (error) {
        addNotification({type: 'error', message: error.response.data.message ||
        'Failed to fetch subreddit data, please try again later.'});
        throw error;
    }
};

const processData = async (widgetsData, isModerator) => {
    const updatedTextWidgets = Object.values(widgetsData.textWidgets).reduce((acc, widget) => {
        return {...acc, [widget._id]: {...widget, kind: 'textarea'}};
    }, {});

    const updatedBookmarkWidgets = Object.values(widgetsData.bookMarks).reduce((acc, widget) => {
        return {...acc, [widget._id]: {...widget, kind: 'menu'}};
    }, {});

    const result = {
        'message': widgetsData.message,
        '1': {...widgetsData.communityDetails, kind: 'id-card'},
        '2': {moderators: [...widgetsData.moderators], kind: 'moderators'},
        'order': ['1', ...widgetsData.orderWidget, '2'],
        ...updatedTextWidgets,
        [widgetsData.rules._id]: {
            ruleList: widgetsData.rules.ruleList,
            kind: 'subreddit-rules',
        },
        ...updatedBookmarkWidgets,
    };


    if (isModerator) {
        result['community-settings'] = {kind: 'community-settings'};
        result['order'].push('community-settings');
    }

    return result;
};


export const loadData = async (name, navigate, setAbout, setWidgets, setLoading, isModerator, addNotification) => {
    setLoading(true);
    try {
        const {aboutData, widgetsData} = await fetchSubredditData(name, addNotification);
        const structuredWidgetsData = await processData(widgetsData, isModerator);
        setAbout(aboutData);
        setWidgets(structuredWidgetsData);
        setLoading(false);
    } catch (error) {
        setLoading(false);
    }
};

