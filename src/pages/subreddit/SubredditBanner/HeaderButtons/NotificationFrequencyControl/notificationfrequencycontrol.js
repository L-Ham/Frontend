import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from '../../../General/Components/DropdownMenu/dropdownmenu.js';
import {classes} from './notificationfrequencycontrol.styles.js';
import {useNotificationFrequencyControl} from './notificationfrequencycontrol.hooks.js';
import {buttonClasses} from '../../../subreddit.styles.js';

/**
 * NotificationFrequencyControl component
 * @component
 * @param {Object} props - The component props
 * @param {string} props.notificationLevel - The notification level
 * @param {string} props.setNotificationLevel - The set notification level
 * @return {JSX.Element} The NotificationFrequencyControl component
 */
export function NotificationFrequencyControl({notificationLevel=null, setNotificationLevel}) {
    const {isNotificationLevelsVisible,
        NotificationLevelIcon,
        menuItems,
        handleNotificationClick} = useNotificationFrequencyControl({notificationLevel, setNotificationLevel});

    return (
        <div className={classes.container} data-testid="notification-frequency-control-container">
            <button
                className={buttonClasses.notificationFrequncyButton}
                onClick={handleNotificationClick}
                data-testid="notification-frequency-button"
            >
                <span className={classes.button} data-testid="button-span">
                    <span className={classes.iconContainer} data-testid="icon-container">
                        {NotificationLevelIcon && <NotificationLevelIcon data-testid="notification-level-icon"/>}
                    </span>
                </span>
            </button>
            <DropdownMenu
                position="top-[48px] right-0"
                items={menuItems}
                activeItem={notificationLevel}
                isHidden={!isNotificationLevelsVisible}
                data-testid="dropdown-menu"
            />
        </div>
    );
}

NotificationFrequencyControl.propTypes = {
    notificationLevel: PropTypes.string,
    setNotificationLevel: PropTypes.func.isRequired,
};
