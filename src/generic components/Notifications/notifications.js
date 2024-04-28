import React from 'react';
import {useNotifications} from './notificationsContext.js';
import {Notification} from './Notification/notification.js';
import {classes} from './notifications.styles.js';

/**
 * Renders the Notifications component.
 * @return {JSX.Element} The rendered component.
 */
export function Notifications() {
    const {notifications, removeNotification} = useNotifications();
    if (!notifications) return null;

    return (
        <div className={classes.container} data-testid="notifications-container-#98**sjkss$$"
            style={{pointerEvents: 'none'}}>
            {notifications.map((notification) => (
                <Notification key={notification.id}
                    notification={notification} onClose={removeNotification} />
            ))}
        </div>
    );
}

