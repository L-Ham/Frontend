import React from 'react';
import PropTypes from 'prop-types';
import {bannerClasses} from './banner.styles.js';
/**
 * Banner component
 * @param {string} subredditId
 * @param {string} bannerLink
 * @return {React.Component}
 */
export function Banner({
    subredditId,
    bannerLink,
}) {
    return (
        <div className={bannerClasses.banner}>
            <img
                src={bannerLink}
                alt='Subreddit Icon'
                className={bannerClasses.bannerImage}
                data-testid={`subreddit-overlay-banner-${subredditId}`}
            />
        </div>
    );
}

Banner.propTypes = {
    subredditId: PropTypes.string.isRequired,
    bannerLink: PropTypes.string.isRequired,
};
