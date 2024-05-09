import React from 'react';
import {CommentText} from './CommentText/commenttext';
import PropTypes from 'prop-types';

/**
 * Renders CommentContent Component
 *
 * @return {JSX.Element} The rendered CommentContent component.
 */
export function CommentContent({
    commentId,
    content,
    commentType,
    text,
}) {
    return (
        <div>
            {commentType === 'text' && <CommentText text={text} commentId={commentId} />}
            {commentType === 'image' && <img src={content} alt='content' className='size-32 rounded-[8px]' />}
            {commentType === 'link' && <a href={content} className='text-[var(--color-primary)]'>{content || text}</a>}
        </div>
    );
}

CommentContent.propTypes = {
    commentId: PropTypes.string.isRequired,
    content: PropTypes.string,
    commentType: PropTypes.oneOf(['text', 'image', 'link']).isRequired,
    text: PropTypes.string,
};
