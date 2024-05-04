/*eslint-disable*/
import React, {createContext, useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {axiosInstance as axios} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';
import { useNotifications } from '../../generic components/Notifications/notificationsContext.js';

const RulesPageContext = createContext();

/**
 * Custom hook for using the subreddit context.
 * @return {Object} The subreddit context.
 */
export function useRulesPage() {
    return useContext(RulesPageContext);
}

/**
 * Subreddit provider component.
 * @param {Object} props - The props object.
 * @param {JSX.Element} props.children - The children to render.
 * @param {string} props.name - The name of the subreddit.
 * @return {JSX.Element} The rendered component.
 */
export function RulesPageProvider({children, name, type}) {
    const [loading, setLoading] = useState(true);
    const [about, setAbout] = useState(null);
    const [rules, setRules] = useState(null);
    const [isCommunityTheme, setIsCommunityTheme] = useState(false);
    const [isError, setIsError] = useState(false);
    const {addNotification} = useNotifications();
    const [originalRulesOrder, setOriginalRulesOrder] = useState([]);
    const [rulesOrder, setRulesOrder] = useState([]);
    const [reorderRulesView, setReorderRulesView] = useState(false);
    const [addRuleView, setAddRuleView] = useState(false);
    const [addReasonView, setAddReasonView] = useState(false);
    const [ruleToAdd, setRuleToAdd] = useState({});
    const [reasonToAdd, setReasonToAdd] = useState({});
    const [removalReasons , setRemovalReasons] = useState([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const aboutData = await fetchSubredditAbout(name);
                const rulesData = await fetchSubredditRules(aboutData.communityDetails.subredditId);
                // const removalReasonsData = await fetchRemovalReasons(aboutData.communityDetails.subredditId);
                const rulesOrder = rulesData.map((rule) => rule._id);

                // setRemovalReasons(removalReasonsData);
                setAbout(aboutData);
                setRules(rulesData);
                setRulesOrder(rulesOrder);
                setOriginalRulesOrder(rulesOrder);

                setLoading(false);
            } catch (error) {
                addNotification({type: 'failure', message: error.response.data.message});
                console.error('Failed to fetch subreddit data', error);
                // console .log the error and request details
                console.log(error.response);
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
        rules, setRules,
        isCommunityTheme, setIsCommunityTheme,
        isError,
        type,
        rulesOrder,
        setRulesOrder,
        reorderRulesView,
        setReorderRulesView,
        originalRulesOrder, setOriginalRulesOrder,
        addRuleView, setAddRuleView,
        ruleToAdd, setRuleToAdd,
        removalReasons, setRemovalReasons,
        addReasonView, setAddReasonView,
        reasonToAdd, setReasonToAdd,
        };

    return (
        <RulesPageContext.Provider value={value}>
            {children}
        </RulesPageContext.Provider>
    );
}

RulesPageProvider.propTypes = {
    children: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
};


const fetchSubredditAbout = async (name) => {
    const response = await axios.get(API_ROUTES.communityDetails(name));
    const data = response.data;
    return data;
};


export const fetchSubredditRules = async (id) => {
    const response = await axios.get(API_ROUTES.subredditRules(id));
    const data = response.data.rules.ruleList;
    return data;
};


export const fetchRemovalReasons = async (id) => {
    const response = await axios.get(API_ROUTES.getRemovalReasons(id));
    const data = response.data.removalReasons;
    return data;
}