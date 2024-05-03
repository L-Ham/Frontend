import React from 'react';
import PropTypes from 'prop-types';
import {MessagesTab} from './Tabs/MessagesTab/messagestab.js';
import {NotificationsTab} from './Tabs/NotificationsTab/notificationstab';

/**
 * menu
 * @param {string} view - view
 * @return {JSX.Element} menu
 * @constructor
 * */
export function Menu({view}) {
    const gridStyle = (view === 'COMPACT') ? `grid-cols-2` :
        'grid-cols-[auto_auto_1fr]';
    return (
        <div className={`mb-2 grid ${gridStyle} pt-1 text-[0.875rem]/[1.25rem]`}>
            <NotificationsTab/>
            <MessagesTab/>
            <div className="col-start-1 h-1  rounded-[2px] bg-[var(--color-primary)]" />
            <div className="h-1 rounded-[2px]  bg-transparent" />
        </div>
    );
}

Menu.propTypes = {
    view: PropTypes.string,
};
