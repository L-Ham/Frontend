import React from 'react';
import PropTypes from 'prop-types';
import {Vote} from './VoteButton/vote.js';
import {Comments} from './CommentButton/comments.js';
import {Share} from './ShareButton/share.js';
import {usePostBoost} from './postboost.hooks.js';
/**
 * PostBoost (Post footer) component
 * @param {string} postId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostBoost({
    postId,
    viewContext,
}) {
    const {
        classNames,
    } = usePostBoost({viewContext});
    return (
        <div className={classNames} data-testid={`post-footer-${postId}`}>
            <Vote postId={postId} />
            <Comments postId={postId} />
            <Share postId={postId} />
        </div>
    );
}

PostBoost.propTypes = {
    postId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
