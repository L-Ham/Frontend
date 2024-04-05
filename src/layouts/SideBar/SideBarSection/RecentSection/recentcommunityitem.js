/* eslint-disable max-len */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {sectionItemsClasses as styles} from '../sidebarsection.styles';
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
function RecentCommunityItem({imgURL='https://styles.redditmedia.com/t5_323oy/styles/communityIcon_wqodb68q5gca1.jpg?format=pjpg&s=41993445a49aa828a9f9996e00867bb94fb03269',
    label='r/CasualConversation', href='https://www.reddit.com/r/CasualConversation/'}) {
    return (
        <NavLink to={href} className={styles.root}>
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
    imgURL: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
};

export {RecentCommunityItem};
