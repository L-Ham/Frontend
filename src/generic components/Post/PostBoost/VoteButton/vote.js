import React from 'react';
import PropTypes from 'prop-types';
import {voteClasses, voteStyles} from './vote.styles.js';
import {useVote} from './vote.hooks.js';
/**
 * Up/Down Vote Buttons component
 * @param {string} postId
 * @return {React.Component}
 */
export function Vote({
    postId,
}) {
    const {
        score,
        UpvoteIcon,
        DownvoteIcon,
    } = useVote({postId});
    return (
        <div className={voteClasses.root}>
            <button
                className={voteClasses.upvote}
                onClick={(e) => e.stopPropagation()}
                title="Upvote"
                data-testid={`upvote-${postId}`}
            >
                <UpvoteIcon />
            </button>
            <div style={voteStyles.score} data-testid={`score-${postId}`}>{score}</div>
            <button
                className={voteClasses.downvote}
                onClick={(e) => e.stopPropagation()}
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
};
