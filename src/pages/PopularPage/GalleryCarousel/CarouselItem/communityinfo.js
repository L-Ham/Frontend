import React from 'react';
import {communityInfoClasses as styles} from './carouselitem.styles.js';
import PropTypes from 'prop-types';

/**
 * Renders the community info component.
 * @param {string} imgSrc - The subreddit icon image source.
 * @param {string} communityName - The subreddit name.
 * @return {JSX.Element} The rendered community info component.
 */
function CommunityInfo({imgSrc, communityName}) {
    return (
        <div className={styles.container}>
            <span className={styles.iconContainer}>
                <img src={imgSrc}
                    alt="r/movies icon"
                    className={styles.icon}
                    width="24" height="24" loading="lazy"/>
            </span>
            <span className={styles.name}>{communityName}</span>
            <span className={styles.more}>and more</span>
        </div>
    );
}

CommunityInfo.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    communityName: PropTypes.string.isRequired,
};

export {CommunityInfo};
