import React from 'react';
import propTypes from 'prop-types';
import {Img} from './Img/img';
import {Content} from './Content/content';
import {Options} from './Options/options';
import {API_ROUTES} from '../../../../../../../../../requests/routes';
import {useNotifications} from '../../../../../../../../../generic components/Notifications/notificationsContext';
import {axiosInstance as axios} from '../../../../../../../../../requests/axios';

/**
 * Notification
 * @param {object} props - props
 * @param {object} props.notification - notification
 * @param {string} props.view - view
 * @return {JSX.Element} Notification
 * @constructor
 * */
export function Notification({notification, view}) {
    if (!notification) return null;

    const {id, title, description, time, status, img, type, subredditName,
        postId, senderName} = notification;
    // console.log(postId);
    const {addNotification} = useNotifications();

    const markAsRead = async () => {
        try {
            await axios.patch(API_ROUTES.markNotificationAsRead, {
                'notificationId': id,
            });
        } catch (error) {
            addNotification({type: 'error', message: error.message});
        }
    };

    const handleClick = async () => {
        if (status === 'unread') {
            await markAsRead();
        }
        // then go the subreddit
        if (type !== 'followed') {
            window.open(`/r/${subredditName ? subredditName : ''}/comments/${postId}`, '_self');
        } else {
            window.open(`/user/${senderName ? senderName : ''}`, '_self');
        }
    };

    return (
        <div onClick={handleClick}>
            <a className='!hover:no-underline !focus:no-underline !active:no-underline a !m-0 !border-0
            !p-0 text-inherit !no-underline
            visited:text-inherit
                hover:underline'
            href='#'>
                <div className={`grid cursor-pointer grid-cols-[2rem_1fr_2rem] gap-2 
                ${status == 'unread' ? 'bg-[rgba(36,160,237,.1)]' : ''} px-4
                 py-2`}>
                    <Img img={img}/>
                    <Content title={title} description={description} time={time} view={view} id={id}/>
                    <Options id={id} type={type}/>
                </div>
            </a>
        </div>
    );
}

Notification.propTypes = {
    notification: propTypes.object.isRequired,
    view: propTypes.string,
};
