import React from 'react';
import {NavLink} from 'react-router-dom';
import {sectionItemsClasses as styles} from '../sidebarsection.styles';
import {useCommunityItem} from './community.hooks';
import PropTypes from 'prop-types';


/**
 * The sidebar community component
 * @component
 * @param {string} imgURL - The URL of the image
 * @param {string} label - The text to be displayed
 * @param {string} href - The link to be redirected to
 * @example
 * // Render the sidebar community
 * <SidebarCommunity />
 * @return {JSX.Element} The sidebar community component
 */
function CommunityItem({imgURL, label, href}) {
    const {handleStar, StarIcon} = useCommunityItem();
    return (
        <NavLink to={href} className={styles.root}>

            <span className={styles.leftItemsWrapper}>
                <span className={styles.leftIconContainer}>
                    <img src={imgURL} alt={label} className={styles.img} />
                </span>
                <span className={styles.label}>{label}</span>
            </span>
            <button
                className={styles.button}
                onClick={handleStar}
            >
                <StarIcon />
            </button>
        </NavLink>
    );
}

CommunityItem.propTypes = {
    imgURL: PropTypes.string,
    label: PropTypes.string,
    href: PropTypes.string,
};

export {CommunityItem};
