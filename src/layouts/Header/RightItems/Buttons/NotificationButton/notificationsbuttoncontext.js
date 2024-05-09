import React, {createContext, useContext, useEffect, useState} from 'react';
import {axiosInstance as axios} from '../../../../../requests/axios';
import {API_ROUTES} from '../../../../../requests/routes';
import {useNotifications} from '../../../../../generic components/Notifications/notificationsContext';
import PropTypes from 'prop-types';

// Create a context for the notification data
const NotificationsButtonContext = createContext();

/**
 * Provides the context for the post creation form.
 *  @return {Object} The post creation context.
 */
export function useNotificationsButtons() {
    return useContext(NotificationsButtonContext);
}
export const fetchNotifications = async () => {
    const response = await axios.get(API_ROUTES.getNotifications(10));
    const data = await response.data;
    return data;
};


/**
 * Provides the context for the post creation form.
 * @param {Object} props The component props.
 * @param {React.ReactNode} props.children The children.
 * @return {JSX.Element} The rendered component.
 */
export function NotificationsButtonProvider({children}) {
    const {addNotification} = useNotifications();
    const [notifications, setNotificationsButtons] = useState([]);
    const [unreadNotifications, setUnreadNotifications] = useState(0);

    const loadData = async () => {
        try {
            const data = await fetchNotifications();
            console.log(data);
            let unread = 0;
            data.forEach((notification) => {
                if (!notification.isRead) {
                    unread += 1;
                }
            });
            setNotificationsButtons(data);
            setUnreadNotifications(unread);
        } catch (error) {
            addNotification({type: 'error', message: error.message});
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    const value = {
        notifications,
        setNotificationsButtons,
        unreadNotifications,
        setUnreadNotifications,
    };

    return (
        <NotificationsButtonContext.Provider value={value}>
            {children}
        </NotificationsButtonContext.Provider>
    );
}

NotificationsButtonProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

