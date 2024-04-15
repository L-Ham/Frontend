import React from 'react';
import PropTypes from 'prop-types';
import {contentClasses} from './postcontent.styles.js';
import {usePostContent} from './postcontent.hooks.js';
import {ContentHider} from './Hider/hider.js';
/**
 * PostContent component
 * @param {string} postId
 * @param {string} tag
 * @param {string} type
 * @param {string} text
 * @param {string[]} imageUrls
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostContent({
    postId,
    tag,
    type,
    text,
    imageUrls,
    viewContext,
}) {
    const {
        postContent,
    } = usePostContent({postId, type, text, imageUrls, viewContext});
    return (
        <div className={contentClasses.root}>
            <ContentHider tag={tag} content={postContent} />
        </div>
    );
}

PostContent.propTypes = {
    postId: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    imageUrls: PropTypes.array,
    viewContext: PropTypes.string.isRequired,
};
