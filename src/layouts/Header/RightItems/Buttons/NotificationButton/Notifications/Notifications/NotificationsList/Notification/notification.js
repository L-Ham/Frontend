import React from 'react';
import propTypes from 'prop-types';
import {Img} from './Img/img';
import {Content} from './Content/content';
import {Options} from './Options/options';

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
    console.log(notification);

    const {id, title, description, time, status, img, type} = notification;

    return (
        <div>
            <a className='!hover:no-underline !focus:no-underline !active:no-underline a !m-0 !border-0
            !p-0 text-inherit !no-underline
            visited:text-inherit
                hover:underline'
            href='#'>
                <div className={`grid cursor-pointer grid-cols-[2rem_1fr_2rem] gap-2 
                ${status == 'unread' ? 'bg-[rgba(36,160,237,.1)]' : ''} px-4
                 py-2`}>
                    <Img img={img}/>
                    <Content title={title} description={description} time={time} view={view}/>
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
