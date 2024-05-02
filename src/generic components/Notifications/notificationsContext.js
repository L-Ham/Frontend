import React, {createContext, useContext, useState} from 'react';
import PropTypes from 'prop-types';

// Create a context for the notification data
const NotificationContext = createContext();

/**
 * Provides the context for the post creation form.
 *  @return {Object} The post creation context.
 */
export function useNotifications() {
    return useContext(NotificationContext);
}

/**
 * Provides the context for the post creation form.
 * @param {Object} props The component props.
 * @param {React.ReactNode} props.children The children.
 * @return {JSX.Element} The rendered component.
 */
export function NotificationProvider({children}) {
    const [notifications, setNotifications] = useState([]);

    // Function to add a notification
    const addNotification = (notification) => {
        console.log('notification', notification);
        setNotifications((prevNotifications) => [...prevNotifications,
            {...notification, id: prevNotifications.length}]);
    };

    // Function to remove a notification with a specific id
    const removeNotification = (id) => {
        setNotifications((prevNotifications) => prevNotifications.filter((notification) => notification.id !== id));
    };

    const value = {
        notifications,
        addNotification,
        removeNotification,
    };

    return (
        <NotificationContext.Provider value={value}>
            {children}
        </NotificationContext.Provider>
    );
}

NotificationProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

