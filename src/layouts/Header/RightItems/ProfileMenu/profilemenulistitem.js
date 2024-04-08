import React from 'react';
import {userDrawerElementClasses as styles} from './profilemenu.styles';
import {getIconComponent} from '../../../../generic components/iconsmap';
import PropTypes from 'prop-types';

/**
 * User drawer element component
 * This component is used to render an element in the user drawer
 * @component
 * @param {string|JSX.Element} icon - The icon to be displayed, either the name of the icon or the icon component
 * @param {string|JSX.Element} mainLabel - The main label, can be text or a component
 * @param {string|JSX.Element} subLabel - The sub label below the main label (optional). Can be text or a component
 * @param {string} href - The href for the element
 * @example
 * // Render the user drawer element
 * <ProfileMenuListItem />
 * /
 * @return {JSX.Element} The user drawer element component
 */
function ProfileMenuListItem({icon = null, mainLabel = null, subLabel = null, href = '#'}) {
    if (typeof icon === 'string') {
        icon = getIconComponent(icon, false);
    }
    return (
        <a href={href} className={styles.root}>
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
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    mainLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    subLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    href: PropTypes.string,
};


export {ProfileMenuListItem};
