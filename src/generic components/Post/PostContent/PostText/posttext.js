import React from 'react';
import PropTypes from 'prop-types';
import {textStyles} from './posttext.styles.js';
import {usePostText} from './posttext.hooks.js';
import './md.css';
/**
 * PostText component
 * @param {string} postId
 * @param {string} content
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostText({
    postId,
    content,
    viewContext,
}) {
    const {
        classNames,
        postContent,
    } = usePostText({content, viewContext});
    return (
        <div className={classNames} data-testid={`content-${postId}-${viewContext}`} style={textStyles.root}>
            {postContent}
        </div>
    );
}

PostText.propTypes = {
    postId: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
