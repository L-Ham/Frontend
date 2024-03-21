import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from '../../generic components/DropdownMenu';

/**
 * NotificationsDropdownMenu component
 * @param {Object} props - Component props
 * @param {string} props.activeItem - Active item in the dropdown menu
 * @param {function} props.onItemClick - Function to handle item click
 * @return {JSX.Element} The rendered component
 */
export function NotificationsDropdownMenu({
    activeItem,
    onItemClick,
}) {
    const menuItems = [
        {
            content: {
                text: 'frequent', icon: 'notification-frequent',
            },
            onClick: () => onItemClick('notification-frequent'),
        },
        {
            content: {
                text: 'Low', icon: 'notification',
            },
            onClick: () => onItemClick('notification'),
        },
        {
            content: {
                text: 'off', icon: 'notification-off',
            },
            onClick: () => onItemClick('notification-off'),
        },
    ];

    return (
        <DropdownMenu
            menuItems={menuItems}
            activeItem={activeItem}
        />
    );
}

// PropTypes
NotificationsDropdownMenu.propTypes = {
    activeItem: PropTypes.string,
    onItemClick: PropTypes.func.isRequired,
};
