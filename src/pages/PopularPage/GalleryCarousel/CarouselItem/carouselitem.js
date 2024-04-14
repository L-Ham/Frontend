/* eslint-disable max-len */
import React from 'react';
import '../../popularpage.css';
import {CarouselItemContent} from './carouselitemcontent.js';
import {carouselItemClasses as styles} from './carouselitem.styles.js';
import PropTypes from 'prop-types';

/**
 * Renders the carousel item component.
 * @param {string} imgSrc - The image source of the carousel item.
 * @param {string} title - The title of the carousel item.
 * @param {string} description - The description of the carousel item.
 * @param {string} communityImgSrc - The image source of the community.
 * @param {string} communityName - The name of the community.
 * @param {string} href - The url of the carousel item.
 * @return {JSX.Element} The rendered carousel item component.
 */
function CarouselItem({imgSrc, title, description, communityImgSrc, communityName, href}) {
    return (
        <div className={styles.container}>
            <li className={styles.listItem}>
                <a href={href} className={styles.anchor}>
                    <img loading='lazy'
                        src={imgSrc}
                        className={styles.img}/>
                    <div className={styles.content}>
                        <CarouselItemContent
                            title={title}
                            description={description}
                            imgSrc={communityImgSrc}
                            communityName={communityName}
                        />
                    </div>
                </a>

            </li>
        </div>
    );
}

CarouselItem.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    communityImgSrc: PropTypes.string.isRequired,
    communityName: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export {CarouselItem};
