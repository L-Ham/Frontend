import React from 'react';
import PropTypes from 'prop-types';
import {commentsClasses, commentsStyles} from './comments.styles.js';
import {useComments} from './comments.hooks.js';
/**
 * Comments Button component
 * @param {string} postId
 * @param {string} url
 * @param {number} commentCount
 * @return {React.Component}
 */
export function Comments({
    postId,
    url,
    commentCount,
}) {
    const {
        count,
        CommentsIcon,
    } = useComments({commentCount});
    return (
        <a
            className={commentsClasses.root}
            href={url}
            target='_self'
            style={commentsStyles.root}
            onClick={(e) => {
                e.stopPropagation();
                // check if id #comment exists
                const element = document.getElementById('#comment');
                if (element) {
                    e.target.scrollIntoView({
                        top: element.getBoundingClientRect().top + window.pageYOffset - 45,
                        behavior: 'smooth',
                    });
                }
            }}
            data-testid={`comments-button-${postId}`}
        >
            <div className={commentsClasses.wrapper} data-testid={`comments-wrapper-${postId}`}>
                <div className={commentsClasses.icon} data-testid={`comments-icon-${postId}`}>
                    <CommentsIcon />
                </div>
                <div data-testid={`comments-count-${postId}`}>{count}</div>
            </div>
        </a>
    );
}

Comments.propTypes = {
    postId: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    commentCount: PropTypes.number.isRequired,
};
