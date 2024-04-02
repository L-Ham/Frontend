import React from 'react';
import PropTypes from 'prop-types';
import {commentsClasses, commentsStyles} from './comments.styles.js';
import {useComments} from './comments.hooks.js';
/**
 * Comments Button component
 * @param {string} postId
 * @return {React.Component}
 */
export function Comments({
    postId,
}) {
    const {
        permalink,
        commentCount,
        CommentsIcon,
    } = useComments({postId});
    return (
        <a
            className={commentsClasses.root}
            href={permalink}
            target='_self'
            style={commentsStyles.root}
            onClick={(e) => e.stopPropagation()}
            data-testid={`comments-button-${postId}`}
        >
            <div className={commentsClasses.wrapper} data-testid={`comments-wrapper-${postId}`}>
                <div className={commentsClasses.icon} data-testid={`comments-icon-${postId}`}>
                    <CommentsIcon />
                </div>
                <div data-testid={`comments-count-${postId}`}>{commentCount}</div>
            </div>
        </a>
    );
}

Comments.propTypes = {
    postId: PropTypes.string.isRequired,
};
