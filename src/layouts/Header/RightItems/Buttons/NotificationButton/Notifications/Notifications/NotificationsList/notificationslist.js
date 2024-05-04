import React from 'react';
import PropTypes from 'prop-types';
import {Notification} from './Notification/notification.js';

/**
 * Notifications List
 * @param {string} view - view
 * @return {JSX.Element} Notifications List
 * @constructor
 * */
export function NotificationsList({view}) {
    // TODO: Replace with real data
    const notifications = [
        {
            id: 1,
            title: 'u/Wordly_ss2 replied to your post in r/gesoArtWorld',
            description: 'agree...',
            time: 14,
            status: 'unread',
            img: 'https://www.redditstatic.com/shreddit/assets/avatar_over18.png',
            type: 'reply',
        },
        {
            id: 2,
            title: 'u/Wordly_Cold_4661sadasd124 replied to your post in r/gesoArtWorld',
            description: 'i love this!',
            time: 123424,
            status: 'unread',
            img: 'https://www.redditstatic.com/shreddit/assets/avatar_over18.png',
            type: 'reply',
        },
        {
            id: 3,
            title: 'u/Wordly_Cold_4661 replied to your comment in r/OnePiece',
            description: 'Loofy is the toppp!',
            time: 1412224,
            status: 'read',
            img: 'https://styles.redditmedia.com/t5_2rfz5/styles/communityIcon_0jgg9qqdkbxb1.png',
            type: 'reply',
        },
        {
            id: 4,
            title: 'u/ironman replied to your post in r/picsForLife',
            description: 'agree...',
            time: 14124,
            status: 'unread',
            img: 'https://www.redditstatic.com/shreddit/assets/avatar_over18.png',
            type: 'reply',
        },
        {
            id: 5,
            title: 'u/Wordly_Cold_4661sadasd124 replied to your post in r/gesoArtWorld',
            description: 'i love this!',
            time: 1212421,
            status: 'read',
            img: 'https://www.redditstatic.com/shreddit/assets/avatar_over18.png',
            type: 'reply',
        },
    ];

    return (
        <div className='block' data-testid="#main-div-r23rtad">
            {
                notifications
                    .slice(0, view === 'COMPACT' ? 4 : notifications.length)
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
