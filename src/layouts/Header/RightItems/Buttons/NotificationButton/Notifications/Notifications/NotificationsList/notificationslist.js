import React from 'react';
import PropTypes from 'prop-types';
import {Notification} from './Notification/notification.js';
import {useNotificationsButtons} from '../../../notificationsbuttoncontext.js';
/**
 * Notifications List
 * @param {string} view - view
 * @return {JSX.Element} Notifications List
 * @constructor
 * */
export function NotificationsList({view}) {
    const {notifications} = useNotificationsButtons();

    const getTitle = (notification) => {
        switch (notification.type) {
        case 'commentReply':
            return `u/${notification.senderName} replied to your comment in 
            r/${notification.subredditName ? notification.subredditName : ''}`;
        case 'commentedPost':
            return `u/${notification.senderName} replied to your post in 
            r/${notification.subredditName ? notification.subredditName : ''}`;
        case 'postedInSubreddit':
            return `u/${notification.senderName} posted in
             r/${notification.subredditName ? notification.subredditName : ''}`;
        case 'followed':
            return `u/${notification.senderName} followed you`;
        case 'upvotedPost':
            return `u/${notification.senderName} upvoted your post
             in r/${notification.subredditName ? notification.subredditName : ''}`;
        case 'downvotedPost':
            return `u/${notification.senderName} downvoted your post
             in r/${notification.subredditName ? notification.subredditName : ''}`;
        default:
            return '';
        }
    };

    const getDescritpion = (notification) => {
        switch (notification.type) {
        case 'commentReply':
            return notification.content ? notification.content : '';
        case 'commentedPost':
            return notification.content ? notification.content : '';
        case 'postedInSubreddit':
            return notification.content ? notification.content : '';
        case 'followed':
            return notification.content ? notification.content : '';
        case 'upvotedPost':
            return notification.content ? notification.content : '';
        case 'downvotedPost':
            return notification.content ? notification.content : '';
        default:
            return '';
        }
    };

    const calculateNumberOfSeconds = (createdAt) => {
        const currentTime = new Date();
        const createdAtTime = new Date(createdAt);
        const difference = currentTime - createdAtTime;
        return Math.floor(difference / 1000);
    };

    const getImg = (notification) => {
        return notification.senderAvatar;
    };

    const formattedNotifications = notifications.map((notification) => {
        return {
            id: notification._id,
            title: getTitle(notification),
            // depending on the notification type, this could be a post title, a comment, or a user
            description: getDescritpion(notification),
            // the content of the notification depending on the notification type
            time: calculateNumberOfSeconds(notification.createdAt),
            // the time since the notification was created,
            status: notification.isRead ? 'read' : 'unread',
            img: getImg(notification),
            // the image depending on the notification type
            type: notification.type,
            subredditName: notification.subredditName,
            postId: notification.postId,
            senderName: notification.senderName,
        };
    });

    return (
        <div className='block' data-testid="#main-div-r23rtad">
            {
                formattedNotifications
                    .slice(0, view === 'COMPACT' ? 4 : formattedNotifications.length)
                    .map((notification) => (
                        <Notification key={notification.id} notification={notification} view={view}/>
                    ))
            }
        </div>
    );
}

// proptypes
NotificationsList.propTypes = {
    view: PropTypes.string,
};
