import React from 'react';
import PropTypes from 'prop-types';
import {titleClasses} from './posttitle.styles';
/**
 * PostTitle component
 * @param {string} postId
 * @param {string} title
 * @param {boolean} isCommentsPage
 * @return {React.Component}
 */
export function PostTitle({
    postId,
    title,
    isCommentsPage,
}) {
    return (
        <>
            {isCommentsPage ?
                <h1 className={titleClasses.h1} data-testid={`title-${postId}`}>
                    {title}
                </h1> :
                <div className={titleClasses.div} data-testid={`title-${postId}`}>
                    {title}
                </div>
            }
        </>
    );
}

PostTitle.propTypes = {
    postId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isCommentsPage: PropTypes.bool.isRequired,
};

