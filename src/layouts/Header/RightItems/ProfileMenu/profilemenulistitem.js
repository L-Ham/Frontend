import React from 'react';
import {profileMenuListItem as styles} from './profilemenu.styles.js';
import PropTypes from 'prop-types';

/**
 * User drawer element component
 * This component is used to render an element in the user drawer
 * @component
 * @param {JSX.Element} icon - The icon to be displayed
 * @param {string|JSX.Element} mainLabel - The main label, can be text or a component
 * @param {string|JSX.Element} subLabel - The sub label below the main label (optional). Can be text or a component
 * @param {string} href - The href for the element
 * @example
 * // Render the user drawer element
 * <ProfileMenuListItem />
 * /
 * @return {JSX.Element} The user drawer element component
 */
function ProfileMenuListItem({icon, mainLabel, subLabel, href}) {
    return (
        <a href={href} className={styles.root} data-testid={`profile-menu-list-item-${mainLabel}`}>
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

        </a>
    );
}

ProfileMenuListItem.propTypes = {
    icon: PropTypes.element.isRequired,
    mainLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    subLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    href: PropTypes.string,
};


export {ProfileMenuListItem};
