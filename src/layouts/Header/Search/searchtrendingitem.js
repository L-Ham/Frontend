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
function SearchTrendingItem({
    data: {
        postId,
        title,
        text,
        image,
        subreddit,
        subRedditId,
        avatarImage,
    },
}) {
    return (
        <a className={styles.root} href={`/r/${subreddit}/comments/${postId}`}
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
                            {text}
                        </span>
                        <div className={styles.subreddit}>

                            <img className={styles.subredditIcon}
                                loading='lazy'
                                src={avatarImage??'https://placehold.co/400'}
                                width='16' height='16' alt='Icon for r/'></img>

                            <span>{subreddit}</span>
                        </div>
                    </span>
                </span>
            </span>
            <span className={styles.imageWrapper}>
                <span className={styles.imageContainer}>
                    <img className={styles.image}
                        loading='lazy' src={image} alt=''/>
                </span>
            </span>
        </a>
    );
}

SearchTrendingItem.propTypes = {
    data: PropTypes.shape({
        postId: PropTypes.string,
        title: PropTypes.string,
        text: PropTypes.string,
        image: PropTypes.string,
        subreddit: PropTypes.string,
        subRedditId: PropTypes.string,
        avatarImage: PropTypes.string,
    }),
};

export {SearchTrendingItem};
