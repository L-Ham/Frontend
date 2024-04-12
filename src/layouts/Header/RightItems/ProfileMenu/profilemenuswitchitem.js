import React from 'react';
import {CustomSwitch as SwitchComponent} from './switch.js';
import {userDrawerElementClasses as styles} from './profilemenu.styles.js';
import PropTypes from 'prop-types';


/**
 * Profile menu switch item component
 * @component
 * @param {JSX.Element} icon - The icon to be displayed
 * @param {string} label - The main label, can be text or a component
 * @example
 * // Render the profile menu switch item
 * <ProfileMenuSwitchItem />
 * @return {JSX.Element} The profile menu switch item component
 */
function ProfileMenuSwitchItem({icon, label}) {
    return (
        <label>
            <div className={styles.switchItem} data-testid={`profile-menu-switch-item-${label}`} >
                <span className={styles.elementContainer}>
                    <span className={styles.iconContainer}>
                        {icon}
                    </span>
                    <span className={styles.labelContainer}>
                        <span className={styles.mainLabel}>
                            {label}
                        </span>
                    </span>
                </span>
                <span className={styles.switchContainer}>
                    <span className={styles.switchWrapper}>
                        <SwitchComponent/>
                    </span>
                </span>
            </div>
        </label>
    );
}

ProfileMenuSwitchItem.propTypes = {
    icon: PropTypes.PropTypes.element.isRequired,
    label: PropTypes.string.isRequired,
};

export {ProfileMenuSwitchItem};
