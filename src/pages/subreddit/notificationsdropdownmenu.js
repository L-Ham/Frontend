import React from 'react';
import PropTypes from 'prop-types';
// components
import {DropdownMenu} from '../../generic components/dropdownmenu';
// icons
import {getIconComponent} from '../../generic components/iconsmap';

/**
 * NotificationsDropdownMenu component
 * @param {Object} props - Component props
 * @param {string} props.activeItem - Active item in the dropdown menu
 * @param {function} props.onItemClick - Function to handle item click
 * @param {string} props.className - The class name
 * @return {JSX.Element} The rendered component
 */
export function NotificationsDropdownMenu({
    activeItem,
    onItemClick,
    className,
}) {
    // icons
    const FrequentIcon = getIconComponent('frequent', activeItem === 'frequent');
    const LowIcon = getIconComponent('low', activeItem === 'low');
    const OffIcon = getIconComponent('off', activeItem === 'off');

    const iconsClassName = 'w-5 h-5 mr-2';

    const menuItems = [
        {
            content: {
                text: 'Frequent', icon: <FrequentIcon className={iconsClassName}/>,
            },
            onClick: () => onItemClick('frequent'),
        },
        {
            content: {
                text: 'Low', icon: <LowIcon className={iconsClassName}/>,
            },
            onClick: () => onItemClick('low'),
        },
        {
            content: {
                text: 'Off', icon: <OffIcon className={iconsClassName}/>,
            },
            onClick: () => onItemClick('off'),
        },
    ];

    return (
        <DropdownMenu
            menuItems={menuItems}
            activeItem={activeItem}
            className={className}
        />
    );
}

NotificationsDropdownMenu.propTypes = {
    activeItem: PropTypes.string,
    onItemClick: PropTypes.func.isRequired,
    className: PropTypes.string,
};

NotificationsDropdownMenu.defaultProps = {
    activeItem: null,
    className: '',
};
