import React from 'react';
import PropTypes from 'prop-types';
import {Comment} from './Comment/comment.js';
import {Fallback} from './Fallback/fallback';
import {Sorter} from './Sorter/sorter';
/**
 * Renders CommentTree Components
 * @param {string} postId
 * @return {JSX.Element} The rendered CommentTree component.
 */
export function CommentTree({
    postId,
}) {
    const comments = [];
    return (
        <div className='relative flex flex-col gap-4 px-4 xs:px-0' data-testid={`commentTree-${postId}`}>
            {comments.length === 0 ?
                <Fallback />:
                <>
                    <Sorter />
                    <Comment
                        commentId='1'
                        userId='1'
                        type='text'
                        text='This is a comment'
                        score={1}
                        createdAt='2022-01-01T00:00:00.000Z'
                    />
                </>}
        </div>
    );
}

CommentTree.propTypes = {
    postId: PropTypes.string.isRequired,
};
