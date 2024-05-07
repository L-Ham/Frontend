/* eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import './scheduledposts.css';
import {useNotifications} from '../../generic components/Notifications/notificationsContext';
import {Header} from './Header';
import {Main} from './Main';
import {axiosInstance} from '../../requests/axios';
import {API_ROUTES} from '../../requests/routes';

/**
 * Renders the SheduledPosts component.
 * @return {JSX.Element} The rendered component.
 */
export function ScheduledPosts({name}) {
    const [about, setAbout] = React.useState(null);
    const {addNotification} = useNotifications();

    const fetchSubredditAbout = async (name) => {
        const response = await axiosInstance.get(API_ROUTES.communityDetails(name));
        const data = response.data;
        return data;
    };

    const loadData = async () => {
        try {
            const response = await fetchSubredditAbout(name);
            setAbout(response.data);
        } catch (error) {
            addNotification({type: 'error', message: 'Error fetching subreddit about data'});
            console.error('Error fetching subreddit about data', error);
        }
    };

    React.useEffect(() => {
        loadData();
    }, [name]);

    return (
        <div className='_2Z3MiFrgj2rofHXrH1YVKn _1haViLcso0RRPvkDGZgDLJ
        text-[var(--newCommunityTheme-bodyText)]' data-testid="scheduled-posts-div">
            <Header data-testid="scheduled-posts-header"/>
            <Main about={about} data-testid="scheduled-posts-main"/>
        </div>
    );
}

ScheduledPosts.propTypes = {
    name: PropTypes.string.isRequired,
};

