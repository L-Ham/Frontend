import React from 'react';
import PropTypes from 'prop-types';
import {Vote} from './VoteButton/vote.js';
import {Comments} from './CommentButton/comments.js';
import {Share} from './ShareButton/share.js';
import {usePostBoost} from './postboost.hooks.js';
import {VIEW_CONTEXTS} from '../data.js';
/**
 * PostBoost (Post footer) component
 * @param {string} postId
 * @param {number} upvotes
 * @param {number} downvotes
 * @param {boolean} isUpvoted
 * @param {boolean} isDownvoted
 * @param {number} commentCount
 * @param {string} url
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostBoost({
    postId,
    upvotes,
    downvotes,
    isUpvoted,
    isDownvoted,
    commentCount,
    url,
    viewContext,
}) {
    const {
        classNames,
    } = usePostBoost({viewContext});
    return (
        <div className={classNames} data-testid={`post-footer-${postId}`}>
            <Vote
                postId={postId}
                upvotes={upvotes}
                downvotes={downvotes}
                isUpvoted={isUpvoted}
                isDownvoted={isDownvoted}
            />
            <Comments
                postId={postId}
                url={viewContext===VIEW_CONTEXTS.COMMENTS_PAGE ? '#comment' : url}
                commentCount={commentCount}
            />
            <Share postId={postId} url={url}/>
        </div>
    );
}

PostBoost.propTypes = {
    postId: PropTypes.string.isRequired,
    upvotes: PropTypes.number.isRequired,
    downvotes: PropTypes.number.isRequired,
    isUpvoted: PropTypes.bool.isRequired,
    isDownvoted: PropTypes.bool.isRequired,
    commentCount: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
