import React from 'react';
import PropTypes from 'prop-types';
import {commentsStyles, commentsClasses} from './commentreply.styles';
import {getIconComponent} from '../../../../../../generic components/iconsmap.js';
import '../../../btn.css';

/**
 * Comments Button component
 * @param {string} postId
 * @param {string} url
 * @param {number} commentCount
 * @return {React.Component}
 */
export function CommentReply({
    commentId,
    showReply,
}) {
    const CommentsIcon = getIconComponent('comments', false);
    return (
        <div
            className="button button-plain !inline-flex
            items-center
            border-[0.125rem] !px-3
            text-sm text-[var(--color-secondary)] hover:bg-[var(--color-secondary-background-hover)]"
            style={commentsStyles.root}
            onClick={(e) => {
                e.stopPropagation();
                showReply();
            }}
            data-testid={`comments-button-${commentId}`}
        >
            <div className={commentsClasses.wrapper} data-testid={`comments-wrapper-${commentId}`}>
                <div className={commentsClasses.icon} data-testid={`comments-icon-${commentId}`}>
                    <CommentsIcon />
                </div>
                <span> Reply</span>
            </div>
        </div>
    );
}

CommentReply.propTypes = {
    commentId: PropTypes.string.isRequired,
    showReply: PropTypes.func.isRequired,
};
