import React, {createContext, useContext, useState} from 'react';
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

/**
 * Provides the context for the post creation form.
 * @param {Object} props The component props.
 * @param {React.ReactNode} props.children The children.
 * @return {JSX.Element} The rendered component.
 */
export function NotificationsButtonProvider({children}) {
    const [notifications, setNotificationsButtons] = useState([]);
    const [unreadNotifications, setUnreadNotifications] = useState(4);

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

