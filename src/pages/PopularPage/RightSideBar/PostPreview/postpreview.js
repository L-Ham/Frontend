/* eslint-disable max-len */
import React from 'react';
import {PostStats} from './poststats.js';
import {PostContent} from './postcontent.js';
import {postPreviewClasses as styles} from './postpreview.styles.js';
import PropTypes from 'prop-types';

/**
 * Post preview component.
 * @param {string} postId - The post id.
 * @param {string} subredditName - The subreddit name.
 * @param {string} viewContext - The view context.
 * @param {string} postUrl - The post url.
 * @param {string} postTitle - The post title.
 * @return {JSX.Element} The post preview component.
 */
function PostPreview({postId, subredditName, viewContext, postUrl, postTitle}) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <PostContent
                    postId={postId}
                    subredditName={subredditName}
                    viewContext={viewContext}
                    postUrl={postUrl}
                    postTitle={postTitle}
                />
            </div>
            <div className={styles.stats}>
                <PostStats
                    upvotes={1}
                    comments={2}
                />
            </div>
        </div>
    );
}


PostPreview.propTypes = {
    postId: PropTypes.string.isRequired,
    subredditName: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
    postUrl: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired,
};

export {PostPreview};
