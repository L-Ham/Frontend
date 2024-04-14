import React from 'react';
import {CommunityInfo} from './communityinfo.js';
import {carouselItemContentClasses, carouselItemContentStyles} from './carouselitem.styles.js';
import PropTypes from 'prop-types';

/**
 * Renders the carousel item content component.
 * @param {string} title - The title of the carousel item.
 * @param {string} description - The description of the carousel item.
 * @param {string} imgSrc - The image source of the carousel item.
 * @param {string} communityName - The name of the community.
 * @return {JSX.Element} The rendered carousel item content component.
 */
function CarouselItemContent({title, description, imgSrc, communityName}) {
    return (
        <div className={carouselItemContentClasses.container}
            // eslint-disable-next-line max-len
            style={carouselItemContentStyles.container}
        >
            <h2 className={carouselItemContentClasses.title}>
                {title}
            </h2>
            <p className={carouselItemContentClasses.description}>
                {description}
            </p>
            <CommunityInfo
                imgSrc={imgSrc}
                communityName={communityName}
            />
        </div>
    );
}

CarouselItemContent.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    communityName: PropTypes.string.isRequired,
};

export {CarouselItemContent};
