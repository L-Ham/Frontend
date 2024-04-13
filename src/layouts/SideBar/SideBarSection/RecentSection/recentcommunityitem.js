import React from 'react';
import {NavLink} from 'react-router-dom';
import {sectionItemsClasses as styles} from '../sidebarsection.styles.js';
import PropTypes from 'prop-types';

/**
 * The sidebar recent community component
 * @component
 * @param {string} imgURL - The URL of the image
 * @param {string} label - The text to be displayed
 * @param {string} href - The link to be redirected to
 * @example
 * // Render the sidebar recent community
 * <SidebarRecentCommunity />
 * @return {JSX.Element} The sidebar recent community component
 */
function RecentCommunityItem({imgURL, label, href}) {
    return (
        <NavLink to={href} className={styles.root} data-testid={`recent-community-item-${label}`}>
            <span className={styles.leftItemsWrapper}>
                <span className={styles.leftIconContainer}>
                    <img src={imgURL} alt={label} className={styles.img} />
                </span>
                <span className={styles.label}>{label}</span>
            </span>
        </NavLink>
    );
}

RecentCommunityItem.propTypes = {
    imgURL: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export {RecentCommunityItem};
