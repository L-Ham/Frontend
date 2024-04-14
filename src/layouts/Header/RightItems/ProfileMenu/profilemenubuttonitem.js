import React from 'react';
import {profileMenuListItem as styles} from './profilemenu.styles.js';
import PropTypes from 'prop-types';

/**
 * Profile Menu element component
 * This component is used to render an element in the menu
 * @component
 * @param {JSX.Element} icon - The icon to be displayed
 * @param {string|JSX.Element} mainLabel - The main label, can be text or a component
 * @param {string|JSX.Element} subLabel - The sub label below the main label (optional). Can be text or a component
 * @param {function} onClick - The function to be executed when the button is clicked
 * @example
 * // Render the profile menu element
 * <ProfileMenuButtonItem />
 * /
 * @return {JSX.Element} The profile menu element component
 */
function ProfileMenuButtonItem({icon, mainLabel, subLabel, onClick}) {
    return (
        <button onClick={onClick} className={styles.root} data-testid={`profile-menu-button-item-${mainLabel}`}>
            <span className={styles.elementContainer}>
                <span className={styles.iconContainer}>
                    {icon}
                </span>
                <span className={styles.labelContainer}>
                    <span className={styles.mainLabel}>
                        {mainLabel}
                    </span>
                    {subLabel && (
                        <span className={styles.subLabel}>
                            {subLabel}
                        </span>
                    )}

                </span>
            </span>

        </button>
    );
}

ProfileMenuButtonItem.propTypes = {
    icon: PropTypes.element.isRequired,
    mainLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    subLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    onClick: PropTypes.func.isRequired,
};


export {ProfileMenuButtonItem};
