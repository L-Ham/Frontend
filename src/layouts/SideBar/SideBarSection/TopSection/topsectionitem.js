import React from 'react';
import {getIconComponent} from '../../../../generic components/iconsmap';
import {NavLink} from 'react-router-dom';
import {sectionItemsClasses as styles} from '../sidebarsection.styles';
import PropTypes from 'prop-types';

/**
 * The sidebar section summary/header component
 * @component
 * @param {string} icon - The icon to be displayed
 * @param {string} label - The text to be displayed
 * @param {string} href - The link to be redirected to
 * @example
 * // Render the sidebar section summary/header
 * <SideBarSectionItem />
 * @return {JSX.Element} The sidebar section summary/header component
 */
function TopSectionItem({icon, label, href}) {
    const IconOutline = getIconComponent(icon, false);
    const IconFilled = getIconComponent(icon, true);
    const isActive = window.location.pathname === href;
    const rootStyles = isActive ? `${styles.root} ${styles.active}` : `${styles.root} ${styles.inactive}`;
    return (
        <NavLink to={href} className={rootStyles}>
            <span className={styles.leftItemsWrapper}>
                <span className={styles.leftIconContainer}>
                    {
                        isActive? <IconFilled /> : <IconOutline />
                    }
                </span>
                <span className={styles.label}>{label}</span>
            </span>
        </NavLink>
    );
}

TopSectionItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
};


export {TopSectionItem};
