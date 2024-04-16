import React from 'react';
import {NavLink} from 'react-router-dom';
import {sectionItemsClasses as styles} from '../sidebarsection.styles.js';
import {useCommunityItem} from './community.hooks.js';
import PropTypes from 'prop-types';
import defaultSubreddit from '../../../../assets/icons/default-subreddit.svg';

/**
 * The sidebar community component
 * @component
 * @param {string} imgURL - The URL of the image
 * @param {string} communityName - The text to be displayed
 * @param {string} communityId - The id of the community
 * @param {boolean} isFavorite - The favorite status of the community
 * @example
 * // Render the sidebar community
 * <SidebarCommunity />
 * @return {JSX.Element} The sidebar community component
 */
function CommunityItem({imgURL, communityName, communityId, isFavorite}) {
    const {handleStar, StarIcon} = useCommunityItem({communityId, isFavorite});
    imgURL = imgURL || defaultSubreddit;
    // console.log({imgURL, communityName, communityId, isFavorite});
    return (
        <NavLink to={'/r/' + communityName} className={styles.root} data-testid={`community-item-${communityName}`}>
            <span className={styles.leftItemsWrapper}>
                <span className={styles.leftIconContainer}>
                    <img src={imgURL} alt={communityName} className={styles.img} />
                </span>
                <span className={styles.label}>{communityName}</span>
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
    communityName: PropTypes.string.isRequired,
    communityId: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
};

export {CommunityItem};
