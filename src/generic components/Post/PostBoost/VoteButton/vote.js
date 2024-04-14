import React from 'react';
import PropTypes from 'prop-types';
import {voteStyles} from './vote.styles.js';
import {useVote} from './vote.hooks.js';
/**
 * Up/Down Vote Buttons component
 * @param {string} postId
 * @param {number} upvotes
 * @param {number} downvotes
 * @param {boolean} isUpvoted
 * @param {boolean} isDownvoted
 * @return {React.Component}
 */
export function Vote({
    postId,
    upvotes,
    downvotes,
    isUpvoted,
    isDownvoted,
}) {
    // 0 not voted, 1 upvoted, -1 downvoted
    const {
        score,
        UpvoteIcon,
        DownvoteIcon,
        handleDownvote,
        handleUpvote,
        rootClasses,
        upvoteClasses,
        downvoteClasses,
    } = useVote({upvotes, downvotes, isUpvoted, isDownvoted});
    return (
        <div className={rootClasses}>
            <button
                className={upvoteClasses}
                onClick={handleUpvote}
                title="Upvote"
                data-testid={`upvote-${postId}`}
            >
                <UpvoteIcon />
            </button>
            <div style={voteStyles.score} data-testid={`score-${postId}`}>{score}</div>
            <button
                className={downvoteClasses}
                onClick={handleDownvote}
                title="Downvote"
                data-testid={`downvote-${postId}`}
            >
                <DownvoteIcon />
            </button>
        </div>
    );
}

Vote.propTypes = {
    postId: PropTypes.string.isRequired,
    upvotes: PropTypes.number.isRequired,
    downvotes: PropTypes.number.isRequired,
    isUpvoted: PropTypes.bool.isRequired,
    isDownvoted: PropTypes.bool.isRequired,
};
