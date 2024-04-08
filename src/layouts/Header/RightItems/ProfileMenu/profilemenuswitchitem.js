import React from 'react';
import {CustomSwitch as SwitchComponent} from './switch.js';
import {userDrawerElementClasses as styles} from './profilemenu.styles.js';
import {getIconComponent} from '../../../../generic components/iconsmap.js';
import PropTypes from 'prop-types';


/**
 * Profile menu switch item component
 * @component
 * @param {string|JSX.Element} icon - The icon to be displayed, either the name of the icon or the icon component
 * @param {string} label - The main label, can be text or a component
 * @example
 * // Render the profile menu switch item
 * <ProfileMenuSwitchItem />
 * @return {JSX.Element} The profile menu switch item component
 */
function ProfileMenuSwitchItem({icon, label}) {
    if (typeof icon === 'string') {
        icon = getIconComponent(icon, false);
    }
    return (
        <label>
            <div className={styles.switchItem}>
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
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    label: PropTypes.string,
};

export {ProfileMenuSwitchItem};
