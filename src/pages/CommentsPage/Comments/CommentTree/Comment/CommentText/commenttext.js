import React from 'react';
import '../../../../../../generic components/Post/PostContent/PostText/md.css';
import PropTypes from 'prop-types';

/**
 * Renders CommentText Component
 * @return {JSX.Element} The rendered CommentText component.
 */
export function CommentText({text, commentId}) {
    return (
        <div className='md rounded-[8px] pb-1 text-sm text-[var(--color-tone-1)]' data-testid={`content-${commentId}`}>
            <div className='mx-1 inline-block max-w-full py-0 xs:mx-2'>
                {text}
            </div>
        </div>
    );
}


CommentText.propTypes = {
    text: PropTypes.string.isRequired,
    commentId: PropTypes.string.isRequired,
};
