import React from 'react';
import PropTypes from 'prop-types';
/**
 * PostFooter component
 * @param {number} score
 * @param {number} commentCount
 * @return {React.Component}
 */
function PostFooter({
    score,
    commentCount,
}) {
    return (
        <div className='text-xs text-[var(--color-neutral-content-weak)]'>
            <span>
                {`${score} votes `}
            </span>
            <span className="mx-1">·</span>
            <span>
                {`${commentCount} comments`}
            </span>
        </div>
    );
}

PostFooter.propTypes = {
    score: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
};

export {PostFooter};
