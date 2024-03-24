import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from '../../generic components/DropdownMenu';
import {getIconComponent} from '../../generic components/icons';

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
    // icons
    const FrequentIcon = getIconComponent('Frequent', activeItem === 'Frequent');
    const LowIcon = getIconComponent('Low', activeItem === 'Low');
    const OffIcon = getIconComponent('Off', activeItem === 'Off');

    const className = 'w-5 h-5 mr-2';

    const menuItems = [
        {
            content: {
                text: 'Frequent', icon: <FrequentIcon className={className}/>,
            },
            onClick: () => onItemClick('Frequent'),
        },
        {
            content: {
                text: 'Low', icon: <LowIcon className={className}/>,
            },
            onClick: () => onItemClick('Low'),
        },
        {
            content: {
                text: 'Off', icon: <OffIcon className={className}/>,
            },
            onClick: () => onItemClick('Off'),
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
