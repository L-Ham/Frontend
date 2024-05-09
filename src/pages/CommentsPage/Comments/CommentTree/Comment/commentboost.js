import React from 'react';
import PropTypes from 'prop-types';
import '../../btn.css';
import {CommentVote} from './Vote/commentvote';
import {CommentReply} from './Reply/commentreply';
import {CommentTextField} from '../../MakeComment/makecomment';
import {ShareComment} from './Share/commentshare';
/**
 * Renders CommentBoost Component
 *
 * @return {JSX.Element} The rendered CommentBoost component.
 */
export function CommentBoost({
    postId,
    commentId,
    score,
    isUpvoted,
    isDownvoted,
}) {
    const [showReply, setShowReply] = React.useState(false);
    return (
        <div className='flex flex-col pt-2'>
            <div className='flex max-h-12 items-center'>
                <CommentVote
                    commentId={commentId}
                    score={score}
                    isUpvoted={isUpvoted}
                    isDownvoted={isDownvoted}
                />
                <CommentReply commentId={commentId} showReply={() => setShowReply(true)}/>
                <ShareComment />
            </div>
            {showReply &&
            <CommentTextField
                postId={postId}
                commentId={commentId}
                onCancel={() => setShowReply(false)}
            />}
        </div>
    );
}

CommentBoost.propTypes = {
    postId: PropTypes.string.isRequired,
    commentId: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    isUpvoted: PropTypes.bool.isRequired,
    isDownvoted: PropTypes.bool.isRequired,
};
