import React from 'react';
import PropTypes from 'prop-types';
import {useCommentsVote} from './commentvote.hooks';
import {voteStyles} from './commentvote.styles';
/**
 * Renders CommentVote Component
 * @return {JSX.Element} The rendered CommentVote component.
 */
export function CommentVote({
    commentId,
    score,
    isUpvoted,
    isDownvoted,
}) {
    const {
        handleUpvote,
        handleDownvote,
        UpvoteIcon,
        DownvoteIcon,
        rootClasses,
        upvoteClasses,
        actualScore,
        downvoteClasses,
    } = useCommentsVote({commentId, score, isUpvoted, isDownvoted});
    return (
        <div className={rootClasses}>
            <button
                className={upvoteClasses}
                onClick={handleUpvote}
                title="Upvote"
                data-testid={`upvote-${commentId}`}
            >
                <UpvoteIcon />
            </button>
            <div style={voteStyles.score} data-testid={`score-${commentId}`}>{actualScore}</div>
            <button
                className={downvoteClasses}
                onClick={handleDownvote}
                title="Downvote"
                data-testid={`downvote-${commentId}`}
            >
                <DownvoteIcon />
            </button>
        </div>
    );
}

CommentVote.propTypes = {
    commentId: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    isUpvoted: PropTypes.bool.isRequired,
    isDownvoted: PropTypes.bool.isRequired,
};
