import React from 'react';
import PropTypes from 'prop-types';
import './notifications.css';
import {Menu} from './Menu/menu.js';
import {NotificationsList} from './NotificationsList/notificationslist.js';

/**
 * Notifications List
 * @param {string} view - view
 * @return {JSX.Element} Notifications List
 * @constructor
 * */
export function Notifications({view}) {
    return (
        <div className="scrollbar-hide flex flex-col overflow-auto" data-testid="main-div-#%&*@()IJNASD<>?SPODJQ">
            <div data-testid="inner-div-#$$!%^&*()PDMSANKMHU">
                <Menu data-testid="menu-~!@#$%^&*()_LSVJ_AKA"/>
                <NotificationsList view={view} data-testid="notifications-list-_)(*IJKXGBASKXSsad"/>
            </div>
        </div>
    );
}

// proptypes
Notifications.propTypes = {
    view: PropTypes.string,
};
