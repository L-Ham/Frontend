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
        case 'reply':
            return `u/${notification.senderName} replied to your comment in 
            r/${notification.subredditName ? notification.subredditName : ''}`;
        case 'commentedPost':
            return `u/${notification.senderName} replied to your post in 
            r/${notification.subredditName ? notification.subredditName : ''}`;
        case 'post':
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
        // TODO: implement this function
        switch (notification.type) {
        case 'reply':
            return notification.commentContent;
        case 'commentedPost':
            return notification.commentContent;
        case 'post':
            return notification.postContent;
        case 'followed':
            return '';
        case 'upvotedPost':
            return 'upvote';
        case 'downvotedPost':
            return 'downvote';
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
        };
    });


    // const FormattedNotifications = [
    //     {
    //         id: 1,
    //         title: 'u/Wordly_ss2 replied to your post in r/gesoArtWorld',
    //         description: 'agree...',
    //         time: 14,
    //         status: 'unread',
    //         img: 'https://www.redditstatic.com/shreddit/assets/avatar_over18.png',
    //         type: 'reply',
    //     },
    //     {
    //         id: 2,
    //         title: 'u/Wordly_Cold_4661sadasd124 replied to your post in r/gesoArtWorld',
    //         description: 'i love this!',
    //         time: 123424,
    //         status: 'unread',
    //         img: 'https://www.redditstatic.com/shreddit/assets/avatar_over18.png',
    //         type: 'reply',
    //     },
    //     {
    //         id: 3,
    //         title: 'u/Wordly_Cold_4661 replied to your comment in r/OnePiece',
    //         description: 'Loofy is the toppp!',
    //         time: 1412224,
    //         status: 'read',
    //         img: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png',
    //         type: 'reply',
    //     },
    //     {
    //         id: 4,
    //         title: 'u/ironman replied to your post in r/picsForLife',
    //         description: 'agree...',
    //         time: 14124,
    //         status: 'unread',
    //         img: 'https://www.redditstatic.com/shreddit/assets/avatar_over18.png',
    //         type: 'reply',
    //     },
    //     {
    //         id: 5,
    //         title: 'u/Wordly_Cold_4661sadasd124 replied to your post in r/gesoArtWorld',
    //         description: 'i love this!',
    //         time: 1212421,
    //         status: 'read',
    //         img: 'https://www.redditstatic.com/shreddit/assets/avatar_over18.png',
    //         type: 'reply',
    //     },
    // ];

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
