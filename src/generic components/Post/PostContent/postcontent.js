import React from 'react';
import PropTypes from 'prop-types';
import {contentClasses} from './postcontent.styles.js';
import {usePostContent} from './postcontent.hooks.js';
import {ContentHider} from './Hider/hider.js';
/**
 * PostContent component
 * @param {string} postId
 * @param {boolean} isNSFW
 * @param {boolean} isSpoiler
 * @param {string} type
 * @param {string} url
 * @param {string} text
 * @param {string[]} imageUrls
 * @param {string} viewContext
 * @return {React.Component}
 */
export function PostContent({
    postId,
    isNSFW,
    isSpoiler,
    type,
    url,
    text,
    imageUrls,
    poll,
    createdAt,
    viewContext,
}) {
    const {
        postContent,
    } = usePostContent({postId, type, text, imageUrls, poll, url, createdAt, viewContext});
    return (
        <div className={contentClasses.root}>
            <ContentHider content={postContent}
                isNSFW={isNSFW} isSpoiler={isSpoiler}/>
        </div>
    );
}

PostContent.propTypes = {
    postId: PropTypes.string.isRequired,
    isNSFW: PropTypes.bool.isRequired,
    isSpoiler: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    url: PropTypes.string,
    text: PropTypes.string,
    imageUrls: PropTypes.array,
    poll: PropTypes.object,
    createdAt: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
};
