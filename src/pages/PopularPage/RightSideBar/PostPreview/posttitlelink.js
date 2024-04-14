import React from 'react';
import {postTitleLinkClasses as styles} from './postpreview.styles.js';
import PropTypes from 'prop-types';

/**
 * Renders the post title link component.
 * @param {string} postUrl - The post URL.
 * @param {string} postTitle - The post title.
 * @return {JSX.Element} The post title link component.
 */
function PostTitleLink({postUrl, postTitle}) {
    return (
        <a className={styles.anchor} href={postUrl} data-testid="post-link">
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h3 className={styles.title} title={postTitle} aria-label={`List item post-${postTitle}`}
                        data-testid="post-title">
                        {postTitle}
                    </h3>
                </div>
            </div>
        </a>
    );
}

PostTitleLink.propTypes = {
    postUrl: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired,
};

export {PostTitleLink};
