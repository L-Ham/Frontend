import React from 'react';
import PropTypes from 'prop-types';
import {DropdownMenu} from '../../../General/Components/DropdownMenu/dropdownmenu.js';
import {classes} from './notificationfrequencycontrol.styles';
import {useNotificationFrequencyControl} from './notificationfrequencycontrol.hooks';
import {buttonClasses} from '../../../subreddit.styles.js';

/**
 * NotificationFrequencyControl component
 * @component
 * @param {Object} props - The component props
 * @param {string} props.notificationLevel - The notification level
 * @param {string} props.setNotificationLevel - The set notification level
 * @return {JSX.Element} The NotificationFrequencyControl component
 */
export function NotificationFrequencyControl(
    {notificationLevel, setNotificationLevel}) {
    const {isNotificationLevelsVisible,
        NotificationLevelIcon,
        menuItems,
        handleNotificationClick} = useNotificationFrequencyControl(notificationLevel, setNotificationLevel);

    return (
        <div className={classes.container}>
            <button
                className={buttonClasses.notificationFrequncyButton}
                onClick={handleNotificationClick}
            >
                <span className={classes.button}>
                    <span className={classes.iconContainer}>
                        {NotificationLevelIcon && <NotificationLevelIcon/>}
                    </span>
                </span>
            </button>
            <DropdownMenu
                position="top-[48px] right-0"
                items={menuItems} activeItem = {notificationLevel} isHidden={!isNotificationLevelsVisible}
            />
        </div>
    );
}

NotificationFrequencyControl.propTypes = {
    notificationLevel: PropTypes.string,
    setNotificationLevel: PropTypes.func,
};
