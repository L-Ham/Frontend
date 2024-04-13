import React from 'react';
import {searchTrendingItemClasses as styles} from './search.styles.js';
import PropTypes from 'prop-types';

/**
 * Search trending item component
 * @component
 * @param {string} title - The title of the search trending item
 * @param {string} description - The description of the search trending item
 * @param {string} subredditIconURL - The URL of the subreddit icon
 * @param {string} subredditName - The name of the subreddit
 * @param {string} imageURL - The URL of the image
 * @example
 * // Render the search trending item
 * <SearchTrendingItem />
 * @return {JSX.Element} The search trending item component
 */
function SearchTrendingItem({title, description, subredditIconURL,
    subredditName, imageURL, href}) {
    return (
        <a className={styles.root} href={href}
            role='menuitem' tabIndex='-1' data-testid={`search-trending-item-${title}`}>
            <span className={styles.itemWrapper}>
                <span className={styles.itemContainer}>
                    <span className={styles.titleContainer}>
                        <span className={styles.title}>
                            {title}
                        </span>
                    </span>
                    <span className={styles.descriptionContainer}>
                        <span className={styles.description}>
                            {description}
                        </span>
                        <div className={styles.subreddit}>

                            <img className={styles.subredditIcon}
                                loading='lazy'
                                src={subredditIconURL}
                                width='16' height='16' alt='Icon for r/'></img>

                            <span>{subredditName}</span>
                        </div>
                    </span>
                </span>
            </span>
            <span className={styles.imageWrapper}>
                <span className={styles.imageContainer}>
                    <img className={styles.image}
                        loading='lazy' src={imageURL} alt=''/>
                </span>
            </span>
        </a>
    );
}

SearchTrendingItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    subredditIconURL: PropTypes.string.isRequired,
    subredditName: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
};

export {SearchTrendingItem};
