import React from 'react';
import {HoverCard} from '../../../../generic components/Post/HoverCard/hovercard.js';
import {PostTitleLink} from './posttitlelink.js';
import {postContentClasses as styles} from './postpreview.styles.js';
import PropTypes from 'prop-types';

/**
 * The post content component. Renders the subreddit's name, post title.
 * @param {string} postId - The post id.
 * @param {string} subredditName - The subreddit name.
 * @param {string} subredditId - The subreddit id.
 * @param {string} viewContext - The view context.
 * @param {string} postUrl - The post URL.
 * @param {string} postTitle - The post title.
 * @return {JSX.Element} The post content component.
 */
function PostContent({postId, subredditName, subredditId, viewContext, postUrl, postTitle}) {
    return (
        <div className={styles.container}>
            <div className={styles.hoverCard}>
                <HoverCard
                    postId={postId}
                    entityName={subredditName}
                    entityId={subredditId}
                    viewContext={viewContext}
                    isUser={false}
                />
            </div>
            <div className={styles.postTitleLink}>
                <PostTitleLink
                    postUrl={postUrl}
                    postTitle={postTitle}
                />
            </div>
        </div>
    );
}

PostContent.propTypes = {
    postId: PropTypes.string.isRequired,
    subredditName: PropTypes.string.isRequired,
    subredditId: PropTypes.string.isRequired,
    viewContext: PropTypes.string.isRequired,
    postUrl: PropTypes.string.isRequired,
    postTitle: PropTypes.string.isRequired,
};

export {PostContent};
