import React from 'react';
import PropTypes from 'prop-types';
import './DropdownMenu.css';
import {ReactComponent as NotificationIconFill} from '../assets/icons/notification-fill.svg';
import {ReactComponent as NotificationFrequentIconFill} from '../assets/icons/notification-frequent-fill.svg';
import {ReactComponent as NotificationOffIconFill} from '../assets/icons/notification-off-fill.svg';
import {ReactComponent as NotificationIconOutline} from '../assets/icons/notification-outline.svg';
import {ReactComponent as NotificationFrequentIconOutline} from '../assets/icons/notification-frequent-outline.svg';
import {ReactComponent as NotificationOffIconOutline} from '../assets/icons/notification-off-outline.svg';

const iconComponents = {
    'notification-fill': NotificationIconFill,
    'notification-frequent-fill': NotificationFrequentIconFill,
    'notification-off-fill': NotificationOffIconFill,
    'notification-outline': NotificationIconOutline,
    'notification-frequent-outline': NotificationFrequentIconOutline,
    'notification-off-outline': NotificationOffIconOutline,
};

/**
 * Returns the icon component for the dropdown menu item.
 * @param {string} iconName - The name of the icon.
 * @param {boolean} isActive - Whether the icon is active.
 * @return {JSX.Element} The icon component.
 */
const getIconComponent = (iconName, isActive) => {
    if (!iconName) return null;
    const iconSuffix = isActive ? '-fill' : '-outline';
    const IconComponent = iconComponents[`${iconName}${iconSuffix}`];
    return IconComponent ? <IconComponent className='icon' /> : null;
};

/**
 * DropdownMenu component.
 * @param {Object} props - Component props.
 * @param {Array} props.menuItems - Array of menu items.
 * example:
 * [
 *  {
 *     content: {
 *        text: 'Notification',
 *       icon: 'notification',
 *  },
 * onClick: () => {
 *    console.log('Notification clicked');
 * },
 * },
 * {
 *  content: {
 *    text: 'Frequent Notification',
 *  icon: 'notification-frequent',
 * },
 * onClick: () => {
 *   console.log('Frequent Notification clicked');
 * },
 * },
 * ]
 * @param {string} props.activeItem - Active item in the dropdown menu.
 * @param {function} props.onActiveItemChange - Function to handle active item change.
 * @return {JSX.Element} DropdownMenu component.
 */
export function DropdownMenu({
    menuItems,
    activeItem,
},
) {
    return (
        <div className="dropdown-menu">
            {menuItems.map((item) => {
                const containsIcon = item.content.icon;
                const isActive = (activeItem && activeItem === item.content.icon);
                const Icon = getIconComponent(item.content.icon, isActive);
                return (
                    <div
                        className={
                            `dropdown-menu__item ${(isActive) ?
                                'active' : '' }`
                        }
                        key={item.content.text}
                        onClick={item.onClick}
                    >
                        {containsIcon && Icon}
                        <span>{item.content.text}</span>
                    </div>
                );
            })}
        </div>
    );
}

DropdownMenu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.shape({
        content: PropTypes.shape({
            text: PropTypes.string.isRequired,
            icon: PropTypes.string,
        }).isRequired,
        onClick: PropTypes.func.isRequired,
    })).isRequired,
    activeItem: PropTypes.string,
    onActiveItemChange: PropTypes.func,
};
