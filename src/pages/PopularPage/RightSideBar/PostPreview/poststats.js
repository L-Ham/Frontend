import React from 'react';
import {postStatsClasses as styles} from './postpreview.styles.js';
import PropTypes from 'prop-types';

/**
 * Post stats component.
 * @param {number} upvotes - The number of upvotes.
 * @param {number} comments - The number of comments.
 * @return {JSX.Element} The post stats component.
 */
function PostStats({upvotes, comments}) {
    return (
        <div className={styles.container}>
            <span>{upvotes}</span>
            {' upvote '}
            <span className={styles.dot}>·</span>
            <span>{comments}</span>
            <span>{' comment'}</span>
        </div>
    );
}

PostStats.propTypes = {
    upvotes: PropTypes.number.isRequired,
    comments: PropTypes.number.isRequired,
};

export {PostStats};
