import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders Comment Component
 * @param {string} commentId
 * @param {string} userId
 * @param {string} type
 * @param {string} text
 * @param {string} image
 * @param {number} score
 * @param {string} createdAt
 * @return {JSX.Element} The rendered Comment component.
 */
export function Comment({
    commentId,
    userId,
    type,
    text,
    image,
    score,
    createdAt,
}) {
    return (
        <div className='flex flex-col gap-4'>
            Comment
        </div>
    );
}

Comment.propTypes = {
    commentId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    image: PropTypes.string,
    score: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
};
