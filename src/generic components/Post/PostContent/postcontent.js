import React from 'react';
import PropTypes from 'prop-types';
import {contentClasses} from './postcontent.styles.js';
import {usePostContent} from './postcontent.hooks.js';
/**
 * PostContent component
 * @param {string} postId
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostContent({
    postId,
    viewContext,
}) {
    const {
        postContent,
    } = usePostContent({postId, viewContext});
    return (
        <div className={contentClasses.root}>
            {postContent}
        </div>
    );
}

PostContent.propTypes = {
    postId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
